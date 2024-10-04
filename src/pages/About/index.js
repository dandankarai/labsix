import React from "react";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import * as C from "./styles"; // Estilos

const About = () => {
  const navigate = useNavigate(); // Navegação com react-router-dom

  return (
    <C.Container>
      {/* Header comentado */}
      {/* <Header onLogout={() => [signout(), navigate("/Home")]} /> */}

      {/* Botão de Navegação */}
      <C.NavButton onClick={() => navigate(-1)}>
        Voltar
      </C.NavButton>

      <C.Title>Sobre</C.Title>
      <C.Description>Esta é a página sobre o aplicativo.</C.Description>

      {/* Texto explicativo sobre a API de cotação */}
      <C.Paragraph>
        Este aplicativo é uma interface simples para consultar a cotação de
        diversas moedas em tempo real. Ele utiliza uma API externa que coleta
        dados atualizados sobre as taxas de câmbio e apresenta ao usuário de
        maneira fácil e acessível. Você pode verificar a cotação de várias
        moedas e comparar os valores, facilitando o planejamento financeiro
        ou a conversão de moedas.
      </C.Paragraph>

      <C.Paragraph>
        Além disso, o aplicativo permite navegação simples entre as páginas e
        inclui recursos de autenticação para garantir segurança e
        personalização na experiência do usuário.
      </C.Paragraph>
    </C.Container>
  );
};

export default About;
