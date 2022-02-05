import {createGlobalStyle} from 'styled-components'

const GlobalStyles= createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

    *{
        box-sizing: border-box;
        padding:0 ;
        margin:0;
    }

    body {
        font-size:'Inter', sans-serif;
        display: flex;
        justify-content: center;
        align-items:center;
        min-height:100vh;
    }

    img {max-width: 100%;}

`
export default GlobalStyles