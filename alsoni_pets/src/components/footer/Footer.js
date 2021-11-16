import React from "react";
import styled, { css } from 'styled-components';
import ig from './img/Instagram.png';
import fb from './img/Facebook.png';




const Footer = function({}){

    const FooterP = styled.div`
                     display:flex;
                     background-color:#F6FAF9;
                     margin-top:20px;
                     flex-direction: column;
                     justify-content:center;
                    `
    const FooterUp = styled.div`
                    
                    display:flex;
                    align-content: center;

                    `
    const FooterDown = styled.div`
                    padding:0.1px;
                    display:flex;
                    align-content: center;
                    border-top: 1px solid #C7C7C7;
                    justify-content: space-around;
                    
                    `   
    const SocialMedia = styled.div`
                        align-items:flex-start;
                        display-flex:colummn;
                        margin-left:500px;
                    ` 
                    
    const SocialmediaR = styled.div`
                            display-flex:row;
                           
     
                    `  
    const TextCop = styled.div`

                            display:flex
                            align-items:flex-start;
                    `      
    const TextFAQ = styled.div`
               
                    display:flex;
                    align-items:flex-end;
                    align-content: space-between;
                    width: 600px;
                    justify-content: space-evenly;
                    margin:5px;

                `
    const IGFB= styled.button`
                    border-radius: 50%;
                    width:58px;
                    height:58px;
                    border:none;
              
                    ${props => props.ig && css`
                    background-image: url(${ig});
                    `};
                    ${props => props.fb && css`
                    background-image: url(${fb});
                    `};
                    background-position: 50% 50%;
                    :hover{
                        cursor: pointer;
                        opacity: 80%;
                    }

                    margin-bottom:25px;
                `  
    const Addres = styled.div`
                    align-items:flex-end;
                    margin-left:300px;

                   `
    const Wp = styled.p`
                  
                    font-family: Rubik;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 17px;
                    
                `     
    const Cel = styled.p`
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 137.9%;
                        /* or 30px */
                        
                        text-align: center;
                        letter-spacing: 0.05em;
                        
                        color: #124C5F;
    
                    ` 
    const AddresH = styled.p`
                         font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 10   px;
                        line-height: 137.9%;
                        /* or 25px */

                        letter-spacing: 0.05em;

                        color: #757777;
    
    `                      

    return(

       <FooterP>
           <FooterUp>
            <SocialMedia>
                <p>Siguenos en nuestras redes</p>
                <SocialmediaR>
                    <IGFB ig></IGFB>
                    <IGFB fb></IGFB>
                </SocialmediaR>
            </SocialMedia>
            <Addres>
                <Wp>Whatsapp</Wp>
                <Cel>+57 317 845 2928</Cel>
                <AddresH>Carrera 27#27-30</AddresH>
                <AddresH>Barrio El Recuerdo</AddresH>
                <AddresH>Cali, Colombia</AddresH>
            </Addres>
           </FooterUp>

           <FooterDown>
                <TextCop> 
                    <p>© Alsoni Pets</p>
                </TextCop>
                <TextFAQ >
                  <p>¿Quienes somos?</p>
                  <p>FAQ</p>
                  <p>Contactanos</p>
                </TextFAQ>
               

           </FooterDown>

       </FooterP>
    );
}

export default Footer;