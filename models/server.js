const express = require("express");
const cors = require("cors");
const { dbConnection} =  require("../database/config")


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Middleware are function que se ejecuta antes de llamar a un controllador o seguri con ls solicitud e mis peticiones
    // Routes of me app
    this.userRoutePath = "/api/user"

    this.connectDB();

    // middlewares 
    this.middlewares();
    // system routes
    this.routes();
  }

  async connectDB(){
    await dbConnection();
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
