import 'reflect-metadata';
// Importa o módulo 'reflect-metadata' necessário para o TypeORM

import express from 'express';
// Importa o framework Express

import { createConnection } from 'typeorm';
// Importa a função createConnection do TypeORM para criar uma conexão com o banco de dados

import { User } from './entities/User';
// Importa a entidade User

import { Task } from './entities/Task';
// Importa a entidade Task

import authRoutes from './routes/authRoutes';
// Importa as rotas de autenticação

import taskRoutes from './routes/taskRoutes';
// Importa as rotas de tarefas

const app = express();
// Cria uma instância do Express

app.use(express.json());
// Configura o Express para usar JSON

app.use('/api/auth', authRoutes);
// Configura as rotas de autenticação no caminho '/api/auth'

app.use('/api', taskRoutes);
// Configura as rotas de tarefas no caminho '/api'

createConnection({
  type: 'mysql', // Tipo de banco de dados
  host: 'localhost', // Host do banco de dados
  port: 3306, // Porta do banco de dados
  username: 'generic_user', // Nome de usuário do banco de dados para o projeto
  password: 'generic_password', // Senha do banco de dados para o projeto
  database: 'your_database', // Nome do banco de dados para o projeto
  entities: [User, Task], // Entidades a serem usadas pelo TypeORM
  synchronize: true, // Sincroniza as entidades com o banco de dados
}).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
    // Inicia o servidor na porta 3000 e exibe uma mensagem no console
  });
}).catch((error: any) => console.log(error));
// Trata erros na conexão com o banco de dados e exibe no console

//Finalidade da Seção:
//Esta seção foi criada para configurar e iniciar o servidor backend usando Express e TypeORM.
//  Ela define as rotas de autenticação e tarefas, e estabelece uma conexão com o banco de dados MySQL,
//  sincronizando as entidades e iniciando o servidor na porta 3000.