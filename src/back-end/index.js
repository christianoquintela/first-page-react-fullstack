const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
// 👇️ configure CORS
app.use(cors());

app.get("/", (req, res) => {
  
  res.json({
    msg: "oi mundaum doido!",

  });
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

app.listen(port, () => {
  let data = new Date();
  console.log(
    "Servidor node iniciado em : " + data + "\nNa porta! " + port + "."
  );
});
