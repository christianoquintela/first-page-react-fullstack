// CRUD dos dados
//camada que faz as conexões com o banco de dados.

module.exports = {
  FS: class {
    FilterUser({ id, email }) {
      // abree arquivo json
      // le
      // acha o userd
      //     q = "select * from users where"
      //     args = []
      //   if (email != "") {
      //     q += " email = ?"
      //     args.push(email)
      //   }
      //   db.exec(q, args...)

      return [{ id, name: "chris", pass: "limao" }];
    }
    // DeleteUser
    // UpdateUser
  },
};
//camada que faz as conexões com o banco de dados.