import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { Section } from 'components/TeachersMarkup/TeachersMarkup.styled';
import { database } from 'config/firebase-config';
import { ref, child, get } from 'firebase/database';
import { Container } from 'globalStyles';
import { useEffect, useState } from 'react';
import { Button } from './Teacher.styled';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

const TEACHERS_COLLECTION = 'teachers';
const TEACHERS_PER_PAGE = 4;

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const filter = useSelector(state => state.filter.filterTeachers);

  const [count, setCount] = useState(TEACHERS_PER_PAGE);
  const dbRef = ref(database);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const data = await get(child(dbRef, TEACHERS_COLLECTION));
        if (data.exists()) {
          setTeachers(data.val());
        } else {
          console.log('No data available for teachers');
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    }
    fetchTeachers();
  }, [dbRef]);

  const handleMoreButtonClick = () => {
    if (count >= teachers.length) return;
    setCount(prevCount => prevCount + TEACHERS_PER_PAGE);
  };

  const limitedTeachers = teachers.slice(0, count);

  return (
    <Section>
      <Container>
        <Filter />
        {filter.length === 0 && (
          <>
            <TeachersMarkup item={limitedTeachers} />
            {count <= teachers.length && (
              <Button type="button" onClick={handleMoreButtonClick}>
                More
              </Button>
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default TeachersPage;
