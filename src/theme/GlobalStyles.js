import { createGlobalStyle } from "styled-components";
import LoraRegular from "../static/Lora-Regular.ttf";
import LoraItalic from "../static/Lora-Italic.ttf";
import LoraSemiBold from "../static/Lora-SemiBold.ttf";

export const theme = {
    navBlue: '#3E4E5B',
    bannerBlue: '#B9CADA',
    magenta: '#814F67',


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

        a:hover, 
        a:focus {
            text-decoration: none;
            
        }
    }

    a:hover {
        color: inherit;
        text-decoration: none;
    }

  
`;
