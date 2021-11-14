import React from "react";
import styled, { css } from 'styled-components';


const Comment = function ({ name, text, note, img, color }) {

    const CommentCon = styled.div`                           
                            display:flex;
                            align-items: center;
                            flex-direction:column;
                        `
    const ImgCon = styled.div`                           
                            display:flex;
                            align-items: center;
                            justify-content: space-between;
                            ${color == "yellow" && css`
                                background-color: #FFF1A6;
                            `};
                            ${color == "pink" && css`
                                background-color: #EBA8BF;
                            `};
                            ${color == "purple" && css`
                                background-color: #DDC7ED;
                            `};
                        `
    const TextCon = styled.div`
                            background-color:#124C5F;
                        `

    return (
        <CommentCon>
            <ImgCon>
                <img src={img}></img>
            </ImgCon>
            <TextCon>
                <h4>{name}</h4>
                <p>{text}</p>

            </TextCon>
        </CommentCon>
    );
}

export default Comment;