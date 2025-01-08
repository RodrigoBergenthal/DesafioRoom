import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { Task } from './entities/Task';

export const AppDataSource = createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'generic_user',
  password: 'generic_password',
  database: 'your_database', // Certifique-se de que este nome corresponda ao banco de dados que você criou
  entities: [User, Task],
  synchronize: true,
});