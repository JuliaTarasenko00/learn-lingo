import { useNavigate } from 'react-router-dom';
import { Container } from 'globalStyles';
import {
  Button,
  Description,
  Wrapper,
  ImgGirl,
  ImgMac,
  Item,
  ListReviews,
  Number,
  Section,
  Title,
  TitleReviews,
  WrapperAbout,
  WrapperImage,
} from './Home.styled';
import girl from '../../assets/img/girl.png';
import mac from '../../assets/img/macimg.png';

const HomePage = () => {
  const navigate = useNavigate();

  const options = [
    {
      number: '32,000 +',
      title: 'Experienced tutors',
    },
    {
      number: '300,000 +',
      title: '5-star tutor reviews',
    },
    {
      number: '120 +',
      title: 'Subjects taught',
    },
    {
      number: '200 +',
      title: 'Tutor nationalities',
    },
  ];

  return (
    <Section>
      <Container>
        <Wrapper>
          <WrapperAbout>
            <Title>
              Unlock your potential with the best <span>language</span> tutors
            </Title>
            <Description>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Description>
            <Button type="button" onClick={() => navigate('teachers')}>
              Get started
            </Button>
          </WrapperAbout>
          <WrapperImage>
            <ImgGirl src={girl} alt="girl" width="339" />
            <ImgMac src={mac} alt="mac" width="391" />
          </WrapperImage>
        </Wrapper>
        <ListReviews>
          {options.map(({ number, title }) => (
            <Item key={title}>
              <Number>{number}</Number>
              <TitleReviews>{title}</TitleReviews>
            </Item>
          ))}
        </ListReviews>
      </Container>
    </Section>
  );
};

export default HomePage;
