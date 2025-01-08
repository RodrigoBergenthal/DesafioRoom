import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('https://cdn.wallpapersafari.com/0/25/XZpFvk.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.9); /* Fundo branco com transparência */
  box-shadow: 22px 5px 10px 1px #000000;
  max-width: 400px;
  width: 100%;
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

export const buttonStyle = css`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

export const titleStyle = css`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
`;