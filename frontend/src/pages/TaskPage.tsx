/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React, { useState, useEffect } from 'react';
// Importa React e hooks useState e useEffect

import BarraLateral from '../containers/BarraLateral/BarraLateral';
// Importa o componente BarraLateral

import SecaoPrincipal from '../containers/SecaoPrincipal/SecaoPrincipal';
// Importa o componente SecaoPrincipal

import api from '../services/api';
// Importa o serviço de API para fazer requisições HTTP

import { pageStyle } from './style';
// Importa o estilo da página

// Define a interface Task que descreve a estrutura de uma tarefa
interface Task {
  id: number; // Identificador único da tarefa
  title: string; // Título da tarefa
  description?: string; // Descrição da tarefa (opcional)
  user?: string; // Usuário associado à tarefa (opcional)
  completed: boolean; // Status de conclusão da tarefa
}

// Define o componente funcional TasksPage
const TasksPage: React.FC = () => {
  // Define o estado tasks para armazenar a lista de tarefas
  const [tasks, setTasks] = useState<Task[]>([]);
  // Define o estado filteredTasks para armazenar a lista de tarefas filtradas
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  // useEffect é um hook que executa uma função quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar as tarefas da API
    const fetchTasks = async () => {
      const response = await api.get('/tasks'); // Faz uma requisição GET para obter as tarefas
      setTasks(response.data as Task[]); // Atualiza o estado tasks com os dados recebidos
      setFilteredTasks(response.data as Task[]); // Atualiza o estado filteredTasks com os dados recebidos
    };
    fetchTasks(); // Chama a função fetchTasks
  }, []); // O array vazio [] indica que o efeito deve ser executado apenas uma vez, quando o componente é montado

  // Função para salvar uma nova tarefa
  const handleSaveTask = async (title: string, description: string, user: string) => {
    try {
      const response = await api.post('/tasks', { title, description, user }); // Faz uma requisição POST para criar uma nova tarefa
      const newTask = response.data as Task; // Obtém a nova tarefa criada
      setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao estado tasks
      setFilteredTasks([...tasks, newTask]); // Adiciona a nova tarefa ao estado filteredTasks
    } catch (error) {
      console.error('Erro ao criar tarefa:', error); // Exibe um erro no console se a requisição falhar
    }
  };

  // Função para editar uma tarefa existente
  const handleEditTask = async (index: number, newTitle: string, newDescription: string) => {
    const task = tasks[index]; // Obtém a tarefa a ser editada pelo índice
    const response = await api.put(`/tasks/${task.id}`, { title: newTitle, description: newDescription }); // Faz uma requisição PUT para atualizar a tarefa
    const updatedTasks = tasks.map((task, i) =>
      i === index ? response.data as Task : task // Atualiza a tarefa no estado tasks
    );
    setTasks(updatedTasks); // Atualiza o estado tasks com a lista de tarefas atualizada
    setFilteredTasks(updatedTasks); // Atualiza o estado filteredTasks com a lista de tarefas atualizada
  };

  // Função para deletar uma tarefa
  const handleDeleteTask = async (index: number) => {
    const task = tasks[index]; // Obtém a tarefa a ser deletada pelo índice
    await api.delete(`/tasks/${task.id}`); // Faz uma requisição DELETE para remover a tarefa
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove a tarefa do estado tasks
    setTasks(updatedTasks); // Atualiza o estado tasks com a lista de tarefas atualizada
    setFilteredTasks(updatedTasks); // Atualiza o estado filteredTasks com a lista de tarefas atualizada
  };

  // Função para alternar o status de conclusão de uma tarefa
  const handleToggleTask = async (index: number) => {
    const task = tasks[index]; // Obtém a tarefa a ser alternada pelo índice
    const response = await api.put(`/tasks/${task.id}`, { completed: !task.completed }); // Faz uma requisição PUT para atualizar o status de conclusão da tarefa
    const updatedTasks = tasks.map((task, i) =>
      i === index ? response.data as Task : task // Atualiza a tarefa no estado tasks
    );
    setTasks(updatedTasks); // Atualiza o estado tasks com a lista de tarefas atualizada
    setFilteredTasks(updatedTasks); // Atualiza o estado filteredTasks com a lista de tarefas atualizada
  };

  // Função para filtrar as tarefas com base no título, status e usuário
  const handleFilter = (title: string, status: string, user: string) => {
    setFilteredTasks(tasks.filter(task => 
      task.title.includes(title) && // Filtra pelo título
      (status === '' || (status === 'completed' && task.completed) || (status === 'pending' && !task.completed)) && // Filtra pelo status
      (user === '' || task.user?.includes(user)) // Filtra pelo usuário
    ));
  };

  // Renderiza o componente
  return (
    <div css={pageStyle}>
      <BarraLateral onFilter={handleFilter} taskTitles={tasks.map(task => task.title)} />
      {/* Renderiza o componente BarraLateral e passa as props necessárias */}
      <SecaoPrincipal
        tasks={tasks}
        filteredTasks={filteredTasks}
        onSaveTask={handleSaveTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      {/* Renderiza o componente SecaoPrincipal e passa as props necessárias */}
    </div>
  );
};

export default TasksPage;
// Exporta o componente TasksPage como padrão