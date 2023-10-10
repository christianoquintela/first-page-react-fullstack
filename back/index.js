//Camada que "consomem" os serviços.
// na camada de serviços ficam as logicas de programação, classes, function e etc.
const app = require("express")();
const cors = require("cors");

const io = require("./io/fs");
const service = require("./service/service");
const handlers = require("./handlers/user");

const port = 8080;

// 👇️ configure CORS
app.use(cors());

// padrão de injeção de dependências, clean architeture/hexagonal/onion architeture
let i = new io.FS();
let s = new service.Service(i);
let h = new handlers.Routers(s);

app.post("/auth", h.auth.bind(h));

app.get("/hello", h.hello.bind(h));

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

app.listen(port, () => {
  let data = new Date();
  console.log(
    "Servidor node iniciado em : " + data + "\nNa porta! " + port + "."
  );
});
