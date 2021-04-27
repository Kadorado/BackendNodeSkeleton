const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Middleware are function that allowed
    // Routes of me app

    this.userRoutePath = "/api/user"


    this.middlewares();
    this.routes();
  }

  middlewares() {
    //   public directories

    // siempre que hay un .use es por que hay un middewalre
    this.app.use(cors())
    this.app.use(express.static("public"));

    // parseo y lectura del body en formato .json()
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.userRoutePath,require("../routes/user"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Run in port", this.port);
    });
  }
}

module.exports = Server;
