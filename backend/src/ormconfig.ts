import { createConnection } from 'typeorm';
// Importa a função createConnection do TypeORM para criar uma conexão com o banco de dados

import { User } from './entities/User';
// Importa a entidade User

import { Task } from './entities/Task';
// Importa a entidade Task

export const AppDataSource = createConnection({
  type: 'mysql', // Tipo de banco de dados, escolhi o mysql
  host: 'localhost', // Host do banco de dados
  port: 3306, // Porta do banco de dados
  username: 'generic_user', // Nome de usuário do banco de dados
  password: 'generic_password', // Senha do banco de dados
  database: 'your_database', // Nome do banco de dados
  entities: [User, Task], // Entidades a serem usadas pelo TypeORM
  synchronize: true, // Sincroniza as entidades com o banco de dados
});
// Exporta a conexão com o banco de dados como AppDataSource

//Finalidade da Seção: Esta seção foi criada para configurar e exportar a conexão com o banco de dados MySQL
//  usando TypeORM. Ela define as configurações necessárias para conectar ao banco de dados 
// e sincronizar as entidades User e Task