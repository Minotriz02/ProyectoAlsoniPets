import React from "react";
import styled, { css } from 'styled-components';
import Cards from "../cards/Cards";
import alimento from '../product/img/bone.png';
import collares from '../product/img/collar.png';
import gimmnasio from '../product/img/pesa.png';
import snacks from '../product/img/snacks.png';
import arenas from '../product/img/arenas.png';
import Boton from "../botones/Boton";

const Product = function({text}){

    const ProductsCon = styled.div`
                                display:flex;
                                flex-direction:column;
                                padding: 0rem 10rem;
                                align-items:center;
                            `
    const ProductCon = styled.div`                           
                            display:flex;
                            justify-content:space-around;
                            width:100%;
                            margin-bottom:1rem;
                        `
    const Text = styled.h2`
                            float:left;
                            height:124px;
                            width:400px;
                            box-shadow:-70px 70px 0 -60px #3A8DA8;
                            align-self: flex-start;
    
                `






    return(
         <ProductsCon>
         <Text>Productos</Text>
         <ProductCon>
             <Cards text="Alimento" img={alimento} color="white"></Cards>
             <Cards text="Collares" img={collares} color="blue"></Cards>
             <Cards text="Gimnasio para gatos" img={gimmnasio} color="white"></Cards>
             <Cards text="Snacks" img={snacks} color="blue"></Cards>
             <Cards text="Arenas" img={arenas} color="white"></Cards>
         </ProductCon>
         <Boton color="blue" text="Ver más filtros"position="left"></Boton>
         </ProductsCon>
    );
}

export default Product;