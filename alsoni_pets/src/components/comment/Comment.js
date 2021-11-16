import React from "react";
import styled, { css } from 'styled-components';
import StarSystem from "../star/StarSystem";


const Comment = function ({ name, text, note, img, color }) {



    const CommentCon = styled.div`                           
                            display:flex;
                            align-items: center;
                            flex-direction:column;
                            margin:2rem;
                            
                        `
    const ImgCon = styled.div`                           
                            display:flex;
                            align-items: center;
                            justify-content: space-between;
                            height:250px;
                            width: -webkit-fill-available;
                            ${color === "yellow" && css`
                                background-color: #FFF1A6;
                            `};
                            ${color === "pink" && css`
                                background-color: #EBA8BF;
                            `};
                            ${color === "purple" && css`
                                background-color: #DDC7ED;
                            `};
                            border-radius: 60px 60px 0px 0px;
                        `
    const TextCon = styled.div`
                            background-color:#124C5F;
                            padding: 2rem;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: -webkit-fill-available;
                        `

    const StartCon = styled.div`
                            display:flex;
                            text-align:center;
                            align-items: center;
                            justify-content: center;
                        `

    const Name = styled.h4`
                            font-family: 'Rubik', sans-serif;
                            color:#DDCA69;
                            font-size:28px;
                        `
    const Comm = styled.p`
                            font-family: 'Rubik', sans-serif;
                            color:white;
                            font-size:14px;
                            margin:1rem;
                        `

    return (
        <CommentCon>
            <ImgCon>
                <img src={img} alt="persona con perro"></img>
            </ImgCon>
            <TextCon>
                <Name>{name}</Name>
                <Comm>{text}</Comm>
                <StartCon>
                    <StarSystem cal={note}></StarSystem>
                    <Comm>{note}/5</Comm>
                </StartCon>
            </TextCon>

        </CommentCon>
    );
}

export default Comment;