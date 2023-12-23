import { Container } from 'globalStyles';
import { Outlet } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Suspense } from 'react';
import ukraine from '../../assets/img/ukraine.jpg';
import {
  ButtonLogin,
  ButtonRegister,
  Header,
  HeaderContainer,
  ImgLogo,
  List,
  Nav,
  Navigate,
  TitleLogo,
  WrapperAut,
  WrapperLogo,
} from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { useModal } from 'helpers/useModal';
import { ModalComponent } from 'components/Modal/Modal';
import { Register } from 'components/FormAut/Register';
import { Login } from 'components/FormAut/Login';

const Layout = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <WrapperLogo>
              <ImgLogo
                src={ukraine}
                alt="Flag Ukraine"
                width="28"
                height="28"
              />
              <TitleLogo>LearnLingo</TitleLogo>
            </WrapperLogo>
            <Nav>
              <List>
                <li>
                  <Navigate activeclassname="active" to="/">
                    Home
                  </Navigate>
                </li>
                <li>
                  <Navigate to="teachers">Teachers</Navigate>
                </li>
              </List>
            </Nav>
            <WrapperAut>
              <li>
                <ButtonLogin type="button" onClick={() => openModal('login')}>
                  <span>
                    <FiLogIn />
                  </span>
                  Log in
                </ButtonLogin>
              </li>
              <li>
                <ButtonRegister
                  type="button"
                  onClick={() => openModal('register')}
                >
                  Register
                </ButtonRegister>
              </li>
            </WrapperAut>
          </HeaderContainer>
        </Container>
        {isOpen.open && isOpen.name === 'login' && (
          <ModalComponent onClose={closeModal}>
            <Login />
          </ModalComponent>
        )}
        {isOpen.open && isOpen.name === 'register' && (
          <ModalComponent onClose={closeModal}>
            <Register />
          </ModalComponent>
        )}
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
