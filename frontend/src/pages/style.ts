import { css, keyframes } from '@emotion/react';

const myAnim = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.6);
  }
`;

export const cardStyle = css`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 24px;
  margin: 12px 0;
  background-color: #f9f9f9;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  &.deleting {
    animation: ${myAnim} 2s ease 0s 1 normal forwards;
  }
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
`;

export const descriptionStyle = css`
  font-size: 18px;
  color: #666;
  margin-bottom: 12px;
`;

export const userStyle = css`
  font-size: 18px;
  color: #666;
  margin-bottom: 12px;
`;

export const statusStyle = css`
  font-size: 18px;
  color: #666;
  margin-bottom: 12px;
`;

export const buttonStyle = css`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-right: 12px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const buttonConcluirStyle = css`
  ${buttonStyle};
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

export const buttonDesfazerStyle = css`
  ${buttonStyle};
  background-color: #ffc107;
  color: black;

  &:hover {
    background-color: #e0a800;
  }
`;

export const buttonEditarStyle = css`
  ${buttonStyle};
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

export const buttonExcluirStyle = css`
  ${buttonStyle};
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export const inputStyle = css`
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 48px auto;
`;

export const buttonCriarTarefaStyle = css`
  ${buttonStyle};
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

export const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-image: url('https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/01/fundo-3d-preta4.png?fit=696%2C392&ssl=1');
  background-size: cover;
  background-position: center;
  margin-left: 320px; /* Espaço para a barra lateral */
  width: calc(100% - 320px); /* Ajustar a largura para levar em consideração a barra lateral */
`;