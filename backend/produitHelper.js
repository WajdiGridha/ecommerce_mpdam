const Produit = require('./models/produit')
   
exports.AddProduit = async (data) => {
    try{
    const newProduit = new Produit(data)
    const savedProduit = newProduit.save()
    if(!savedProduit) throw new Error('Produit could not be saved')
    return {error: null}
    } catch (error) {
      return {error: error.message}
    }
}

exports.GetProduit = async (id) => {
  try{
    const book = await Book.findByIdAndUpdate(id)
    if(!book) throw new Error('Could not retrieve book')
    return {error: null, data:book}
   } catch (error) {
     return {error: error.message, data:null}
  }
}

exports.GetAllProduit = async () => {
  try{
    const books = await Book.find({})
    if (!books) throw new Error('Book not found')
    return {error: null, data: books}
  }catch(error) {
      return {error: error.message, data: null}
  }
}

exports.UpdateProduit = async (id, data) => {
  try{
    const updatedBook = await Book.findByIdAndUpdate(id, data,{new: true})
    if(!updatedBook) throw new Error('Failed to update book')
    return {error: null, data: updatedBook}
   } catch (error) {
     return {error: error.message, data: null}
  }
}

exports.DeleteProduit = async (id) => {
  try{
    const isDeleted = await Book.findByIdAndDelete(id)
    if (!isDeleted) throw new Error('Failed to delete book')
    return { error: null}
  }catch (error) {
  return { error: error.message}
  }
}