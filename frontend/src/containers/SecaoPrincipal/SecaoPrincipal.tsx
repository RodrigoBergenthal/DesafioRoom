/** @jsxImportSource @emotion/react */
import React from 'react';
import TaskForm from '../../pages/Taskform';
import TaskList from '../../pages/TaskList';
import { containerStyle } from './style';

interface SecaoPrincipalProps {
  tasks: any[];
  filteredTasks: any[];
  onSaveTask: (title: string, description: string, user: string) => void;
  onEditTask: (index: number, newTitle: string, newDescription: string) => void;
  onDeleteTask: (index: number) => void;
  onToggleTask: (index: number) => void;
}

const SecaoPrincipal: React.FC<SecaoPrincipalProps> = ({
  tasks,
  filteredTasks,
  onSaveTask,
  onEditTask,
  onDeleteTask,
  onToggleTask,
}) => {
  const filtroTarefas = () => {
    return filteredTasks;
  };

  return (
    <div css={containerStyle}>
      <TaskForm onSubmit={onSaveTask} token="your_token_here" />
      <TaskList tasks={filtroTarefas()} onEdit={onEditTask} onDelete={onDeleteTask} onToggle={onToggleTask} />
    </div>
  );
};

export default SecaoPrincipal;