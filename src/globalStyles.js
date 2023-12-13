import 'modern-normalize/modern-normalize.css';

import { createGlobalStyle } from 'styled-components';

import RobotoBlack from './assets/fonts/Roboto-Black.ttf';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #000;
  color: #fff;
}

p,
h1,
h2,
h3 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;

  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
}


  @font-face {
    font-family: 'RobotoBlack';
    src: local('Roboto'), local('Roboto-Black'),
         url(${RobotoBlack}) format('truetype');
    font-weight: 900; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Bold'),
         url(${RobotoBold}) format('truetype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Medium'),
         url(${RobotoMedium}) format('truetype');
    font-weight: 500; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Regular'),
         url(${RobotoRegular}) format('truetype');
    font-weight: 400; 
    font-style: normal;
    font-display: swap;
  }

`;
