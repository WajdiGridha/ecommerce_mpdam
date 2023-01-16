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

const UpdateProduit = async (req, res) =>
{
    try
    {
        const { name, email, password } = req.body;
        const produit = await Produit.create({ name, email, password });
        res
            .status(201)
            .json({ user: { email: user.email, name: user.name }, token });
    } catch (error)
    {
        res.status(500).json({ msg: "an error occurred" });
    }
};

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

const DeleteProduit = async (req, res) =>
{
    try
    {
        const { name, email, password } = req.body;
        const produit = await Produit.create({ name, email, password });
        const token = user.createJWT();
        res
            .status(201)
            .json({ user: { email: user.email, name: user.name }, token });
    } catch (error)
    {
        res.status(500).json({ msg: "an error occurred" });
    }

};
const GetAllProduit = async () =>
{
    try
    {
        const produits = await Produit.find({})
        if (!produit) throw new Error('Produit not found')
        return { error: null, data: produits }
    } catch (error)
    {
        return { error: error.message, data: null }
    }
}
module.exports = { AddProduit, UpdateProduit, DeleteProduit, GetAllProduit, GetProduit };
