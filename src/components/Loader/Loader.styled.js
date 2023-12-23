import styled, { keyframes } from 'styled-components';

export const Section = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  display: grid;
  place-items: center center;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: max-content;
`;

const image = keyframes`
50% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(3px);
  }
`;

export const Image = styled.img`
  animation: 1s ${image} infinite;
`;

export const Title = styled.p`
  color: var(--main-text-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
  margin-top: 10px;
  text-align: center;
`;
