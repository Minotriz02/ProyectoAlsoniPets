import React from "react";
import styled, { css } from 'styled-components';
import Boton from "../botones/Boton";
import bg from "./img/bg.png"
import bigDog from './img/dogBig.png';
import dog1 from './img/dog1.png';
import dog2 from './img/dog2.png';
import dog3 from './img/dog3.png';
import dog4 from './img/dog4.png';
import paw1 from './img/paw1.png';
import paw2 from './img/paw2.png';
import paw3 from './img/paw3.png';

const Header = function ({ text, alter }) {
    const HeaderCon = styled.div`                           
                            display:flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 0rem 10rem;
                            background-image: url(${bg});
                            height: 840px;
                            background-repeat:no-repeat;
                            background-size: cover;
                            background-position-y:bottom;
                        `
    const TextCon = styled.div`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                        `

    const ImgCon = styled.div`
                            position:relative;
                            background-image: url(${bigDog});
                            width:41rem;
                            height:35rem;
                            background-repeat: no-repeat;
                        `

    const CircleImg = styled.img`
                            position:absolute;
                            ${props => props.dog1 && css`
                                top: 54%;
                                right: 103%;
                            `};
                            ${props => props.dog2 && css`
                                top: 19%;
                            `};
                            ${props => props.dog3 && css`
                                top: 103%;
                                right: 53%;
                            `};
                            ${props => props.dog4 && css`
                                top: -7%;
                                right: 17%;
                            `};
                            ${props => props.paw1 && css`
                                top: 33%;
                                right: 97%;
                            `};
                            ${props => props.paw2 && css`
                                top: 13%;
                                right: 0%;
                            `};
                            ${props => props.paw3 && css`
                                top: -6%;
                                right: 69%;
                            `};
                        `
    const SubText = styled.h3`
                            margin-bottom:8rem;
                        `

    return (
        <HeaderCon>
            <TextCon>
                <h2>{text}</h2>
                <SubText>{alter}</SubText>
                <Boton color="blue" text="Comprar"></Boton>
            </TextCon>
            <ImgCon>
                <CircleImg src={dog1} dog1></CircleImg>
                <CircleImg src={dog2} dog2></CircleImg>
                <CircleImg src={dog3} dog3></CircleImg>
                <CircleImg src={dog4} dog4></CircleImg>
                <CircleImg src={paw1} paw1></CircleImg>
                <CircleImg src={paw2} paw2></CircleImg>
                <CircleImg src={paw3} paw3></CircleImg>
            </ImgCon>
        </HeaderCon>);
}

export default Header;