//camada de conexão com o banco de dados.
//exporta a conexão validada com o BD.

// padrão REST: uso do protocolo HTTP, uso dos verbos HTTP, Formato de resposta JSON = java scrip object notation.

import mysql from "mysql2";

function mysql() {
  // create the connection to database
  const db = mysql.createConnection({
    host: "localhost",
    user: "chris",
    password: "0329",
    database: "portfolio",
  });
  //Connection OK.
  db.connect((err) => {
    //Msg para informar que a conexão com o banco de dados foi realiza com sucesso.
    console.log("conecção com o banco de dados realizada com sucesso!");
  });

  return db;
}

export default mysql;
