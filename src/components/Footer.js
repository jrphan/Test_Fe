import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import Icon1 from '../img/-e-footer_sns_icon_1.png';
import Icon2 from '../img/-e-footer_sns_icon_2.png';
import Icon3 from '../img/-e-footer_sns_icon_3.png';
import Icon4 from '../img/-e-footer_sns_icon_4.png';
import Aos from 'aos';
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[]);

    return (
        <FooterStyled>
            <MainLayout>
                <div className='footer'>
                    <div className='footer__text'>
                        <div className='text-h3' >
                            <h3>이용약관</h3>
                            <h3>개인정보처리방침</h3>
                            <h3>고객센터</h3>
                        </div>
                        <div className='text-p' >
                            <p>비디온리 | 대표자 : 홍길동 | 사업자 등록번호 : 356-00-00000</p>
                            <p>이메일 : test0101@vidionly.co.kr FAX :070-0000-0000</p>
                            <p>서울특별시 강남구 도산대로 8길 173층</p>
                        </div>
                        <div className='copyright' >
                            <p>
                                Copyright@ VIDIONILY ALL right reverved.
                            </p>
                        </div>
                    </div>
                    <div className='footer__icon' >
                        <a href="">
                            <img src={Icon1} alt=""/>
                        </a>
                        <a href="">
                            <img src={Icon2} alt=""/>
                        </a>
                        <a href="">
                            <img src={Icon3} alt=""/>
                        </a>
                        <a href="">
                            <img src={Icon4} alt=""/>
                        </a>
                    </div>
                </div>
            </MainLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer `
    width: 100vw;
    min-height: 325px;

    background-color: var(--secondary-color);

    .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            justify-content: center;
        }

        &__text {
            padding-top: 50px;
            @media screen and (max-width: 768px) {
                    padding-top: 20px;
            }
            .text-h3 {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 20px 0;
                @media screen and (max-width: 768px) {
                    text-align: center;
                }
            }
            .text-p {
                p {
                    color: #848a8f;
                    padding-bottom: 5px;
                    @media screen and (max-width: 768px) {
                    text-align: center;
                    }
                }
            }
            .copyright {
                p {
                    margin-top: 30px;
                    color: #848a8f;
                    @media screen and (max-width: 768px) {
                    text-align: center;
                    }
                }
            }
        }

        &__icon {
            @media screen and (max-width: 768px) {
                margin-top: 30px;
            }
            img {
                margin-right: 10px;
                @media screen and (max-width: 768px) {
                    margin-right: 20px;
                }
            }
        }
    }
`;

export default Footer
