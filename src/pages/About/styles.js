import styled from "styled-components";

// Container geral da página
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9; /* Cor de fundo suave */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
`;

// Estilo do botão de navegação
export const NavButton = styled.button`
  background-color: #007bff; /* Azul forte */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Azul mais escuro ao passar o mouse */
  }
`;

// Título da página
export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

// Descrição inicial
export const Description = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

// Estilo dos parágrafos
export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
  padding: 0 10px;
  background-color: #fff; /* Fundo branco */
  border-left: 4px solid #007bff; /* Borda lateral colorida */
  padding-left: 15px; /* Espaçamento interno */
  border-radius: 4px;
`;
