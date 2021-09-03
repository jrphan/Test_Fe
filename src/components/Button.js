import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import "aos/dist/aos.css";

function Button({text}) {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    },[]);

    return (
        <BtnStyled href="#" className="button" data-aos="fade-up" data-aos-delay="400">
            {text}
        </BtnStyled>
    )
} 

const BtnStyled = styled.a `
    padding: 13px 60px;
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    color: var(--white-color);
    background-color: var(--primary-color);

    &:hover {
        opacity: 0.8;
        transition: all 0.5s ease;
    }
`;

export default Button
