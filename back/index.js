// Camada REST => é a camada que recebe as requisições HTTP
//Camada que "consomem" os serviços.
// na camada de serviços ficam as logicas de programação, function e etc.
//Bibliotecas
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//Componentes / camadas / manipuladores
import io from "./io/io";
import service from "./service/service";
import db from "./io/db";
import handlers from "./handlers/user";

//Uso dos imports
const app = express();
// 👇️ configure CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// padrão de injeção de dependências, clean architeture/hexagonal/onion architeture
let i = new io.IO(db.mysql());   //
let s = new service.Service(i);
let h = new handlers.Routers(s);


app.post("/login", h.auth.bind(h));

//=============
app.get("/hello", h.hello.bind(h));

//=============Chris que esta fazendo=====
app.post("/cadastro", h.cadastro.bind(h));

//========================================

//Simplificando o listen...
app.listen(8080);
// const/let port = 8080;
// app.listen(port, () => {
//   let data = new Date();
//   console.log(
//     "Servidor node iniciado em : " + data + "\nNa porta! " + port + "."
//   );
// });


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
