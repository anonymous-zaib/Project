import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, require: true},
    username: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
})

const UserModel = mongoose.model("User", UserSchema)

export {UserModel as User}