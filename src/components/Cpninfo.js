import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Aos from 'aos';
import "aos/dist/aos.css";

function Cpninfo({img, h3, h2, p, btn}) {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    },[]);

    return (
        <CpninfoStyled className="cpn">
             <div className="info__img" data-aos="fade-up">
                <div className="img">
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className="info__text" data-aos="fade-up" data-aos-delay="300">
                <h3>{h3}</h3>
                <h2>{h2}</h2>
                <p>{p}</p>
                <div className="btn" data-aos="fade-up">
                    <Button text={btn}/>
                </div>
            </div>
        </CpninfoStyled>
    )
}

const CpninfoStyled = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
	}

    .info__img {
        width: 40%;
        margin-right: 60px;

        @media screen and (max-width: 768px) {
            width: 100%;    
            margin: 0;
	    }
        
        .img {
            width: 350px;
            position: relative;
            height: 0px;
            overflow: hidden;
            padding-bottom: 100%;

            @media screen and (max-width: 768px) {
                padding-bottom: 90%;
	        }
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;   
            }
        }
    }

    .info__text {
        width: 40%;
        margin-left: 60px;

        @media screen and (max-width: 768px) {
            width: 100%;
            margin: 10px 0;
	    }

        h3 {
            text-transform: uppercase;
            color: var(--dark-color);
        }

        h2 {
            color: var(--white-color);
            padding: 10px 0 20px 0;
            @media screen and (max-width: 768px) {
                padding: 10px 0;
	        }
        }

        p {
            color: var(--white-color);
            line-height: 30px;
        }
        .btn {
            margin-top: 60px;
            @media screen and (max-width: 768px) {
                margin-top: 30px;
	        }
            .button {
                border: 1px solid var(--dark-color);
                color: var(--white-color);
                background-color: var(--dark-color);
            }
        }
    }
`;

export default Cpninfo
