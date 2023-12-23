import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { Section } from 'components/TeachersMarkup/TeachersMarkup.styled';
import { Container } from 'globalStyles';

const TeachersPage = () => {
  return (
    <Section>
      <Container>
        <TeachersMarkup />
      </Container>
    </Section>
  );
};

export default TeachersPage;
