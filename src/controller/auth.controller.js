import User from "../models/user.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import Role from '../models/rol.js';
//registro
export const signUp = async (req, res) => {
  const { name, email, password, roles } = req.body;
  console.log(req.body);
  
  const userFound = User.find({ email });
  if(userFound){
    res.json({msg:"Correo existente"})
    return
  }

  const newUser = new User({
    name,
    email,
    password: await User.encryptPassword(password),
  });

  if(roles){
    console.log('existe rol');
    const foundRoles = await Role.find({name: {$in: roles}});
    newUser.roles = foundRoles.map(e => e._id);
  }else{
    const role = await Role.findOne({name:"Estudiante"});
    newUser.roles = [role._id];
  }

  const saveUser = await newUser.save();

  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400, //24Hrs
  });

  res.json({ token });
};

//login
export const signIn = async (req, res) => {
  const userFound = await User.findOne({email: req.body.email}).populate("roles");

  if(!userFound) return res.json({message: "User not found"});

  const matchPwd = await User.comparePassword(req.body.password,userFound.password);
  if(!matchPwd) return res.json({token:"null",msg:'password incorrecto'})

  console.log(userFound);
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400, //24Hrs
  }); 
  res.json({token: token})
};
