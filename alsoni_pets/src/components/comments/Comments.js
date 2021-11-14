import React from "react";
import styled, { css } from 'styled-components';
import Boton from "../botones/Boton";
import Comment from "../comment/Comment"
import girl1 from '../comment/img/girl1.png';
import girl2 from '../comment/img/girl2.png';
import girl3 from '../comment/img/girl3.png';

const Comments = function ({ text }) {

    const CommentsCon = styled.div`                           
                            display:flex;
                            flex-direction:column;
                            padding: 0rem 10rem;
                        `
    const CommentCon = styled.div`                           
                            display:flex;
                            justify-content:space-around;
                            padding: 0rem 10rem;
                        `

    return (
        <CommentsCon>
            <h2>Clientes felices</h2>
            <CommentCon>
                <Comment name="Ana & Tobby" text="Productos asombrosos y un domicilio rápido" note="4" img={girl1} color="yellow"></Comment>
                <Comment name="Ana & Tobby" text="Productos asombrosos y un domicilio rápido" note="4" img={girl2} color="pink"></Comment>
            </CommentCon>
            <Boton color="blue" text="Ver más comentarios"></Boton>
        </CommentsCon>
    );
}

export default Comments;