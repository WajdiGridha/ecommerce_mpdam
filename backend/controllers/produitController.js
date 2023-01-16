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
const UpdateProduit = async (req, res) =>
{
    const prodUpdated = await Produit.findById(req.params.id)
    if (!prodUpdated)
    {
        res.status(400)
        throw new Error('Produit not found')
    }
    const updateProduit = await Produit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateProduit)
}

const GetProduit = async (id) =>
{
    try
    {
        const produit = await Produit.findByIdAndUpdate(id)
        if (!produit) throw new Error('Could not retrieve book')
        return { error: null, data: produit }
    } catch (error)
    {
        return { error: error.message, data: null }
    }
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

//GET
const GetAllProduit = async (req, res) =>
{
    const produits = await Produit.find()
    res.status(200).json(produits)
}
module.exports = { AddProduit, UpdateProduit, DeleteProduit, GetAllProduit, GetProduit };
