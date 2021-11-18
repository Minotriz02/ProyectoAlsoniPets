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

const LinkNav = styled.a`
                            margin:0rem 2rem;
                            text-decoration:none;
                            color: #000;
                            :hover{
                                color: #00A3FF;
                                border-bottom-style: solid;
                                border-bottom-color: #00A3FF;
                                border-bottom-width: 2px;
                            }
                        `

const Navbar = function ({ onClick }) {

    return (<NavbarContainer>
        <TitleContainer>

            <ImgLogo src={logo}></ImgLogo>
            <TitleLogo blue>Alsoni</TitleLogo><TitleLogo cyan>Pets</TitleLogo>
        </TitleContainer>
        <div>
            <LinkNav href="">Perros</LinkNav>
            <LinkNav href="">Gatos</LinkNav>
            <LinkNav href="">Promociones</LinkNav>
            <LinkNav href="">¿Quienes somos?</LinkNav>
            <LinkNav href="">Contactanos</LinkNav>
        </div>
        <div>
            <Boton text="Entrar" color="blue" onClick={onClick}></Boton>
            <Boton text="Registrarse" color="green" onClick={onClick}></Boton>
        </div>
    </NavbarContainer>);
}

export default Navbar;