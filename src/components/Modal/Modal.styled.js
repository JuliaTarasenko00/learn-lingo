import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(2px);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 30px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #121417;
  &:hover,
  :focus {
    color: #3e85f3;
  }

  & svg {
    width: 32px;
    height: 32px;
  }
`;
