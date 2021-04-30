import { createGlobalStyle } from "styled-components";
import LoraRegular from "../static/Lora-Regular.ttf";
import LoraItalic from "../static/Lora-Italic.ttf";
import LoraSemiBold from "../static/Lora-SemiBold.ttf";

export const theme = {
    navBlue: '#3E4E5B',
    bannerBlue: '#B9CADA',
    lightBlue: '#ECF3F9',
    footerBlue: '#394855',
    magenta: '#814F67',
    white: '#ffffff',
    textBlue: '#1A2A36',


    phone: "480px",
    mobile: "768px",
    tablet: "992px",
    desktop: "1200px",
    largeDesktop: "1440px"
}

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Lora Regular';
        font-style: normal;
        font-weight: normal;
        src: url(${LoraRegular}) format('ttf');
    }


    @font-face {
        font-family: 'Lora Italic';
        font-style: normal;
        font-weight: normal;
        src: url(${LoraItalic}) format('ttf');
    }


    @font-face {
        font-family: 'Lora Semibold';
        font-style: normal;
        font-weight: normal;
        src: url(${LoraSemiBold}) format('ttf');
    }

    * {
        user-select: none;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }


    body {
        font-family: 'Lora Regular';
        margin: 0;
        padding: 0;
        color: ${theme.textBlue};

        a:hover, 
        a:focus {
            text-decoration: none;
            
        }
    }

    p {
        font-size: 1.2rem;
    }

    a {
        font-size: 1.2rem;
    }

    a:hover {
        color: inherit;
        text-decoration: none;
    }

  
`;
