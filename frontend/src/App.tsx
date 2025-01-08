/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import TasksPage from './pages/TaskPage';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(true); // Inicialmente, exibe a tela de login

  const handleLogin = (email: string, password: string) => {
    // Verificar se o email está no formato correto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsAuthenticated(true);
    } else {
      alert('Formato de email inválido, ex: Fulano@beltrano.com');
    }
  };

  const handleRegister = (fullName: string, email: string, password: string) => {
    // Lógica de registro (pode ser uma chamada de API)
    setIsRegistered(true);
    alert('Cadastro realizado com sucesso');
  };

  const navigateToRegister = () => {
    setIsRegistered(false);
  };

  return (
    <>
      <GlobalStyle />
      {isAuthenticated ? (
        <TasksPage />
      ) : isRegistered ? (
        <Login onLogin={handleLogin} onNavigateToRegister={navigateToRegister} />
      ) : (
        <Cadastro onRegister={handleRegister} />
      )}
    </>
  );
};

export default App;