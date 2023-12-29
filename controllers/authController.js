import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async(req,res) => {
    try{
        const { first_name, last_name, email, password, phone, address, answer } = req.body;
        if (!first_name) {
            return res.send({ error: "first name is Required" });
        }
        if (!email) {
            return res.send({ message: "Email is Required" });
        }
        if (!password) {
            return res.send({ message: "Password is Required" });
        }
        if (!phone) {
            return res.send({ message: "Phone no is Required" });
        }
        if (!address) {
            return res.send({ message: "Address is Required" });
        }
        if (!answer) {
            return res.send({ message: "Answer is Required" });
        }
        const exisitingUser = await userModel.findOne({ email });
        if (exisitingUser) {
        return res.status(200).send({
            success: false,
            message: "Already Register please login",
        });
        }
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            first_name,
            last_name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer,
        }).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
        });
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
}

export const loginController = async(req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Missing email or password",
            })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successfully",
            // user: {
            // _id: user._id,
            // name: user.name,
            // email: user.email,
            // phone: user.phone,
            // address: user.address,
            // role: user.role,
            // },
            token,
        });
    } catch(error) {
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
}

export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };
  