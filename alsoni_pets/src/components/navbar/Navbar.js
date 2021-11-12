import React from "react";
import styled, { css } from 'styled-components';
import logo from './img/logo.jpeg';
import Boton from "../botones/Boton";

const NavbarContainer = styled.div`
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 3rem;
                        `
const ImgLogo = styled.img`
                            border-radius: 20px;
                            height: 4rem;
                        `
const TitleContainer = styled.div`
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        `
const TitleLogo = styled.h1`
                            font-size:2rem;
                            ${props => props.blue && css`
                                color:#00A3FF;
                                margin-left: 1rem;
                            `};
                            ${props => props.cyan && css`
                                color: #5ED8FF;
                            `}; 
                        `

const Navbar = _ => <NavbarContainer>
    <TitleContainer>
        <ImgLogo src={logo}></ImgLogo>
        <TitleLogo blue>Alsoni</TitleLogo><TitleLogo cyan>Pets</TitleLogo>
    </TitleContainer>
    <div>
        <a>Perros</a>
        <a>Gatos</a>
        <a>Promociones</a>
        <a>¿Quienes somos?</a>
        <a>Contactanos</a>
    </div>
    <div>
        <Boton text="Entrar" color="blue"></Boton>
        <Boton text="Registrarse" color="white"></Boton>
    </div>
</NavbarContainer>;

export default Navbar;