import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 100%;
    
button{
    cursor: pointer;
    border: none;
    background: transparent;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol, li{
    list-style: none;
}
    
  }
`;
