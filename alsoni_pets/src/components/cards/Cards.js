import React from "react";
import styled, { css } from 'styled-components';

const Cards = function ({  text,  img, color }) {

const CardCon = styled.div`
                        display:flex;
                        align-items: center;
                        flex-direction:column;
                        justify-content: center;
                        width: 200px;
                        height: 224.81px;
                        ${color == "blue" && css`
                            background: linear-gradient(180deg, #E0F4FF 0%, rgba(255, 255, 255, 0) 100%);
                            border: 1px solid #94E5FF;
                            box-sizing: border-box;
                            filter: drop-shadow(0px 4px 74px rgba(199, 231, 225, 0.27));
                            border-radius: 25px;
                        `};
                        ${color == "white" && css`
                            background: linear-gradient(180deg, #F9FFFE 0%, rgba(255, 255, 255, 0) 100%);
                            border: 1px solid #98F2E1;
                            box-sizing: border-box;
                            filter: drop-shadow(0px 4px 74px rgba(199, 231, 225, 0.27));
                            border-radius: 25px;
                        `};

                        :hover{
                            transform: translateY(-9px);
                            box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
                        }
                     `
const ImgCon = styled.div`
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 1rem;
                        
                    `

const TextCon = styled.div`
                        display:flex;
                        align-items: center;
                    `
                    



return(
        <CardCon>
         <ImgCon>
         <img src={img}></img>
         </ImgCon>
         <TextCon>
             <h4>{text}</h4>
         </TextCon>
        </CardCon>
    );                     
}

export default Cards;