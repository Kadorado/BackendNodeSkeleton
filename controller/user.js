const { response } = require("express");
const User = require("../models/user");
const Bcrytjs = require("bcryptjs");

const { validationResult}  = require("express-validator")



const userGet = (req, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit = 10 } = req.query;

  res.json({
    msg: "get-API controller",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const userPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put peticion",
    id: id,
  });
};

const userPost = async (req, res = response) => {
  
  const Errors = validationResult(req)
  
  if(!Errors.isEmpty()){
    return res.status(400).json(Errors)
  }

  const { nombre, correo, password, role } = req.body;



  const user = new User({ nombre, correo, password, role });
  // exist correo ? usamos paquete express validator de node 
  
  const existEmail = await User.findOne({ correo : correo});

  if (existEmail){
    return res.status(400).json({
      msg:"El correo ya esta registrado",

    })
  }

  // encrit db

  const salt = Bcrytjs.genSaltSync(10);

  user.password = Bcrytjs.hashSync( password , salt)

  // insert into DB
  await user.save();

  res.json({
    msg: "post peticion",
    user,
  });
};

const userdelele = (req, res = response) => {
  res.json({
    msg: "delete peticion",
    body,
  });
};

const userPatch = (req, res) => {
  res.json({
    msg: "delete peticion",
  });
};
module.exports = {
  userGet,
  userPut,
  userPost,
  userdelele,
  userPatch,
};
