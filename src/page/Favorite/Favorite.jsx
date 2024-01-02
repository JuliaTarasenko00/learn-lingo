import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { auth, database } from 'config/firebase-config';
import { child, get, ref } from 'firebase/database';
import { Container } from 'globalStyles';
import { useEffect, useState } from 'react';

const FavoritePage = () => {
  const [favorite, setFavorite] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        async function fetchTeachers() {
          try {
            const data = await get(child(dbRef, `/favorite/${user.uid}`));
            if (data.exists()) {
              const model = data.val();
              Object.values(model).map(obj =>
                setFavorite(prev => [...prev, obj])
              );
            } else {
              console.log('No data available for teachers');
            }
          } catch (error) {
            console.error('Error fetching teachers:', error);
          }
        }
        fetchTeachers();
      }
    });

    return () => unsubscribe();
  }, [dbRef]);

  return (
    <section>
      <Container>
        <TeachersMarkup item={favorite} />
        {favorite.length === 0 && <p>Not Found</p>}
      </Container>
    </section>
  );
};

export default FavoritePage;
