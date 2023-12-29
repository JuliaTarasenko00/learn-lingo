import styled from 'styled-components';

export const Section = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 24px;

  max-height: 650px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fbe9ba;
    border-radius: 15px;
  }
  @media screen and (min-width: 500px) {
    width: 600px;
    padding: 64px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: var(--main-text-color);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`;

export const WrapperTeacher = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  border-radius: 100px;
`;

export const WrapperName = styled.div``;

export const TitleTeacher = styled.p`
  color: var(--color-text-content);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 4px;
`;

export const NameTeacher = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FormTitle = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: block;
  & .radio_group {
    margin-bottom: 40px;
  }

  & input {
    display: block;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    outline: none;
    padding: 16px 18px;

    color: var(--main-text-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.37;
    transition: border var(--transition);

    &::placeholder {
      color: var(--main-text-color);
    }

    &:focus {
      border: 1px solid var(--active-button-background-color);
    }
  }
`;

export const WrapperInput = styled.div`
  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000c2;
  margin-top: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 40px;
  width: 100%;
  border-radius: 12px;
  background-color: var(--button-background-color);
  border: none;
  padding: 16px 0;

  color: var(--main-text-color);

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--active-button-background-color);
  }
`;
