import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// Importa os decoradores e tipos do TypeORM

import { User } from './User';
// Importa a entidade User

@Entity()
// Declara que a classe Task é uma entidade do TypeORM
export class Task {
  @PrimaryGeneratedColumn()
  // Declara que a coluna id é uma chave primária gerada automaticamente
  id!: number;

  @Column()
  // Declara que a coluna title é uma coluna do banco de dados
  title!: string;

  @Column()
  // Declara que a coluna description é uma coluna do banco de dados
  description!: string;

  @Column()
  // Declara que a coluna completed é uma coluna do banco de dados
  completed!: boolean;

  @ManyToOne(() => User, user => user.tasks)
  // Declara um relacionamento muitos-para-um com a entidade User
  user!: User;
}

// Finalidade da Seção: Esta seção foi criada para definir a entidade Task, que representa uma tarefa no banco de dados. 
// A entidade inclui colunas para id, title, description e completed, e um relacionamento muitos-para-um com a entidade User.