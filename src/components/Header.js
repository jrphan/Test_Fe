import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import Button from './Button';
import Aos from 'aos';
import "aos/dist/aos.css";

function Header() {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    },[]);

    return (
        <HeaderStyled>
            <MainLayout className='main'>
                <div className='header'>
                    <div className="header__text">
                        videonly
                    </div>
                    <div className='header__btn'>
                        <a href="#">login</a>
                        <a href="#">join</a>
                    </div>
                </div>
                <div className='text'>
                    <h1 className='text__main' data-aos="fade-up">
                        비디온리는 <br/>
                        오직 당신의 브랜드만를 위해 <br/>
                        템플릿을 만듭니다 <br/>
                    </h1>
                    <p className='text__info' data-aos="fade-up" data-aos-delay="300">
                        나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요
                    </p>
                    <Button text={'시작하기'}/>
                </div>
            </MainLayout>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header `
    width: 100vw;
    height: 650px;

    @media screen and (max-width: 768px) {
        height: 600px;
        background-position: 40% center;
	}

    background-image: url('/img/Mainbanner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    .main {
        height: 100%;
        .header {
            padding-top: 20px;
    
            display: flex;
            flex-direction: row;
            justify-content: space-between;
    
            &__text {
                color: var(--white-color);
                font-size: 15px;
            }

            &__btn {
                a {
                    &:last-child {
                        background-color: var(--primary-color);
                        border: 1px solid var(--primary-color);
                    }
                    text-transform: uppercase;
                    color: var(--white-color);
    
                    margin-left: 10px;
                    padding: 5px 20px;
    
                    border: 1px solid var(--white-color);
                    border-radius: 5px;
                    transition: all 0.5s ease;

                    @media screen and (max-width: 768px) {
                        padding: 4px 8px;
	                }
    
                    &:hover {
                        background-color: var(--primary-color);
                        border: 1px solid var(--primary-color);
    
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    
        .text {
            width: 100%;
            height: 90%;
    
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &__main {
                text-align: center;
                color: var(--white-color);
            }

            
            &__info {
                padding-top: 20px;
                padding-bottom: 30px;
                color: var(--text-color);
            }
        }
    }

`;


export default Header;
