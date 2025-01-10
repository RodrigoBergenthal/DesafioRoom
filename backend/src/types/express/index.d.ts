// Declara um namespace chamado Express
declare namespace Express {
  // Estende a interface Request do Express
  export interface Request {
    // Adiciona uma propriedade opcional userId do tipo number à interface Request
    userId?: number;
  }
}

//Finalidade da Seção: Esta seção foi criada para estender a interface Request do Express, 
// adicionando uma propriedade opcional userId do tipo number. 
// Isso é útil quando você deseja armazenar o ID do usuário autenticado na requisição,
//  permitindo que outras partes da aplicação acessem essa informação de forma tipada.

