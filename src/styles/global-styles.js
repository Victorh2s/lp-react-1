import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,800;1,700&display=swap');
  * {
    margin:0;
    padding:0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size:2.4rem;
    font-family: ${({theme})=> theme.font,family.default};
  }
  h1 {
    font-size: 2.4rem;
    font-family:  ${({theme})=> theme.font,family.secondary};
  }
`;
