import img from '../../assets/img/girl.png';
import { Image, Section, Title, Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Section>
      <Wrapper>
        <Image src={img} alt="Loader..." width="100" />
        <Title>LearnLingo</Title>
      </Wrapper>
    </Section>
  );
};
