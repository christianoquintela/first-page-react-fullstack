// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "chris",
  password: "0329",
  database: "portfolio",
});
//Connection OK.
connection.connect((err) => {
  console.log("conecção com o banco de dados realizada com sucesso!");
});

// simple query

// connection.query(
//   'insert into user values ("Mae", "mae@ela.com", "1967", 3)',
//   (err, rows, fields) => {
//     if (!err) {
//       console.log("inserido com sucesso!");
//     } else {
//       console.log("erro ao tentar inserir dados!!!");
//     }
//   }
// );
// connection.query("select *  from user", (err, rows, fields) => {
//   if (!err) {
//     console.log("Valores de user: ", rows);
//   } else {
//     console.log("erro ao tentar consultar dados!!!");
//   }
// });
