import mongoose from "mongoose";

const userCollection = "usuarios"

const userSchema = new mongoose.Schema({
    nombre:{type:stringify, required:true, max:100},
    apellido:{type:stringify, required:true, max:100},
    email:{type:stringify, required:true, max:50},
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel

