import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Chat App</C.Title>
      <C.Info>
        Ahora podes enviar y recibir mensajes sin tener tu celular conectado a
        internet.
      </C.Info>
    </C.Container>
  );
};

export default Default;
