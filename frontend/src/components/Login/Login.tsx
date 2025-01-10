/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React, { useState, ChangeEvent, FormEvent } from 'react';
// Importa React e os hooks useState, ChangeEvent e FormEvent

import { containerStyle, formStyle, inputStyle, buttonStyle, titleStyle, linkStyle } from './style';
// Importa os estilos CSS-in-JS para os componentes

// Define a interface LoginProps que descreve as propriedades esperadas pelo componente Login
interface LoginProps {
  onLogin: (email: string, password: string) => void; // Função para lidar com o login
  onNavigateToRegister: () => void; // Função para navegar para a página de registro
}

// Define o componente funcional Login
const Login: React.FC<LoginProps> = ({ onLogin, onNavigateToRegister }) => {
  // Define o estado email para armazenar o email do usuário
  const [email, setEmail] = useState<string>('');
  // Define o estado password para armazenar a senha do usuário
  const [password, setPassword] = useState<string>('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    onLogin(email, password); // Chama a função onLogin passada como prop
  };

  // Renderiza o componente
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
// Exporta o componente Login como padrão
//Finalidade da Seção: Esta seção foi criada para estilizar e organizar a página de login da aplicação.
//  Ela permite que os usuários insiram suas credenciais (email e senha)
//  e façam login na aplicação, além de fornecer um link para navegar para a página de registro
//  caso o usuário ainda não tenha uma conta.*/ 