const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise((resolve, error)=>{
    conexao.query(query, (erro, resultados, campos) => {
      console.log('executou a query!');
      if (erro) {
        error(erro);
        
      } else {
        resolve(resultados);
      }
  
    });
  }) 
}

module.exports = executaQuery
