# Backend do Desafio Room

## Introdução

Este é o backend do projeto Desafio Room, construído com Node.js, Express e TypeORM. Ele fornece APIs para autenticação de usuários e gerenciamento de tarefas.

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL (versão 5.7 ou superior)

### Passos para Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/desafio-room.git
cd desafio-room/backendnpm 

npm install

configure o banco de dados MySQL:
Crie um banco de dados MySQL.
Atualize as configurações de conexão no arquivo src/ormconfig.ts com suas credenciais do MySQL.

npx typeorm migration:run


Uso
Executando o Backend
Compile o TypeScript:

npx tsc
node dist/server.js

Estrutura do Projeto
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── taskController.ts
│   ├── entities/
│   │   ├── User.ts
│   │   └── Task.ts
│   ├── middlewares/
│   │   └── authMiddleware.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── taskRoutes.ts
│   ├── ormconfig.ts
│   └── server.ts
├── dist/
├── package.json
└── tsconfig.json


Endpoints
Autenticação
POST /api/auth/register: Registra um novo usuário.
POST /api/auth/login: Autentica um usuário e retorna um token JWT.
Tarefas
POST /api/tasks: Cria uma nova tarefa (requer autenticação).
GET /api/tasks: Obtém todas as tarefas do usuário autenticado.
PUT /api/tasks/:id: Atualiza uma tarefa existente (requer autenticação).
DELETE /api/tasks/:id: Deleta uma tarefa (requer autenticação).
Tecnologias Utilizadas
Node.js
Express
TypeORM
MySQL
JWT (JSON Web Token)
bcryptjs