/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import BarraLateral from '../containers/BarraLateral/BarraLateral';
import SecaoPrincipal from '../containers/SecaoPrincipal/SecaoPrincipal';
import api from '../services/api';
import { pageStyle } from './style';

interface Task {
  id: number;
  title: string;
  description?: string;
  user?: string;
  completed: boolean;
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get('/tasks');
      setTasks(response.data as Task[]);
      setFilteredTasks(response.data as Task[]);
    };
    fetchTasks();
  }, []);

  const handleSaveTask = async (title: string, description: string, user: string) => {
    try {
      const response = await api.post('/tasks', { title, description, user });
      const newTask = response.data as Task;
      setTasks([...tasks, newTask]);
      setFilteredTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  const handleEditTask = async (index: number, newTitle: string, newDescription: string) => {
    const task = tasks[index];
    const response = await api.put(`/tasks/${task.id}`, { title: newTitle, description: newDescription });
    const updatedTasks = tasks.map((task, i) =>
      i === index ? response.data as Task : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleDeleteTask = async (index: number) => {
    const task = tasks[index];
    await api.delete(`/tasks/${task.id}`);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleToggleTask = async (index: number) => {
    const task = tasks[index];
    const response = await api.put(`/tasks/${task.id}`, { completed: !task.completed });
    const updatedTasks = tasks.map((task, i) =>
      i === index ? response.data as Task : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilter = (title: string, status: string, user: string) => {
    setFilteredTasks(tasks.filter(task => 
      task.title.includes(title) &&
      (status === '' || (status === 'completed' && task.completed) || (status === 'pending' && !task.completed)) &&
      (user === '' || task.user?.includes(user))
    ));
  };

  return (
    <div css={pageStyle}>
      <BarraLateral onFilter={handleFilter} taskTitles={tasks.map(task => task.title)} />
      <SecaoPrincipal
        tasks={tasks}
        filteredTasks={filteredTasks}
        onSaveTask={handleSaveTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
};

export default TasksPage;