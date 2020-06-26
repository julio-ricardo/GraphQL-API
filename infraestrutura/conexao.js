const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'agenda-petshop',
  multipleStatements: true
})

module.exports = conexao
