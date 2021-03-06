import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    :root {
        --blue1: #08045E;
        --blue2: #0077B6;
        --blue3: #00B4D8;
        --blue4: #CAF0F8;
        --input-background: #E4E4E4;
        font-size: 50%;
    }

    @media (min-width: 700px) {
    :root{
        font-size: 56%;
    }}


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        overflow-x: hidden;
    }

    body, textarea, input {
        background-color: var(--blue3);
        color: #000;
        font-family: 'Poppins', sans-serif;
        
    }

    a {
        text-decoration: none;
        color: #000;
    }

    a:visited {
        color: #000;
    }
`