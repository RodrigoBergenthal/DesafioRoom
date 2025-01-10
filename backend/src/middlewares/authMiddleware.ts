import { Request, Response, NextFunction } from 'express';
// Importa os tipos Request, Response e NextFunction do Express

import jwt from 'jsonwebtoken';
// Importa a biblioteca jsonwebtoken para manipulação de tokens JWT

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Extrai o token do cabeçalho de autorização
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    // Se não houver token, responde com status 401 (não autorizado)
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  try {
    // Verifica e decodifica o token JWT
    const decoded = jwt.verify(token, 'your_jwt_secret') as { userId: number };
    // Adiciona o userId decodificado à requisição
    req.userId = decoded.userId;
    // Chama a próxima função middleware na pilha
    next();
  } catch (error) {
    // Se o token for inválido, responde com status 401 (não autorizado)
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Finalidade da Seção: Esta seção foi criada para definir um middleware de autenticação que verifica a presença e validade de um token JWT nas requisições. 
// Se o token for válido, o middleware adiciona o userId à requisição e chama a próxima função middleware na pilha. 
// Se o token for inválido ou ausente, responde com status 401 (não autorizado).