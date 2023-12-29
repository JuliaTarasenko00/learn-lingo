import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 1000px) {
    flex-wrap: nowrap;
  }
`;

export const WrapperAbout = styled.div`
  max-width: calc(500px + (720 - 500) * ((100vw - 390px) / (1440 - 390)));
  height: 530px;
  padding: calc(15px + (64 - 15) * ((100vw - 390px) / (1440 - 390)));
  border-radius: 30px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  max-width: 548px;
  color: var(--main-text-color);
  font-size: calc(25px + (48 - 25) * ((100vw - 390px) / (1440 - 390)));
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.96px;
  margin-bottom: 32px;

  & span {
    font-weight: 400;
    border-radius: 8px;
    background: #fbe9ba;
    display: inline-block;
    font-style: italic;
  }
`;

export const Description = styled.p`
  width: calc(200px + (471 - 200) * ((100vw - 390px) / (1440 - 390)));
  max-width: 100%;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.32px;
  margin-bottom: 64px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background-color: var(--button-background-color);
  border: none;
  padding: 16px 88px;
  max-width: 267px;
  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--active-button-background-color);
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 568px;
  max-width: 100%;
  height: 530px;
  border-radius: 30px;
  background: #fbe9ba;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const ImgGirl = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
`;

export const ImgMac = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const ListReviews = styled.ul`
  min-height: 116px;
  display: flex;
  column-gap: 100px;
  row-gap: 20px;
  justify-content: center;
  border-radius: 30px;
  border: 2px dashed #f4c550;
  flex-wrap: wrap;
  padding: 40px 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Number = styled.p`
  color: var(--main-text-color);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const TitleReviews = styled.p`
  color: rgba(18, 20, 23, 0.7);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;
