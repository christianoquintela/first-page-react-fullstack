// CRUD dos dados
//Camada que "Consomem" dados da camada IO(entradas e saídas)
module.exports = {
  Service: class {
    constructor(io) {
      this.io = io;
    }

    // email = "'' or TRUE"
    auth(email, pass) {
      users = this.io.FilterUsers({ email });
      if (users[0].pass === pass) {
        return true;
      }
      return false;
    }
  },
};


//Camada que "Consomem" dados da camada IO(entradas e saídas)