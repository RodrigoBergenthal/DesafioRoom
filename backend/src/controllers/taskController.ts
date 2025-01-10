import { Request, Response, NextFunction } from 'express';
// Importa os tipos Request, Response e NextFunction do Express

import { AppDataSource } from '../ormconfig';
// Importa a conexão com o banco de dados

import { Task } from '../entities/Task';
// Importa a entidade Task

import { User } from '../entities/User';
// Importa a entidade User

// Função para criar uma nova tarefa
export const createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, completed } = req.body;
    const userId = req.userId;
    const connection = await AppDataSource;
    const taskRepository = connection.getRepository(Task);
    const userRepository = connection.getRepository(User);

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const task = taskRepository.create({ title, description, completed, user });
    await taskRepository.save(task);

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Função para obter as tarefas de um usuário
export const getTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    const connection = await AppDataSource;
    const taskRepository = connection.getRepository(Task);

    const tasks = await taskRepository.find({ where: { user: { id: userId } }, relations: ['user'] });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Função para atualizar uma tarefa existente
export const updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { title, description, completed } = req.body;
    const connection = await AppDataSource;
    const taskRepository = connection.getRepository(Task);

    const task = await taskRepository.findOne({ where: { id }, relations: ['user'] });
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    task.title = title;
    task.description = description;
    task.completed = completed;
    await taskRepository.save(task);

    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Função para deletar uma tarefa
export const deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const connection = await AppDataSource;
    const taskRepository = connection.getRepository(Task);

    const task = await taskRepository.findOne({ where: { id: Number(id) }, relations: ['user'] });
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    await taskRepository.remove(task);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// Finalidade da Seção: Esta seção foi criada para definir os controladores de tarefas, incluindo as funções para criar, obter, atualizar e deletar tarefas. 
// A função createTask cria uma nova tarefa associada a um usuário, a função getTasks obtém as tarefas de um usuário, 
// a função updateTask atualiza uma tarefa existente e a função deleteTask deleta uma tarefa.