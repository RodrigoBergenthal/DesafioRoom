import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../ormconfig';
import { Task } from '../entities/Task';
import { User } from '../entities/User';

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