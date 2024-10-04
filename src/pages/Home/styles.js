import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const Loading = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

export const RatesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Rate = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  /* width: 3; */
  gap: 20px;
`;

export const Currency = styled.span`
  font-weight: bold;
  color: #333;
`;

export const Value = styled.span`
  color: #007aff;
`;

export const ButtonLogout = styled.button`
  padding: 12px 8px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`;
