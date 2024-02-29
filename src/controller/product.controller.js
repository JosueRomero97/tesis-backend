import product from '../models/product.js';



export const getProducts = (req,res)=>{
    product.find().then(data => res.json(data));
    // res.json('lista de productos')
}

export const createProduct = (req,res)=>{
    
}


export const getProductById = (req,res)=>{
    
}

export const updateProductById = (req,res)=>{
    
}

export const deleteProductById = (req,res)=>{
    
}