const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();
// import app from '../app';

// import { Router } from "express";
//LISTAR USUARIO
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => {

      // res.json({autor: app.get('pkg').name,data: data});
      res.json({autor: 'Josue Romero',data: data});
    })
    .catch((err) => {
      res.json(err);
    });
});

//OBTENER USUARIO
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    // findOne({nombre:'Admin'})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//CREAR USUARIO
router.post("/create/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) =>
      // res.status(200).json({ message: 'ok', data:data })
      res.json(data)
    )
    .catch((err) => {
      console.log(err);
      res.json({
        msg: err,
      });
    });
});

//ACTUALIZAR USUARIO
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, edad, correo } = req.body;

  userSchema
    .updateOne({ _id: id }, { $set: { nombre, edad, correo } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//ELIMINAR USUARIO
router.delete("/user/:id", (req, res) => {
  const { id} = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
module.exports = router;
