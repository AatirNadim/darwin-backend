import mongoose from "mongoose";
import { userModel } from "../Models/userModel";

export const getUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const users = await userModel.findOne({
            userName: userName,
            password: password,
        });

        // jwt token here
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}