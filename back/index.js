//Camada que "consomem" os serviços.
// na camada de serviços ficam as logicas de programação, classes, function e etc.
const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

// const io = require("./io/fs");
// const service = require("./service/service");
// const handlers = require("./handlers/user");

// 👇️ configure CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// padrão de injeção de dependências, clean architeture/hexagonal/onion architeture
// let i = new io.FS();
// let s = new service.Service(i);
// let h = new handlers.Routers(s);

// app.post("/auth", h.auth.bind(h));
// app.get("/hello", h.hello.bind(h));

app.post("/cadastro", (req, res) => {
  console.log(req.body);
  //   console.log(req.body.nome);
  //   console.log(req.body.cpf);
  res.json(req.body);
});

// Depois de dominar e entender como usar o express+cors praticar post/put/delete
// app.post("/", function (req, res) {
//   res.send("Got a POST request");
// });
// app.put("/user", function (req, res) {
//   res.send("Got a PUT request at /user");
// });
// app.delete("/user", function (req, res) {
//   res.send("Got a DELETE request at /user");
// });

//Simplificando o listen...
app.listen(8080);
// app.listen(port, () => {
//   let data = new Date();
//   console.log(
//     "Servidor node iniciado em : " + data + "\nNa porta! " + port + "."
//   );
// });
