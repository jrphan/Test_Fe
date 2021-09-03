import React, { useEffect } from 'react';
import { MainLayout } from '../style/Layout';
import styled from 'styled-components';
import item1 from '../img/item1.jpg';
import item2 from '../img/item2.jpg';
import item3 from '../img/item3.jpg';
import arrow from '../img/Arrow.png';
import Aos from 'aos';
import "aos/dist/aos.css";



function Tutorial() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    },[]);

    return (
        <TutorialStyled>
            <MainLayout>
                <div className='tutorial__text'>
                    <h3 data-aos="fade-up">tutorial guide</h3>
                    <h2 data-aos="fade-up">영상 만들기, 어렵지 않아요</h2>
                    <p data-aos="fade-up">나어거 맞는션은</p>
                    <p data-aos="fade-up">당설이지 담1 지금지집 재연하코세이</p>
                </div>
                <div className='tutorial__items'>
                    <div className="item" data-aos="zoom-in" data-aos-delay="200">
                        <div class="item-img">
                            <a href="">
                                <p>첫번째</p>
                                <img src={arrow} alt="" className="arrow"/>
                                <h2>내 브랜드에 맞는영상 만들기</h2>
                                <img src={item1} alt="item" className="img"/>
                            </a>
                        </div>
                    </div>
                    <div className="item" data-aos="zoom-in" data-aos-delay="200">
                        <div class="item-img">
                            <a href="">
                                <p>두번째</p>
                                <img src={arrow} alt="" className="arrow"/>
                                <h2 className='h2'>작업자들이 소통하며템플릿 영상 작업</h2>
                                <img src={item2} alt="item" className="img"/>
                            </a>
                        </div>
                    </div>
                    <div className="item" data-aos="zoom-in" data-aos-delay="200">
                        <div class="item-img">
                            <a href="">
                                <p>세번재</p>
                                <img src={arrow} alt="" className="arrow"/>
                                <h2 className='h'>단 하나 뿐인 <br/>
                                    내브랜드영상 제작 완료</h2>
                                <img src={item3} alt="item" className="img"/>
                            </a>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </TutorialStyled>
    )
}

const TutorialStyled = styled.section `
    width: 100vw;
    min-height: 780px;
    padding: 80px 0;

    background-color: var(--secondary-color);

    @media screen and (max-width: 768px) {
        min-height: 780px;
        padding: 60px 0;
	}

    .tutorial__text {
        h3 {
            color: var(--primary-color);
            text-transform: uppercase;
            padding-bottom: 15px;
        }

        h2 {
            padding-bottom: 20px;
        }

        p {
            padding-top: 10px;
        }
       
    }

    .tutorial__items {
        padding-top: 40px;

        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 10px;

        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1,1fr);
            column-gap: 0px;
            padding-top: 20px;
	    }
      
        .item {
            position: relative;
            height: 0px;
            overflow: hidden;
            padding-bottom: 150%;
            transition: all 0.3s ease;
            margin: 0 5px;

            @media screen and (max-width: 768px) {
                padding-bottom: 120%;
                margin-top: 30px;
	        }

            &:hover {
                transform: scale(1.05);
                transition: all 0.3s ease;
                a {
                    color: var(--primary-color);
                    transition: all 0.3s ease;
                }

                .arrow {
                    right: 20px;
                    transition: all 0.3s ease;
                }
            }

            a {
                color: var(--dark-color);
                transition: all 0.3s ease;
            }
            p {
                position: absolute;
                top: 40px;
                left: 30px;
                z-index: 10;
            }
            h2 {
                position: absolute;
                top: 65px;
                left: 30px;
                z-index: 10;
                width: 200px;
            }
            .h2 {
                width: 240px;
            }
            .h {
                width: 260px;
            }
            .arrow {
                position: absolute;
                top: 40px;
                right: 30px;
                z-index: 10;
                transition: all 0.3s ease;
            }
            .img {
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
`;

export default Tutorial
