import config from "../config.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Role from "../models/rol.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.json({ msg: "No token" });

    const decodedId = jwt.verify(token, config.SECRET);
    req.userId = decodedId.id;
    // console.log("codigo", decodedId);

    const user = await User.findById(decodedId.id);
    // console.log(user);                          
    if (!user) return res.status(404).json({ msg: "no user found" });

    next();
  } catch (error) {
    return res.status(401).json({message:'Unauthorized'})
  }
};


export const isAdmin = async(req,res,next)=>{
  const usuario = await User.findById(req.userId);
  const roles = await Role.find({_id:{$in:usuario.roles}});
  console.log(roles);

  for(let i =0;i<roles.length;i++){
    if(roles[i].name=='Admind'){
      next()
      return
    }
    
  }
  return res.status(403).json({msg: 'Requiere rol de Admin'})
}

export const isInvestigador = async(req,res,next)=>{
  
}