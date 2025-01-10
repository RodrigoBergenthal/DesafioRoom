import { Router } from 'express';
// Importa o Router do Express para criar um novo roteador

import { register, login } from '../controllers/authController';
// Importa as funções register e login do controlador de autenticação

const router = Router();
// Cria uma nova instância do roteador

router.post('/register', register);
// Define uma rota POST para o caminho '/register' que chama a função register

router.post('/login', login);
// Define uma rota POST para o caminho '/login' que chama a função login

export default router;
// Exporta o roteador como padrão


//Finalidade da Seção:
//Esta seção foi criada para definir as rotas de autenticação da aplicação,
//Ela utiliza o roteador do Express para definir rotas POST para registro e login de usuários, 
// chamando as funções apropriadas do controlador de autenticação.