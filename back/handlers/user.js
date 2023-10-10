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
}

module.exports = {
  Routers,
};

// export class CLI {
//   constructor(service) {
//     this.service = service;
//   }

//   auth(args) {
//     // ./app auth <email> pass
//     token = this.service.auth(args[0], args[1]);
//     print(token);
//   }
// }
