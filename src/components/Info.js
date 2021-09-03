import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import img from '../img/img.png';
import Cpninfo from './Cpninfo';

function Info() {
    return (
        <InfoStyled>
            <MainLayout>
                <Cpninfo 
                    img={img} 
                    h3={'what is the videonly'}
                    h2={'비디온러는 무엇인가요?'} 
                    p={'세상에는 수많은 회사들이존재합니다. 비디온리에서는그중에서도 오직 단하나의 영상 팀플릿을 만들니다.우리는특정 희사에서 원하는 팀플릿을 만들고, 해당팀플릿을사용해서 직절더 나은비디오를 만들수있도록 컨설팅을 해줄 수 있습니다 세계에서 하나 뿐인팀플릿, 직절 경험해보세요.'} 
                    btn={'시작하기'}  
                />
            </MainLayout>
        </InfoStyled>
    )
}

const  InfoStyled = styled.section `
    width: 100vw;
    min-height: 750px;

    @media screen and (max-width: 768px) {
        min-height: 700px;
	}

    background-color: var(--primary-color);

    display: flex;
    justify-content: center;
    align-items: center;
   
    

`;

export default Info
