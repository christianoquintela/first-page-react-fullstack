// Camada REST => é a camada que recebe as requisições HTTP
//Camada que "consomem" os serviços.
// na camada de serviços ficam as logicas de programação, function e etc.
//Bibliotecas
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


//Uso dos imports
const app = express();
// 👇️ configure CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



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
