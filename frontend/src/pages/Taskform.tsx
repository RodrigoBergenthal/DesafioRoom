/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React, { useState } from 'react';
// Importa React e o hook useState

import { formStyle, inputStyle, buttonCriarTarefaStyle } from './style';
// Importa os estilos CSS-in-JS para os componentes

// Define a interface TaskFormProps que descreve as propriedades esperadas pelo componente TaskForm
interface TaskFormProps {
  onSubmit: (title: string, description: string, user: string) => void; // Função para submeter o formulário
  token: string; // Token de autenticação (não utilizado no componente, mas pode ser necessário para requisições futuras)
}

// Define o componente funcional TaskForm
const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, token }) => {
  // Define o estado title para armazenar o título da tarefa
  const [title, setTitle] = useState<string>('');
  // Define o estado description para armazenar a descrição da tarefa
  const [description, setDescription] = useState<string>('');
  // Define o estado user para armazenar o nome do usuário associado à tarefa
  const [user, setUser] = useState<string>('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    onSubmit(title, description, user); // Chama a função onSubmit passada como prop
    setTitle(''); // Reseta o título da tarefa
    setDescription(''); // Reseta a descrição da tarefa
    setUser(''); // Reseta o nome do usuário
  };

  // Renderiza o componente
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
// Exporta o componente TaskForm como padrão