import { Schema, model } from "mongoose";

const ROLES = ['Admin','Investigador','Estudiante']
const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
