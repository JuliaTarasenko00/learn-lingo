import {
  Description,
  Image,
  NameTeacher,
  Section,
  Title,
  TitleTeacher,
  WrapperName,
  WrapperTeacher,
} from './BookLesson.styled';
import { FormComponent } from './FormComponent';

export const BookLesson = ({ teacher }) => {
  return (
    <Section>
      <Title>Book trial lesson</Title>
      <Description>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Description>
      <WrapperTeacher>
        <Image
          src={teacher?.avatar_url}
          alt={teacher?.name}
          width="44"
          height="44"
        />
        <WrapperName>
          <TitleTeacher>Your teacher</TitleTeacher>
          <NameTeacher>{teacher?.name}</NameTeacher>
        </WrapperName>
      </WrapperTeacher>
      <FormComponent languages={teacher?.languages} />
    </Section>
  );
};
