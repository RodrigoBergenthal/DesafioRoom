import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { Task } from './entities/Task';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'generic_user',
  password: 'generic_password',
  database: 'your_database', // Certifique-se de que este nome corresponda ao banco de dados que você criou
  entities: [User, Task],
  synchronize: true,
}).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((error: any) => console.log(error));