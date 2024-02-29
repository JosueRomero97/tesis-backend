import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:false
    },
    roles:[{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
});

userSchema.statics.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}
userSchema.statics.comparePassword = async (password,receivedPasswword)=>{
    return await bcrypt.compare(password,receivedPasswword);
}

export default model('User',userSchema)