
// padrão REST: uso do protocolo HTTP, uso dos verbos HTTP, Formato de resposta JSON = java scrip object notation.

class Routers {
  constructor(service) {
    this.service = service;
  }

  auth(req, res) {
    token = this.service.auth(req.body.email, req.body.pass);

    res.json({
      msg: "Seja bem vindo de volta",
      token,
    });
  }

  hello(req, res) {
    res.json({
      msg: "oi",
    });
  }

  cadastro(req, res) {
   this.service.cadastro(req.body.nome,req.body.email,() => {

     res.json({});
   });
  }

  //==Fim da classe Routers
}

module.exports = {
  Routers,
};


