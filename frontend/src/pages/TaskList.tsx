/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { cardStyle, titleStyle, descriptionStyle, userStyle, statusStyle, buttonConcluirStyle, buttonDesfazerStyle, buttonEditarStyle, buttonExcluirStyle, inputStyle, buttonStyle } from './style';

interface Task {
  id: number;
  title: string;
  description?: string;
  user?: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (index: number, newTitle: string, newDescription: string) => void;
  onDelete: (index: number) => void;
  onToggle: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onToggle }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');

  const handleEditClick = (index: number, title: string, description: string) => {
    setEditIndex(index);
    setNewTitle(title);
    setNewDescription(description);
  };

  const handleSaveClick = (index: number) => {
    onEdit(index, newTitle, newDescription);
    setEditIndex(null);
    setNewTitle('');
    setNewDescription('');
  };

  const handleDeleteClick = (index: number) => {
    onDelete(index);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} css={cardStyle}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Título"
                css={inputStyle}
              />
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Descrição"
                css={inputStyle}
              />
              <button css={buttonStyle} onClick={() => handleSaveClick(index)}>
                Salvar
              </button>
              <button css={buttonStyle} onClick={() => setEditIndex(null)}>
                Cancelar
              </button>
            </>
          ) : (
            <>
              <h3 css={titleStyle}>{task.title}</h3>
              <p css={descriptionStyle}>{task.description}</p>
              <p css={userStyle}>Usuário: {task.user}</p>
              <p css={statusStyle}>Status: {task.completed ? 'Concluída' : 'Pendente'}</p>
              <button css={task.completed ? buttonDesfazerStyle : buttonConcluirStyle} onClick={() => onToggle(index)}>
                {task.completed ? 'Desfazer' : 'Concluir'}
              </button>
              <button css={buttonEditarStyle} onClick={() => handleEditClick(index, task.title, task.description || '')}>
                Editar
              </button>
              <button css={buttonExcluirStyle} onClick={() => handleDeleteClick(index)}>
                Excluir
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;