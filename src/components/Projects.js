import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import Button from './Button';
import icon1 from '../img/icon_01.png';
import icon2 from '../img/icon_02.png';
import icon3 from '../img/icon_03.png';
import number1 from '../img/41.png';
import number2 from '../img/164.png';
import number3 from '../img/82.png';
import Aos from 'aos';
import "aos/dist/aos.css";


function Projects() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[]);

    return (
        <ProjectStyled>
            <MainLayout>
                <h2 data-aos="fade-up">체험 가능한 템플릿</h2>
                <div className="listitems">
                    <div className="item" data-aos="zoom-in">
                        <img src={icon1} alt=""/>
                        <p>사용중인 기업</p>
                        <img src={number1} alt="" className="number"/>
                    </div>
                    <div className="item" data-aos="zoom-in">
                        <img src={icon2} alt=""/>
                        <p>완료한 템플릿</p>
                        <img src={number2} alt="" className="number"/>
                    </div>
                    <div className="item" data-aos="zoom-in">
                        <img src={icon3} alt=""/>
                        <p>체험가능한 템플릿</p>
                        <img src={number3} alt="" className="number" />
                    </div>
                </div>
                <p className='text' data-aos="fade-up">나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해브세요!</p>
                <div className='btn' data-aos="fade-up">
                    <Button text={'시접하기'}/>
                </div>
            </MainLayout>
        </ProjectStyled>
    )
}

const ProjectStyled = styled.section `
    width: 100vw;
    min-height: 780px;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }
    

    background-color: var(--dark-color);

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        text-align: center;
        color: var(--white-color);
    }

    .listitems {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;

        min-height: 200px;
        width: 100%;

        margin-top: 60px;
        margin-bottom:100px;

        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1,1fr);
            column-gap: 0px;
            margin-top: 30px;
            margin-bottom: 50px;
        }

        .item {
            width: 300px;
            height: 230px;

            @media screen and (max-width: 768px) {
            
            margin-top: 30px;
            }

            background-color: var(--white-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                padding: 10px 0;
            }

            .number {
                padding-top: 25px;
            }
        }
    }

    .text {
        color: var(--text-color);
        text-align: center;
        margin-bottom: 40px;
    }

    .btn {
        text-align: center;
    }
`;


export default Projects
