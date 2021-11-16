import React from "react";
import styled from 'styled-components';
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
                            align-items:center;
                        `
    const CommentCon = styled.div`                           
                            display:flex;
                            justify-content:space-around;
                            padding: 0rem 10rem;
                            
                        `
    const Title = styled.h2`                           
                            float:left;
                            height:124px;
                            width:400px;
                            box-shadow:-70px 70px 0 -60px #3A8DA8;
                            align-self: flex-start;
                        `

    return (
        <CommentsCon>
            <Title>Clientes felices</Title>
            <CommentCon>
                <Comment name="Ana & Tobby" text="Productos asombrosos y un domicilio rápido" note="4" img={girl1} color="yellow" ></Comment>
                <Comment name="Cristina & Tom" text="Amo la experiencia al comprar" note="5" img={girl2} color="pink" ></Comment>
                <Comment name="Alejandra & Kitch" text="A mi perro le encanta los snacks de aquí" note="5" img={girl3} color="purple" ></Comment>
            </CommentCon>
            <Boton color="blue" text="Ver más comentarios"></Boton>
        </CommentsCon>
    );
}

export default Comments;