import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../style/Layout';
import arrow from '../img/arrow_slider.png';
import Carousel from 'react-elastic-carousel';
import ItemSlider from './ItemSlider';
import imgslider1 from '../img/slider1.jpg';
import imgslider2 from '../img/silder2.jpg';
import imgslider3 from '../img/slider3.jpg';
import imgslider4 from '../img/slider4.jpg';

function Slider() {
    const breakPoints = [
        {width:500, itemsToShow: 1, pagination: false, autoPlaySpeed: 1500, itemsToScroll: 1},
        {width:768, itemsToShow: 4, pagination: false, autoPlaySpeed: 1500, itemsToScroll: 1},
        // {width:1300, itemsToShow: 5, pagination: false, autoPlaySpeed: 1500, itemsToScroll: 1},
    ];

    return (
        <SliderStyled>
            <MainLayout>
                <div className='textslider'>
                    <p>기업들이법플및제작</p>
                    <a href="">
                        more
                        <img src={arrow} alt="arrow silder"></img>
                    </a>
                </div>
            </MainLayout>
            <div className='slider'>
                <Carousel enableAutoPlay breakPoints={breakPoints}>
                    <ItemSlider img={imgslider1}/>
                    <ItemSlider img={imgslider2}/>
                    <ItemSlider img={imgslider3}/>
                    <ItemSlider img={imgslider4}/>
                    <ItemSlider img={imgslider1}/>
                    <ItemSlider img={imgslider2}/>
                    <ItemSlider img={imgslider3}/>
                    <ItemSlider img={imgslider4}/>
                    <ItemSlider img={imgslider1}/>
                    <ItemSlider img={imgslider2}/>
                    <ItemSlider img={imgslider3}/>
                    <ItemSlider img={imgslider4}/>
                </Carousel>
            </div>
        </SliderStyled>
    )
}

const SliderStyled = styled.section`
    width: 100vw;
    height: 230px;

    @media screen and (max-width: 768px) {
        height: 170px;
        margin-top: 50px;
	}

    margin-top: 80px;
    margin-bottom: 110px;

    .slider {
        margin-top: 30px;
        .rec-carousel-wrapper {
            .rec-carousel {
                button {
                    display: none;
                }
            }
        }
    }

    .textslider {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p {
            color: var(--dark-color);
        }

        a {
            color: var(--dark-color);
            text-transform: uppercase;

            img {
                padding-left: 10px;
            }
        }
    }

`;
export default Slider
