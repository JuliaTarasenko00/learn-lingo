import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { GoBook } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { teachers } from 'helpers/teachers';
import {
  ButtonBookLesson,
  ButtonRM,
  DetailsLessons,
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

export const TeachersMarkup = () => {
  const [visibility, setVisibility] = useState({});
  console.log('visibility: ');

  return (
    <ListTeacher>
      {teachers.map(
        (
          {
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
          },
          index
        ) => {
          return (
            <ItemTeacher key={index}>
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
                {!visibility[index] && (
                  <ButtonRM
                    type="button"
                    onClick={() =>
                      setVisibility({ ...visibility, [index]: true })
                    }
                  >
                    Read more
                  </ButtonRM>
                )}
                {visibility[index] && (
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
                {visibility[index] && (
                  <ButtonBookLesson type="button">
                    Book trial lesson
                  </ButtonBookLesson>
                )}
              </Wrapper>
            </ItemTeacher>
          );
        }
      )}
    </ListTeacher>
  );
};
