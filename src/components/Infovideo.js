import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import img2 from '../img/img02.jpg';
import Cpninfo from './Cpninfo';

function Infovideo() {
    return (
        <InfovideoStyled>
            <MainLayout>
            <Cpninfo 
                    img={img2} 
                    h3={'how do i make a video'}
                    h2={'비디온러는 무엇인가요?'} 
                    p={'세상에는 수많은 회사들이존재합니다. 비디온리에서는그중에서도 오직 단하나의 영상 팀플릿을 만들니다.우리는특정 희사에서 원하는 팀플릿을 만들고, 해당팀플릿을사용해서 직절더 나은비디오를 만들수있도록 컨설팅을 해줄 수 있습니다 세계에서 하나 뿐인팀플릿, 직절 경험해보세요.'} 
                    btn={'시작하기'}  
                />
            </MainLayout>
        </InfovideoStyled>
    )
}

const InfovideoStyled = styled.section `
    width: 100vw;
    min-height: 750px;

    background-color: var(--secondary-color);

    display: flex;
    justify-content: center;
    align-items: center;
   
   .cpn {
       flex-direction: row-reverse;
       .info__img {
            width: 40%;
            margin-left: 60px;

            @media screen and (max-width: 768px) {
                width: 100%;
                margin-top: 30px;
                margin-left: 0;
	        }
        
            .img {
                width: 350px;
                position: relative;
                height: 0px;
                overflow: hidden;
                padding-bottom: 100%;
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
            margin-right: 60px;

            @media screen and (max-width: 768px) {
                width: 100%;
                margin-top: 10px;
                margin-left: 0;
	        }
        

            h3 {
                text-transform: uppercase;
                color: var(--primary-color);
                text-align: right;

                @media screen and (max-width: 768px) {
                    text-align: left;
	            }
        
            }

            h2 {
                color: var(--dark-color);
                padding: 10px 0 20px 0;
                text-align: right;
                @media screen and (max-width: 768px) {
                    text-align: left;
                    padding: 10px 0;
	            }
            }

            p {
                color: var(--dark-color);
                line-height: 30px;
                text-align: right;
                @media screen and (max-width: 768px) {
                    text-align: left;
	            }
            }
            .btn {
                margin-top: 60px;
                text-align: right;
                @media screen and (max-width: 768px) {
                    text-align: left;
                    margin-top: 30px;
	            }
                .button {
                    border: 1px solid var(--primary-color);
                    color: var(--white-color);
                    background-color: var(--primary-color);
                }
            }
        }
    }
`;

export default Infovideo
