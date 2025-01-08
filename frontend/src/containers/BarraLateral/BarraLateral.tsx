/** @jsxImportSource @emotion/react */
import React from 'react';
import Filtro from '../../components/Filtro/Filtro';
import { containerStyle, sectionStyle, titleStyle } from './style';

interface BarraLateralProps {
  onFilter: (title: string, status: string, user: string) => void;
  taskTitles: string[];
}

const BarraLateral: React.FC<BarraLateralProps> = ({ onFilter, taskTitles }) => {
  return (
    <div css={containerStyle}>
      <div css={sectionStyle}>
        <h2 css={titleStyle}>Buscar Tarefas</h2>
        <Filtro onFilter={onFilter} taskTitles={taskTitles} />
      </div>
    </div>
  );
};

export default BarraLateral;