import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle `
    :root {
        --primary-color: #fa5805;
        --secondary-color: #f9fafb;
        --dark-color: #222222;
        --white-color: #ffffff;
        --text-color: #dcdcdc;
        --xs-min: 768px;
        --sm-min: 992px;
        --md-min: 1200px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;

    }

    ::-webkit-scrollbar-thumb {
        background: var(--dark-color); 
        border-radius: 10px;
    }

    * {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;

        font-family: 'Noto Sans JP', sans-serif;
        font-size: 13px;

        @media screen and (max-width: 768px) {
            font-size: 10px;
	    }
    }

    html, body {
        color: var(----dark-color);
        overflow-x: hidden;
    }

    h1 {
        font-size: 50px;

        @media screen and (max-width: 768px) {
            font-size: 25px;
	    }
    }

    h2 {
        font-size: 24px;
        @media screen and (max-width: 768px) {
            font-size: 19px;
	    }
    }

    h3 {
        font-size: 15px;
    }
`;

export default GlobalStyled;
