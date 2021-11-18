import React from "react";
import styled, { css } from 'styled-components';
import Boton from "../botones/Boton";



const Food = function ({ text, text2, img, img2 }) {

    const FoodCon = styled.div`
                        display:flex;
                        align-items: center;
                        flex-direction:column;
                        justify-content: center;
                        width: 333.53px;
                        height: 185.49px;
                    `
    const FoodImg = styled.div`
                        
                        display:flex;
                        align-items: center;
                        
                        z-index: -1;
                        `
    const FoodBg = styled.div`
                        position: absolute;
                        z-index: -2;
                        `




    return (

        <FoodCon>

            <FoodBg>
                <img src={img2}></img>
            </FoodBg>
            <FoodImg>
                <img src={img}></img>
            </FoodImg>
            <h3>{text}</h3>
            <p>{text2}</p>
            <Boton color="white" text="Comprar" ></Boton>
        </FoodCon>

    );
}

export default Food;