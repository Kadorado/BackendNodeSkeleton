const { response } = require("express");

const userGet = (req, res = response) => {

  const { q, nombre="No name", apikey , page =1 , limit =10} = req.query;

  res.json({
    msg: "get-API controller",
    q, 
    nombre, 
    apikey, 
    page, 
    limit
  });
};

const userPut = (req, res = response) => {
  const {id }= req.params;

  res.json({
    msg: "put peticion",
    id:id
  });
};

const userPost = (req, res = response) => {
  const { año, mes, dia } = req.body;

  res.json({
    msg: "post peticion",
    data: { año: año, mes: mes, dia: dia },
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
