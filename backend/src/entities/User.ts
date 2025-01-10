import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// Importa os decoradores e tipos do TypeORM

import { Task } from './Task';
// Importa a entidade Task

@Entity()
// Declara que a classe User é uma entidade do TypeORM
export class User {
  @PrimaryGeneratedColumn()
  // Declara que a coluna id é uma chave primária gerada automaticamente
  id!: number;

  @Column()
  // Declara que a coluna fullName é uma coluna do banco de dados
  fullName!: string;

  @Column()
  // Declara que a coluna email é uma coluna do banco de dados
  email!: string;

  @Column()
  // Declara que a coluna password é uma coluna do banco de dados
  password!: string;

  @OneToMany(() => Task, task => task.user)
  // Declara um relacionamento um-para-muitos com a entidade Task
  tasks!: Task[];
}

// Finalidade da Seção: Esta seção foi criada para definir a entidade User, que representa um usuário no banco de dados. 
// A entidade inclui colunas para id, fullName, email e password, e um relacionamento um-para-muitos com a entidade Task.