import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonLogout } from "./styles";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Header from "../../components/Header"; // Importando o novo Header

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
      );
      setExchangeRates(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <C.Container>
      <Header onLogout={() => [signout(), navigate("/")]} />

      <C.Title>Bem vindo as principais cotações</C.Title>

      {loading ? (
        <C.Loading>Carregando taxas de câmbio...</C.Loading>
      ) : (
        <C.RatesContainer>
          <C.Rate>
            <C.Currency>USD-BRL:</C.Currency>
            <C.Value>
              1 Dólar equivale a {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(exchangeRates?.USDBRL?.bid)} Reais
            </C.Value>
          </C.Rate>
          <C.Rate>
            <C.Currency>EUR-BRL:</C.Currency>
            <C.Value>
              1 Euro equivale a {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(exchangeRates?.EURBRL?.bid)} Reais
            </C.Value>
          </C.Rate>
          <C.Rate>
            <C.Currency>BTC-BRL:</C.Currency>
            <C.Value>
              1 Bitcoin equivale a {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(exchangeRates?.BTCBRL?.bid)} Reais
            </C.Value>
          </C.Rate>
        </C.RatesContainer>
      )}
      <ButtonLogout Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </ButtonLogout>
    </C.Container>
  );
};

export default Home;
