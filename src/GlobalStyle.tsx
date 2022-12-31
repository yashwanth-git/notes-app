import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgray;
        }
    }
    body, textarea{
        font-family:'Poppins',sans-serif;
    }
    .container{
        padding: 0 2.5em;
    }
`;

export default GlobalStyle;
