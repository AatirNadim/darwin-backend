import mongoose from "mongoose";
import { userModel } from "../Models/userModel.js";
import { createAccessToken } from "./auth.js";

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        console.log('recieved at the backend', userName, password);
        const users = await userModel.findOne({
            userName: userName,
            password: password,
        });
        const token = createAccessToken(users);
        // console.log('user', users)
        // console.log('token', token);
        // jwt token here
        res.status(200).json({
            user: users,
            token: token
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const signup = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const users = await userModel.create({
            userName: userName,
            password: password,
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}