import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Lexend Deca', sans-serif;
        margin: 0;
        background-color: #F2F2F2;
        position: relative;
    }
`;

export default GlobalStyles;