# Desafio Room

## Introdução

Este é um projeto de exemplo para um sistema de autenticação e gerenciamento de tarefas. O backend é construído com Node.js, Express e TypeORM, enquanto o frontend é construído com React e Axios. O frontend foi criado usando o Vite, uma ferramenta de build rápida e moderna.

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL (versão 5.7 ou superior)

### Passos para Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/desafio-room.git
cd desafio-room

2. Instale as dependências do backend:
cd backend
npm install

3.Instale as dependências do frontend:
cd ../frontend
npm install

4. Configure o banco de dados MySQL:
Crie um banco de dados MySQL.
Atualize as configurações de conexão no arquivo server.ts com suas credenciais do MySQL.


5. Execute as migrações do TypeORM para criar as tabelas no banco de dados:
cd ../backend
npx typeorm migration:run

Uso
Executando o Backend
1. Compile o TypeScript:
npx tsc

2.Inicie o servidor:
node dist/server.js


O servidor estará rodando em http://localhost:3000.

Executando o Frontend

1. Inicie o servidor de desenvolvimento:
cd ../frontend
npm start / npm run dev

O frontend estará rodando em http://localhost:5173.

Estrutura do Projeto
desafio-room/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── authController.ts
│   │   ├── entities/
│   │   │   ├── User.ts
│   │   │   └── Task.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   └── taskRoutes.ts
│   │   └── server.ts
│   ├── dist/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Login/
│   │   │       ├── Login.tsx
│   │   │       └── style.ts
│   │   ├── services/
│   │   │   └── api.ts
│   │   └── App.tsx
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
└── README.md



Tecnologias Utilizadas
Backend
Node.js
Express
TypeORM
MySQL
JWT (JSON Web Token)
Frontend
React
Axios
Emotion (para estilização)