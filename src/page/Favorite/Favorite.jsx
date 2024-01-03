import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { Section } from 'components/TeachersMarkup/TeachersMarkup.styled';
import { database } from 'config/firebase-config';
import { Container } from 'globalStyles';
import { useFavorite } from 'helpers/favorite';

const FavoritePage = () => {
  const favorite = useFavorite(database);

  return (
    <Section>
      <Container>
        <TeachersMarkup item={favorite} />
        {favorite.length === 0 && <p>Not Found</p>}
      </Container>
    </Section>
  );
};

export default FavoritePage;
