/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { formStyle, inputStyle, buttonCriarTarefaStyle } from './style';

interface TaskFormProps {
  onSubmit: (title: string, description: string, user: string) => void;
  token: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description, user);
    setTitle('');
    setDescription('');
    setUser('');
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        css={inputStyle}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        css={inputStyle}
        required
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Nome do Usuário"
        css={inputStyle}
        required
      />
      <button type="submit" css={buttonCriarTarefaStyle}>Salvar</button>
    </form>
  );
};

export default TaskForm;