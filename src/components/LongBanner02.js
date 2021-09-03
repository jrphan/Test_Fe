import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import Aos from 'aos';
import "aos/dist/aos.css";

function LongBanner02() {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    },[]);

    return (
        <LongBannerStyled>
            <MainLayout>
                <h2 data-aos="fade-up">팀원들과 함께 공유하며 작업하세요</h2>
                <p data-aos="fade-up" data-aos-delay="200">작업량이 않을 때, 마감으로 정신없을 때</p>
                <p data-aos="fade-up" data-aos-delay="300">바벨 때 주고받는 파일이 말생이라면? 비디온리하세요!</p>
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

    background-image: url('/img/Longbanner_02.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        color: var(--white-color);
        text-align: center;
        padding-bottom: 5px;
    }

    p {
        color: var(--text-color);
        text-align: center;
        padding-top: 10px;
    }
`;

export default LongBanner02
