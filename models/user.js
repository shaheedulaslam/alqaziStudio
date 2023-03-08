const mongoose = require('mongoose')
const gallerySchema = new mongoose.Schema({
    
    image:{
        type:String
    }
})
const gallerymodel = mongoose.model('gallery',gallerySchema)
module.exports = gallerymodel;