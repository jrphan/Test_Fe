import React from 'react';
import styled from 'styled-components';

function ItemSlider({img}) {
    return (
        <ItemSliderStyled>
            <img src={img} alt=""/>
        </ItemSliderStyled>
    )
}

const ItemSliderStyled = styled.div `
    img {
        height: 180px;
        width: 300px;
    }
`;
export default ItemSlider
