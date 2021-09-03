import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import Button from './Button';
import Aos from 'aos';
import "aos/dist/aos.css";

function LongBanner01() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[]);

    return (
        <LongBannerStyled>
            <MainLayout>
                <h2 data-aos="fade-up">컬리티있는 브랜딩, 비디온리 하세요</h2>
                <p data-aos="fade-up">나에게 맞는 팀플릿,양선이지 말고 지금 직접 체힙해보세요</p>
                <div className="btn" data-aos="fade-up">
                    <Button text={"시작하기"}/>
                </div>
            </MainLayout>
        </LongBannerStyled>
    )
}

const LongBannerStyled = styled.section `
    width: 100vw;
    height: 280px;

    @media screen and (max-width: 768px) {
    height: 250px;
	}

    background-image: url('/img/Longbanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        color: var(--white-color);
        text-align: center;
    }

    p {
        color: var(--text-color);
        text-align: center;
        padding-top: 10px;
        padding-bottom: 25px;
    }

    .btn {
        text-align: center;
        .button {
            color: var(--dark-color);
            background-color: var(--white-color);
            border: 1px solid var(--white-color);
            font-weight: bold;
        }
    }
`;


export default LongBanner01
