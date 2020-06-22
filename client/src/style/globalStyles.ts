import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
    ${reset}
    html{
        height:100%;
    }
    * {
        box-sizing: border-box; 
    }
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.3em; }
    h4 { font-size: 1em; }
    h5 { font-size: 0.8em; }
    h6 { font-size: 0.7em; }
    body {
        background-color: ${props => props.theme.colors.backgroundColor};
        font-family: 'NanumGothic', 'Helvetica',' Neue', 'Helvetica', 'Arial', 'sans-serif';
        height:100%;
    }
    #root{
        height:100%;
    }
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: inherit;
            text-decoration: none;
        }
    }
    button,
    input,
    textarea {
        &:active, &:focus {
            outline: none;
        }
    }
`;
