import React from 'react';
// Importa a biblioteca React

import ReactDOM from 'react-dom/client';
// Importa a biblioteca ReactDOM para manipular o DOM

import App from './App';
// Importa o componente principal da aplicação

// Cria a raiz do React e renderiza o componente App dentro do elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);