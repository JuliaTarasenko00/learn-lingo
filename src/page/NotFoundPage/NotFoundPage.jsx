import { Container } from 'globalStyles';
import img from '../../assets/img/not_found.png';
import { Img, Section } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <Img src={img} alt="Page not found" />
      </Container>
    </Section>
  );
};

export default NotFoundPage;
