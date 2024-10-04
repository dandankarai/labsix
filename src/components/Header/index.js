import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles"; // Você pode criar estilos para o header aqui

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <C.HeaderContainer>
      <C.NavButton onClick={() => navigate("/sobre")}>
        Sobre
      </C.NavButton>
      <C.NavButton onClick={onLogout}>
        Sair
      </C.NavButton>
    </C.HeaderContainer>
  );
};

export default Header;
