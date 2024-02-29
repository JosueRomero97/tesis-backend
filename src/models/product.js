// const mongoose = require("mongoose");
import {Schema,model} from "mongoose";


const productSchema = new Schema({
    nombre:String,
    categoria: String,
    precio: Number
},{
    timestamps:true,
    versionKey: false
})


// module.exports = mongoose.model('Product', productSchema);

export default model('Producto',productSchema)