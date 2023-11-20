//Camada de dados
// CRUD dos dados - aqui usa-se a linguagem de banco de dados
//Insert / Select / Delete
//camada que faz o uso da conexão com o banco de dados.

// padrão REST: uso do protocolo HTTP, uso dos verbos HTTP, Formato de resposta JSON = JavaScrip Object Notation.


module.exports = {
  IO: class {
    constructor(db) {
      this.db = db;
    }

    FilterUser({ id, email }) {
      return [{ id, name: "chris", pass: "limao" }];
    }

    // Get / Busca / consulta
    
    // Insert / Put
    cadastrar(nome, email, cb) {
      const q =
        "INSERT INTO `portfolio`.`user` (`username`, `email`, `password`, `cpf`, `telefone`, `datanascimento`, `idade`, `endereco`) VALUES (?,?,?,?,?,?,?,?);";
      this.db.execute(q, [nome, email], (err, results, fields) => {
        console.error(err);
        console.info(results);
        console.log(fields);
        cb(err)
      });

    }
    // DeleteUser
    // UpdateUser
  },
};
//camada que faz as conexões com o banco de dados.

//Exemplos de como utilizar a conexão com o banco de dados e realizar as querys.

// export const getUsers = (_, res) =>{
//   const queryNoBanco = "SELECT * FROM portfolio.user";
//   db.query(queryNoBanco, (err,rows,fields)=>{manipulação do err, rows e fields})
// };

// simple query

// connection.query(
// comando sql
//'insert into user values ("Mae", "mae@ela.com", "1967", 3)',
// função que informa de erros, rows=linhas, fields=campos
//   (err, rows, fields) => {
//     if (!err) {
//       console.log("inserido com sucesso!");
//     } else {
//       console.log("erro ao tentar inserir dados!!!");
//     }
//   }fim função
// );fim da query


//Outro exemplor onde o select é armazenado em uma variavel
// const q = "select *  from user";

// connection.query(q, (err, rows, fields) => {
//   if (!err) {
//     console.log("Valores de user: ", rows);
//   } else {
//     console.log("erro ao tentar consultar dados!!!");
//   }
// });
