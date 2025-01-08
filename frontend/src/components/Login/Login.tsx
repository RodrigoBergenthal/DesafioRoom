/** @jsxImportSource @emotion/react */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { containerStyle, formStyle, inputStyle, buttonStyle, titleStyle, linkStyle } from './style';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onNavigateToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigateToRegister }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div css={containerStyle}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <h2 css={titleStyle}>Login</h2>
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
        <button type="submit" css={buttonStyle}>Entrar</button>
        <p css={linkStyle}>
          Se ainda não tem o seu cadastro, <a onClick={onNavigateToRegister}>clique aqui</a>.
        </p>
      </form>
    </div>
  );
};

export default Login;