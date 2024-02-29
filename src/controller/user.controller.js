import userSchema from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const listUser = await userSchema.find();
    res.json(listUser);
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await userSchema.findById(id);
    res.json(usuario);
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email,password } = req.body;
    const newUser = await new userSchema({ name, email, password }).save();
    res.json(newUser);
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioUpdate = await userSchema.findByIdAndUpdate(id, req.body,{
      new:true
    });
    res.json(usuarioUpdate);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const {id} = req.params;
    // const deleteUser = await userSchema.deleteOne({_id:id});
    const deleteUser = await userSchema.findByIdAndDelete(id);
    res.json(deleteUser)
  } catch (error) {
    
  }
};
