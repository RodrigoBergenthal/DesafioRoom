/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React, { useState, ChangeEvent, FormEvent } from 'react';
// Importa React e os hooks useState, ChangeEvent e FormEvent

import { containerStyle, formStyle, inputStyle, buttonStyle, titleStyle } from './style';
// Importa os estilos CSS-in-JS para os componentes

// Define a interface CadastroProps que descreve as propriedades esperadas pelo componente Cadastro
interface CadastroProps {
  onRegister: (fullName: string, email: string, password: string) => void; // Função para lidar com o registro
}

// Define o componente funcional Cadastro
const Cadastro: React.FC<CadastroProps> = ({ onRegister }) => {
  // Define o estado fullName para armazenar o nome completo do usuário
  const [fullName, setFullName] = useState<string>('');
  // Define o estado email para armazenar o email do usuário
  const [email, setEmail] = useState<string>('');
  // Define o estado password para armazenar a senha do usuário
  const [password, setPassword] = useState<string>('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    onRegister(fullName, email, password); // Chama a função onRegister passada como prop
  };

  // Renderiza o componente
  return (
    <div css={containerStyle}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <h2 css={titleStyle}>Faça seu Cadastro</h2>
        <input
          type="text"
          value={fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
          placeholder="Nome Completo"
          css={inputStyle}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Email"
          css={inputStyle}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder="Senha"
          css={inputStyle}
          required
        />
        <button type="submit" css={buttonStyle}>Seja Bem Vindo</button>
      </form>
    </div>
  );
};

export default Cadastro;
// Exporta o componente Cadastro como padrão