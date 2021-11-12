import React from "react";
import styled, { css } from 'styled-components';



const Boton = function ({ text, color }) {
    const BotonCon = styled.button`                           
                            padding: 1rem 3rem;
                            border: none;
                            border-radius: 6px;
                            margin: 0rem 1rem;
                            ${color == "blue" && css`
                                color: white;
                                background-color:#124C5F;
                            `};
                            ${color == "green" && css`
                                color: #124C5F;
                                background-color:#C7E7E1;
                            `};
                            ${color == "white" && css`
                                border: solid;
                                color: #124C5F;
                                background-color:white;
                                border-color: #124C5F;
                            `};
                        `

    return (
        <BotonCon>
            {text}
        </BotonCon>);
}

export default Boton;