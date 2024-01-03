import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 566px;
  max-width: 100%;
  padding: 64px;
`;

export const Title = styled.h3`
  color: var(--main-text-color);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`;

export const Form = styled.form`
  display: block;
`;

export const Input = styled.input`
  border-radius: 12px;
  width: 100%;
  border: 1px solid rgba(18, 20, 23, 0.1);
  padding: 16px 18px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  display: block;
  outline: none;
  transition: border var(--transition);

  &::placeholder {
    color: var(--main-text-color);
  }
  &:focus {
    border: 1px solid var(--active-button-background-color);
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

export const InputWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 18px;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const PasswordVisibility = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  color: var(--main-text-color);
  transition: color var(--transition);
  background-color: transparent;
  border: none;

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;

  border-radius: 12px;
  background-color: var(--button-background-color);
  border: none;
  width: 100%;
  padding: 16px 0;
  margin: 40px auto 0;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--active-button-background-color);
  }
`;
