import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
  padding:0;
  box-sizing: border-box;
  font-weight: 400;
  font-style: normal;
  list-style:none;
  }
    display: grid;
  grid-template-columns: 280px auto;

  body, html, #root {
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Desabilitar o efeito de scroll */
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyle;