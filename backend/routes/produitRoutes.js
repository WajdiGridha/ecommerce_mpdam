const express = require("express");
const { AddProduit, UpdateProduit, DeleteProduit, GetAllProduit, GetProduit } = require("../controllers/produitController");
const router = express.Router();

router.route("/").post(AddProduit);
router.route('/:id').delete(DeleteProduit).put(UpdateProduit).get(GetProduit);
router.route("/").get(GetAllProduit);

module.exports = router;
