import React from "react";
import styled, { css } from 'styled-components';
import Food from "../food/Food";
import blue from "../foodpart/img/blue.png";
import pink from "../foodpart/img/pink.png";
import yellow from "../foodpart/img/yellow.png";
import food1 from "../foodpart/img/biscrok.png";
import food2 from "../foodpart/img/canine.png";
import food3 from "../foodpart/img/drools.png";


const FoodPart = function({text}){

    const FoodsCon = styled.div`
                                display:flex;
                                flex-direction:row;
                                padding: 0rem 10rem;
                                justify-content: space-between;
                                align-items:center;
                                height: 800px;
                            `

   return(
          <FoodsCon>
          <Food text="Drools | 3KG" text2="Para adultos con sabor a pollo" img={food3} img2={pink}></Food>
          <Food text="Canine Creek 4 KG" text2="Para perro adulto con sabor a pollo y huevo" img={food2} img2={yellow}></Food>
          <Food text="Biscork Biscuits" text2="Para cachorros con sabor a pollo seco, 500g" img={food1} img2={blue}></Food>
          </FoodsCon>
   );                     
}

export default FoodPart;