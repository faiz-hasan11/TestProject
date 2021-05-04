import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import userModel from "../models/userDb.js"

export const signin = async (req,res) =>
{
    const {email , password} = req.body
    try{
        const existingUser = await userModel.findOne({email})
        if(!existingUser)
        {
            return res.status(200).json({message:"user does not exist"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCorrect)
        {
            return res.status(200).json({message:"Invalid Credentials"})
        }
        const token = jwt.sign({email:existingUser.email , id:existingUser._id} , "test" , {expiresIn:"1h"})
        res.status(200).json({result:existingUser , token})
    }
    catch(error)
    {
        res.status(500).json({message:"something went wrong"})
    }
}

export const signup = async (req,res) =>
{
    const {username , name , address , mobile , email , password , confirmpassword } = req.body
    try
    {
        const existingUser = await userModel.findOne({email})
        if(existingUser)
        {
            return res.status(200).json({message:"user already exist"})
        }
        if (password.match(/[a-z]/g) && password.match(
                    /[A-Z]/g) && password.match(
                    /[0-9]/g) && password.match(
                    /[^a-zA-Z\d]/g) && password.length >= 8)
        {
                const hashedPassword = await bcrypt.hash(password,12)
                const result = await userModel.create({username , name , address , mobile , email , password:hashedPassword})
                const token = jwt.sign({email:result.email , id:result._id} , "test" , {expiresIn:"1h"})
                res.status(200).json({result , token})
        }
        if(password !== confirmpassword)
        {
            return res.status(200).json({message:"password not matched"})   
        }
        return res.status(200).json({message:"password not Strong"})  
    }
    catch(error)
    {
        res.status(500).json({message:"something went wrong"})
    }
}