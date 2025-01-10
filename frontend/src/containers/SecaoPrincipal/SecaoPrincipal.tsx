/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React from 'react';
// Importa React

import TaskForm from '../../pages/Taskform';
// Importa o componente TaskForm

import TaskList from '../../pages/TaskList';
// Importa o componente TaskList

import { containerStyle } from './style';
// Importa o estilo CSS-in-JS para o container

// Define a interface SecaoPrincipalProps que descreve as propriedades esperadas pelo componente SecaoPrincipal
interface SecaoPrincipalProps {
  tasks: any[]; // Lista de tarefas
  filteredTasks: any[]; // Lista de tarefas filtradas
  onSaveTask: (title: string, description: string, user: string) => void; // Função para salvar uma nova tarefa
  onEditTask: (index: number, newTitle: string, newDescription: string) => void; // Função para editar uma tarefa
  onDeleteTask: (index: number) => void; // Função para deletar uma tarefa
  onToggleTask: (index: number) => void; // Função para alternar o status de conclusão de uma tarefa
}

// Define o componente funcional SecaoPrincipal
const SecaoPrincipal: React.FC<SecaoPrincipalProps> = ({
  tasks,
  filteredTasks,
  onSaveTask,
  onEditTask,
  onDeleteTask,
  onToggleTask,
}) => {
  // Função para retornar as tarefas filtradas
  const filtroTarefas = () => {
    return filteredTasks;
  };

  // Renderiza o componente
  return (
    <div css={containerStyle}>
      <TaskForm onSubmit={onSaveTask} token="your_token_here" />
      {/* Renderiza o componente TaskForm e passa a função onSaveTask como prop */}
      <TaskList tasks={filtroTarefas()} onEdit={onEditTask} onDelete={onDeleteTask} onToggle={onToggleTask} />
      {/* Renderiza o componente TaskList e passa as funções onEditTask, onDeleteTask e onToggleTask como props */}
    </div>
  );
};

export default SecaoPrincipal;
// Exporta o componente SecaoPrincipal como padrão

//Finalidade da Seção Esta seção foi criada para estilizar e organizar a barra lateral
//  e a seção principal da aplicação. Ela combina os componentes TaskForm e TaskList
//  em um único container estilizado, facilitando a gestão e visualização das tarefas.