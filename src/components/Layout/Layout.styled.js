import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 64px 15px 64px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImgLogo = styled.img``;

export const TitleLogo = styled.p`
  color: var(--main-text-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const Navigate = styled(NavLink)`
  color: var(--main-text-color);
  font-size: 16px;
  line-height: 1.25;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.active {
    color: #8a8a89;
  }
`;

export const WrapperAut = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ButtonLogin = styled.button`
  cursor: pointer;
  color: var(--main-text-color);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration-color: transparent;
  transition: text-decoration var(--transition),
    text-decoration-color var(--transition);

  & span {
    display: inherit;
    transition: color var(--transition);
  }

  &:hover,
  :focus {
    & span {
      color: var(--active-color);
    }
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: var(--active-color);
  }
`;

export const ButtonRegister = styled.button`
  cursor: pointer;
  padding: 14px 39px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  transition: background-color var(--transition), color var(--transition);

  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;

  &:hover,
  :focus {
    background-color: var(--active-color);
    color: var(--main-text-color);
  }
`;
