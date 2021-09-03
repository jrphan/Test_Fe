import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import item1 from '../img/BigIcon_1.png';
import item2 from '../img/BigIcon_2.png';
import item3 from '../img/BigIcon_3.png';
import item4 from '../img/BigIcon_4.png';
import Aos from 'aos';
import "aos/dist/aos.css";

function Procedure() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[]);

    return (
        <ProcedureStyled>
            <MainLayout>
                <h2 data-aos="fade-up">한눈에 보는 템플릿 절차</h2>
                <p data-aos="fade-up" data-aos-delay="100">비디온리가아직 그민되시나요?</p>
                <p data-aos="fade-up" data-aos-delay="200">비디온리는 오직 당신만을 위한볍빠넷을동해 기다리고 있습니다</p>
                <div className="listitems">
                    <div className="item" data-aos="zoom-in">
                        <img src={item1} alt=""/>
                        <h3>이미지 찾기</h3>
                        <p>내 회사에 맞는 이미지를찾아 정합니다</p>
                    </div>
                    <div className="item" data-aos="zoom-in">
                        <img src={item2} alt=""/>
                        <h3>만들기</h3>
                        <p>정해든 이미지에 맞춰 팀플릿을 만듭니다</p>
                    </div>
                    <div className="item" data-aos="zoom-in">
                        <img src={item3} alt=""/>
                        <h3>정리하기</h3>
                        <p>회사와 비디온리가 소통을통해 킬리티를 높입니다.</p>
                    </div>
                    <div className="item" data-aos="zoom-in">
                        <img src={item4} alt=""/>
                        <h3>제작 완료</h3>
                        <p>세상에 단 하나 뿐이 영상 제작 완료!</p>
                    </div>
                </div>
            </MainLayout>
        </ProcedureStyled>
    )
}

const ProcedureStyled = styled.section `
    width: 100%;
    min-height: 760px;

    @media screen and (max-width: 768px) {
        min-height: 1500px;
    }

    background-color: var(--white-color);

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        text-align: center;
        margin-bottom: 30px;
    }

    p {
        text-align: center;
        margin-bottom: 10px;
    }

    .listitems {
        min-height: 300px;
        width: 100%;
        margin-top: 50px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            margin-top: 0;
        }


        .item {
            height: 300px;
            width: 200px;

            @media screen and (max-width: 768px) {
                width: 70vw;
                margin-top: 30px;
            }


            margin: 0 15px;
            background-color: var(--secondary-color);

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            p {
                width: 150px;
            }

            h3 {
                color: var(--primary-color);
                font-weight: bold;
                padding-top: 20px;
                padding-bottom: 15px;
            }
        }
    }
`;

export default Procedure
