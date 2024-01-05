// Camada REST => é a camada que recebe as requisições HTTP
//Camada que "consomem" os serviços.
// na camada de serviços ficam as logicas de programação, function e etc.

//Banco de dados
import connection from './inOut/db.js';

//Bibliotecas
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//Uso dos imports
const app = express();
// 👇️ configure CORS
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Praticando Crud de tudo que eu fizer no portfólio.
app.post("/", (req, res) => {
  // console.log(JSON.parse(req.body));
  const {
    username,
    email,
    senha,
    cpf,
    telefone,
    data: datas,
    endereco,
    nickname
  } = req.body;

  const sql = `insert into user(username, email, senha, cpf, telefone, endereco, nickname) values ?`;
  let values = [[
    username,
    email,
    senha,
    cpf,
    telefone,
    endereco,
    nickname
  ]];

  connection.query(sql, [values], (err, result) => {
    if (err) { throw err };
    console.log("Registro inserido com sucesso! ID: " + result.insertId);
    console.log("Registro afetados: " + result.affectedRows)
  })
});

app.put("/cadastro/:id", (req, res) => {
  const {
    username,
    email,
    senha,
    cpf,
    telefone,
    data: datas,
    endereco,
    nickname
  } = req.body;
  const id = req.params.id

  const sql = `update user set username = ?, email = ?, senha = ?, cpf = ?, telefone = ?, endereco = ?, nickname = ? where id = ?`;
  let values = [[
    username,
    email,
    senha,
    cpf,
    telefone,
    endereco,
    nickname,
    id
  ]];

  connection.query(sql, [values], (err, result) => {
    if (err) { return res.json((err)) } else { res.json(JSON.stringify(result)) }
  })
});

app.get("/", (req, res) => {
  connection.query('select * from user', (err, result, fields) => {
    res.json(result);
  })

});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log('id que será deletado: ' + id);

  connection.query('delete from user where id = ?', [id], (err, result, fields) => {
    console.error(err)
    console.log(result)
  })
})


//Simplificando o listen...
// app.listen(8080);
const port = 8080;
app.listen(port, () => {
  let data = new Date();
  console.log(
    "Servidor node iniciado em : " + data + "\nNa porta! " + port + "."
  );
});


// Depois de dominar e entender como usar o express+cors praticar get/post/put/delete
// app.get("/", function (req, res) {
//   res.send("Got a POST request");
// });
// app.post("/", function (req, res) {
//   res.send("Got a POST request");
// });
// app.put("/user", function (req, res) {
//   res.send("Got a PUT request at /user");
// });
// app.delete("/user", function (req, res) {
//   res.send("Got a DELETE request at /user");
// });

// funções tradicionais ou arrow functions.
