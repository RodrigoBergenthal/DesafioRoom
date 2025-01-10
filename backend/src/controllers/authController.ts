import { Request, Response, NextFunction } from 'express';
// Importa os tipos Request, Response e NextFunction do Express

import { AppDataSource } from '../ormconfig';
// Importa a conexão com o banco de dados

import { User } from '../entities/User';
// Importa a entidade User

import bcrypt from 'bcryptjs';
// Importa a biblioteca bcryptjs para hashing de senhas

import jwt from 'jsonwebtoken';
// Importa a biblioteca jsonwebtoken para manipulação de tokens JWT

// Função para registrar um novo usuário
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { fullName, email, password } = req.body;
    const connection = await AppDataSource;
    const userRepository = connection.getRepository(User);

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'Email already in use' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({ fullName, email, password: hashedPassword });
    await userRepository.save(user);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

// Função para autenticar um usuário
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const connection = await AppDataSource;
    const userRepository = connection.getRepository(User);

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

// Finalidade da Seção: Esta seção foi criada para definir os controladores de autenticação, incluindo as funções para registrar e autenticar usuários. 
// A função register cria um novo usuário com uma senha hash e a função login autentica um usuário e retorna um token JWT.