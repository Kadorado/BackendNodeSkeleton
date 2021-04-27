const { Router } = require("express");

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

router.post("/", userPost);

router.delete("/", userdelele);

router.patch("/", userPatch);

module.exports = router;
