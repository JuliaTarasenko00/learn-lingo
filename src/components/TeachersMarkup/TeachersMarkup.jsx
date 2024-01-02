import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { set, ref } from 'firebase/database';
import { GoBook } from 'react-icons/go';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import {
  ButtonBookLesson,
  ButtonRM,
  DetailsLessons,
  FavoriteButton,
  ItemDetailsTeacher,
  ItemLessons,
  ItemLevels,
  ItemTeacher,
  Language,
  ListDetailsTeacher,
  ListLessons,
  ListLevels,
  ListTeacher,
  NameTeacher,
  Reviewer,
  ReviewerComment,
  ReviewerExperience,
  ReviewerImg,
  ReviewerItem,
  ReviewerList,
  ReviewerName,
  ReviewerRating,
  ReviewerWrapper,
  TitleDetailsTeacher,
  Wrapper,
  WrapperImg,
  WrapperLessons,
  WrapperTeacher,
} from './TeachersMarkup.styled';
import { Avatar } from '@mui/material';
import { useModal } from 'helpers/useModal';
import { ModalComponent } from 'components/Modal/Modal';
import { BookLesson } from 'components/FormBookLesson/BookLesson';
import { useSelector } from 'react-redux';
import { auth, database } from 'config/firebase-config';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const TeachersMarkup = ({ item }) => {
  const [visibility, setVisibility] = useState({});
  const [teacher, setTeacher] = useState();
  const { isOpen, openModal, closeModal } = useModal();
  const authUser = useSelector(state => state.authUser.token);

  const onClickModal = id => {
    const detailsTeacher = item.find(teacher => teacher.id === id);
    setTeacher(detailsTeacher);
    openModal('bookLesson');

    setVisibility({ ...visibility, [id]: false });
  };

  const handelClick = id => {
    if (!authUser) {
      return openModal('notAuth');
    }

    const favoriteTeacher = item.find(teacher => teacher.id === id);

    const userRef = ref(database, `/favorite/${auth.currentUser.uid}/${id}`);

    set(userRef, favoriteTeacher);
  };

  return (
    <>
      <ListTeacher>
        {item.map(
          ({
            name,
            surname,
            languages,
            levels,
            rating,
            reviews,
            price_per_hour,
            lessons_done,
            avatar_url,
            lesson_info,
            conditions,
            experience,
            id,
          }) => {
            return (
              <ItemTeacher key={id}>
                <WrapperImg>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar
                      src={avatar_url}
                      alt={experience}
                      width="96"
                      height="96"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </StyledBadge>
                </WrapperImg>
                <Wrapper>
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
                        <DetailsLessons>
                          Lessons done: {lessons_done}
                        </DetailsLessons>
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
                        <FavoriteButton
                          type="button"
                          onClick={() => handelClick(id)}
                        >
                          <FaRegHeart />
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
                          <span className="languages">
                            {languages.join(', ')}
                          </span>
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
                  {!visibility[id] && (
                    <ButtonRM
                      type="button"
                      onClick={() =>
                        setVisibility({ ...visibility, [id]: true })
                      }
                    >
                      Read more
                    </ButtonRM>
                  )}
                  {visibility[id] && (
                    <Reviewer>
                      <ReviewerExperience>{experience}</ReviewerExperience>
                      <ReviewerList>
                        {reviews.map(
                          (
                            { reviewer_name, reviewer_rating, comment },
                            index
                          ) => (
                            <ReviewerItem key={index}>
                              <ReviewerWrapper>
                                <ReviewerImg
                                  src="https://cdn-icons-png.flaticon.com/512/878/878516.png"
                                  alt="reviews"
                                  width="44"
                                  height="44"
                                  loading="lazy"
                                />
                                <div>
                                  <ReviewerName>{reviewer_name}</ReviewerName>
                                  <ReviewerRating>
                                    <span>
                                      <FaStar />
                                    </span>
                                    {reviewer_rating}
                                  </ReviewerRating>
                                </div>
                              </ReviewerWrapper>
                              <ReviewerComment>{comment}</ReviewerComment>
                            </ReviewerItem>
                          )
                        )}
                      </ReviewerList>
                    </Reviewer>
                  )}
                  <ListLevels>
                    {levels.map((i, index) => (
                      <ItemLevels key={index}>
                        <p>{i}</p>
                      </ItemLevels>
                    ))}
                  </ListLevels>
                  {visibility[id] && (
                    <ButtonBookLesson
                      type="button"
                      onClick={() => onClickModal(id)}
                    >
                      Book trial lesson
                    </ButtonBookLesson>
                  )}
                </Wrapper>
              </ItemTeacher>
            );
          }
        )}
      </ListTeacher>
      {isOpen.open && isOpen.name === 'bookLesson' && (
        <ModalComponent onClose={closeModal}>
          <BookLesson teacher={teacher} />
        </ModalComponent>
      )}
      {isOpen.open && isOpen.name === 'notAuth' && (
        <ModalComponent onClose={closeModal}>
          <p style={{ padding: 60 }}>Not Auth</p>
        </ModalComponent>
      )}
    </>
  );
};
