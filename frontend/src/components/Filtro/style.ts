import { css } from '@emotion/react';

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  border: 15px solid;
border: 15px solid;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 40px auto;
`;

export const inputStyle = css`
    border-radius: 7px;
    margin-top: 5px;
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
   outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const selectStyle = css`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const buttonStyle = css`
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const suggestionsContainerOpenStyle = css`
  position: absolute;
  z-index: 1;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin-top: 5px;
`;

export const suggestionStyle = css`
  padding: 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;