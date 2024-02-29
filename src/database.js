import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(db => console.log('db is connected')).catch(er => console.log(er))