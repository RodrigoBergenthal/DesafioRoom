/** @jsxImportSource @emotion/react */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { containerStyle, formStyle, inputStyle, buttonStyle, titleStyle } from './style';

interface CadastroProps {
  onRegister: (fullName: string, email: string, password: string) => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onRegister }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(fullName, email, password);
  };

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