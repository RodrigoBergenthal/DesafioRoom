/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React, { useState } from 'react';
// Importa React e o hook useState

import { cardStyle, titleStyle, descriptionStyle, userStyle, statusStyle, buttonConcluirStyle, buttonDesfazerStyle, buttonEditarStyle, buttonExcluirStyle, inputStyle, buttonStyle } from './style';
// Importa os estilos CSS-in-JS para os componentes

// Define a interface Task que descreve a estrutura de uma tarefa
interface Task {
  id: number; // Identificador único da tarefa
  title: string; // Título da tarefa
  description?: string; // Descrição da tarefa (opcional)
  user?: string; // Usuário associado à tarefa (opcional)
  completed: boolean; // Status de conclusão da tarefa
}

// Define a interface TaskListProps que descreve as propriedades esperadas pelo componente TaskList
interface TaskListProps {
  tasks: Task[]; // Lista de tarefas
  onEdit: (index: number, newTitle: string, newDescription: string) => void; // Função para editar uma tarefa
  onDelete: (index: number) => void; // Função para deletar uma tarefa
  onToggle: (index: number) => void; // Função para alternar o status de conclusão de uma tarefa
}

// Define o componente funcional TaskList
const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onToggle }) => {
  // Define o estado editIndex para armazenar o índice da tarefa que está sendo editada
  const [editIndex, setEditIndex] = useState<number | null>(null);
  // Define o estado newTitle para armazenar o novo título da tarefa
  const [newTitle, setNewTitle] = useState<string>('');
  // Define o estado newDescription para armazenar a nova descrição da tarefa
  const [newDescription, setNewDescription] = useState<string>('');

  // Função para iniciar a edição de uma tarefa
  const handleEditClick = (index: number, title: string, description: string) => {
    setEditIndex(index); // Define o índice da tarefa que está sendo editada
    setNewTitle(title); // Define o novo título da tarefa
    setNewDescription(description); // Define a nova descrição da tarefa
  };

  // Função para salvar as alterações de uma tarefa
  const handleSaveClick = (index: number) => {
    onEdit(index, newTitle, newDescription); // Chama a função onEdit para salvar as alterações
    setEditIndex(null); // Reseta o índice da tarefa que está sendo editada
    setNewTitle(''); // Reseta o novo título da tarefa
    setNewDescription(''); // Reseta a nova descrição da tarefa
  };

  // Função para deletar uma tarefa
  const handleDeleteClick = (index: number) => {
    onDelete(index); // Chama a função onDelete para deletar a tarefa
  };

  // Renderiza o componente
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
// Exporta o componente TaskList como padrão