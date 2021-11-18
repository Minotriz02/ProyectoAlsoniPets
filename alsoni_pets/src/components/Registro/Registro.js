import React from "react";
import styled, { css } from 'styled-components';
import Campo from '../Campo/Campo'
import Modal from "../Modal/Modal";
import Boton from "../botones/Boton";



const Registro = function ({ isOpen, closeModal }) {

    return (<Modal isOpen={isOpen} closeModal={closeModal}>
        <h1>Registro</h1>
        <Campo tamaño="campo-s" texto="Usuario" tipo="texto"></Campo>
        <Campo tamaño="campo-s" texto="Contraseña" tipo="texto"></Campo>
        <Campo tamaño="campo-s" texto="Correo" tipo="texto"></Campo>
        <Campo tamaño="campo-s" texto="Fecha de nacimiento" tipo="texto"></Campo>
        <Boton text="Registrarse" color="blue" ></Boton>
    </Modal>)
}

export default Registro;