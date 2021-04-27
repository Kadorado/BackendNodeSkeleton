const { Router } = require("express");
const { check } = require("express-validator")


const {
  userGet,
  userPut,
  userPost,
  userPatch,
  userdelele,
} = require("../controller/user");

const router = Router();

router.get("/", userGet);

router.put("/:id", userPut);


// vamos a poner un middeware que lo que hace es bloquear la ruta si falla algo 
//  se manda como un arregle de midldlerawe en la seginda posicions
router.post("/",[
  check('correo', "EL correo no es valido").isEmail(), 
], userPost);

router.delete("/", userdelele);

router.patch("/", userPatch);

module.exports = router;
