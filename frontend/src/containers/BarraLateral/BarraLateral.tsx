/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React from 'react';
// Importa React

import Filtro from '../../components/Filtro/Filtro';
// Importa o componente Filtro

import { containerStyle, sectionStyle, titleStyle } from './style';
// Importa os estilos CSS-in-JS para o container, seção e título

// Define a interface BarraLateralProps que descreve as propriedades esperadas pelo componente BarraLateral
interface BarraLateralProps {
  onFilter: (title: string, status: string, user: string) => void; // Função para filtrar as tarefas
  taskTitles: string[]; // Lista de títulos das tarefas
}

// Define o componente funcional BarraLateral
const BarraLateral: React.FC<BarraLateralProps> = ({ onFilter, taskTitles }) => {
  // Renderiza o componente
  return (
    <div css={containerStyle}>
      <div css={sectionStyle}>
        <h2 css={titleStyle}>Buscar Tarefas</h2>
        {/* Renderiza o componente Filtro e passa as props necessárias */}
        <Filtro onFilter={onFilter} taskTitles={taskTitles} />
      </div>
    </div>
  );
};

export default BarraLateral;
// Exporta o componente BarraLateral como padrão

//Finalidade da Seção: Esta seção foi criada para estilizar e organizar a barra lateral da aplicação.
// Ela combina os componentes de filtro em um único container estilizado, 
// facilitando a busca e filtragem das tarefas.