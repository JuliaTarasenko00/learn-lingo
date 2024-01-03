import { GoBook } from 'react-icons/go';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  DetailsLessons,
  FavoriteButton,
  ItemDetailsTeacher,
  ItemLessons,
  Language,
  ListDetailsTeacher,
  ListLessons,
  NameTeacher,
  TitleDetailsTeacher,
  WrapperLessons,
  WrapperTeacher,
} from './TeachersMarkup.styled';

export const AboutTeacher = ({
  lessons_done,
  rating,
  price_per_hour,
  favorite,
  id,
  authUser,
  handelClick,
  name,
  surname,
  languages,
  lesson_info,
  conditions,
}) => {
  return (
    <>
      <WrapperLessons>
        <Language>Language</Language>
        <ListLessons>
          <ItemLessons>
            <DetailsLessons>
              <span className="lesson_online">
                <GoBook />
              </span>
              Lessons online
            </DetailsLessons>
          </ItemLessons>
          <ItemLessons>
            <DetailsLessons>Lessons done: {lessons_done}</DetailsLessons>
          </ItemLessons>
          <ItemLessons>
            <DetailsLessons>
              <span className="rating">
                <FaStar />
              </span>
              Rating: {rating}
            </DetailsLessons>
          </ItemLessons>
          <ItemLessons>
            <DetailsLessons>
              Price / 1 hour:
              <span className="price">{price_per_hour}$</span>
            </DetailsLessons>
          </ItemLessons>
          <ItemLessons>
            <FavoriteButton type="button" onClick={() => handelClick(id)}>
              {favorite.find(item => item.id === id) && authUser ? (
                <FaHeart color="#F4C550" />
              ) : (
                <FaRegHeart />
              )}
            </FavoriteButton>
          </ItemLessons>
        </ListLessons>
      </WrapperLessons>
      <WrapperTeacher>
        <NameTeacher>{`${name} ${surname}`}</NameTeacher>
        <ListDetailsTeacher>
          <ItemDetailsTeacher>
            <TitleDetailsTeacher>
              <span>Speaks: </span>
              <span className="languages">{languages.join(', ')}</span>
            </TitleDetailsTeacher>
          </ItemDetailsTeacher>
          <ItemDetailsTeacher>
            <TitleDetailsTeacher>
              <span>Lesson Info: </span>
              {lesson_info}
            </TitleDetailsTeacher>
          </ItemDetailsTeacher>
          <ItemDetailsTeacher>
            <TitleDetailsTeacher>
              <span>Conditions: </span>
              {conditions.join(' ')}
            </TitleDetailsTeacher>
          </ItemDetailsTeacher>
        </ListDetailsTeacher>
      </WrapperTeacher>
    </>
  );
};
