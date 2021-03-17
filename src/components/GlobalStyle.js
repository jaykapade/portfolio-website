import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background:#1b1b1b;
    font-family: 'Inter',sans-serif;
}
button{
    font-weight:bold;
    font-size:0.9rem;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    font-family: 'Inter',sans-serif;
    transition:all 0.5s ease;
    &:hover{
        background-color:#23d997;
        color:black;

    }
    
    
}
h2{
        font-weight:lighter;
        font-size:2rem;
    }
    h3{
        color:white
    }
    a{
        font-size:1.1rem;
    }
    h4{
        font-weight:bold;
        font-size:2rem;
    }
    span{
        font-weight:bold;
        color:#23d997;
    }
    p{
        padding:2rem 0rem;
        color: #ccc;
        font-size:1.1rem;
       
    }
`;

export default GlobalStyle;
