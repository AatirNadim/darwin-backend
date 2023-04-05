import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },

})


export const userModel = mongoose.model('User', userSchema);