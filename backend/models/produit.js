const mongoose = require("mongoose");

const produitSchema = mongoose.Schema(
  {

    // code description notes avis enStock image prix fonctionnalites
    code: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    avis: {
      type: String,
    },
    enStock: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
    },
    prix: {
      type: String,
      required: true,
    },
    fonctionnalites: {
      type: String,
    },
  },
  { timestamps: true }

);
// schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

module.exports = mongoose.model("Produit", produitSchema);
