const Produit = require("../models/produit");

const AddProduit = async (req, res) =>
{
  try
  {
    const { code, description, notes, avis, enStock, image, prix, fonctionnalites } = req.body;
    const produit = await Produit.create({
      code, description, notes, avis,
      enStock, image, prix, fonctionnalites
    });
    res
      .status(201)
      .json({
        produit: {
          code: produit.code,
          description: produit.description,
          notes: produit.notes,
          avis: produit.avis,
          enStock: produit.enStock,
          image: produit.image,
          prix: produit.prix,
          fonctionnalites: produit.fonctionnalites
        }
      });
  } catch (error)
  {
    res.status(500).json({ msg: "an error occurred", error });
  }
};


//Update
//http://localhost:5000/api/produit/63c5930f12e3387e1b0e16c3
const UpdateProduit = async (req, res) =>
{
  if (!req.body)
  {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Produit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data =>
    {
      if (!data)
      {
        res.status(404).send({
          message: `Cannot update Produit with id=${id}. Maybe Produit was not found!`
        });
      } else res.send({ message: "Produit was updated successfully.", data });
    })
    .catch(err =>
    {
      res.status(500).send({
        message: "Error updating Produit with id=" + id
      });
    });
};
///Get By ID
// http://localhost:5000/api/produit/63c5930f12e3387e1b0e16c3
const GetProduit = async (req, res) =>
{
  const id = req.params.id;
  Produit.findById(id)
    .then(data =>
    {
      if (!data)
        res.status(404).send({ message: "Not found Produit with id " + id });
      else res.send(data);
    })
    .catch(err =>
    {
      res
        .status(500)
        .send({ message: "Error retrieving Produit with id=" + id });
    });
}

//Delete
const DeleteProduit = async (req, res) =>
{
  const produit = await Produit.findById(req.params.id)
  if (!produit)
  {
    res.status(400)
    throw new Error('Produit not found')
  }
  await Produit.findOneAndRemove()
  res.status(200).json({ id: req.params.id })
}

//GETAll Produit
// http://localhost:5000/api/produit  
const GetAllProduit = async (req, res) =>
{
  const produits = await Produit.find()
  res.status(200).json(produits)
}
module.exports = { AddProduit, UpdateProduit, DeleteProduit, GetAllProduit, GetProduit };
