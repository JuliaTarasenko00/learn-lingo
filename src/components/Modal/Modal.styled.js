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
  background: linear-gradient(
    90deg,
    rgb(116 115 115) 0%,
    rgb(83 81 81 / 32%) 0%
  );
  backdrop-filter: blur(0.1rem);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color var(--transition);
  color: #121417;
  &:hover,
  :focus {
    color: var(--active-button-background-color);
  }

  & svg {
    width: 32px;
    height: 32px;
  }
`;
