const express = require("express");
const {AddProduit,UpdateProduit,DeleteProduit,GetAllProduit,GetProduit } = require("../controllers/produitController");
const router = express.Router();

router.route("/produit").post(AddProduit);
router.route("/produit").put(UpdateProduit);
router.route("/produit").delete(DeleteProduit);
router.route("/produit").get(GetAllProduit);
router.route("/produit").get(GetProduit);

module.exports = router;
