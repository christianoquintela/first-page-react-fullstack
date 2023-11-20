//Camada de serviço
//Camada de serviço, ela é responsável por consumir a camada de dados
//Aqui ficam as funções que manipulam os dados que chegam atravéz do padrão REST.
//Será enviado pelo index as informações das requisições get, post, put, delete e etc.
//IN = entrada; Aqui na serviçe recebemos dados da index, tratamos, enviamos a camada de dados para gravar/alterar no banco de dados - Insert/update/delete
//OUT = saída; Também aqui na camada de serviços enviamos uma solicitação a camada de dados para retornar alguma info do banco - get/busca/consulta

// padrão REST: uso do protocolo HTTP, uso dos verbos HTTP, Formato de resposta JSON = java scrip object notation.


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
//geralmente e nessa camada em que valida os dados
    cadastro(nome,email, cb){
      if(nome == '' || email == ''){
        return false;
      }
      this.io.cadastrar(nome, email,cb);
      return true;
    }


  },
};


//Camada que "Consomem" dados da camada IO(entradas e saídas)