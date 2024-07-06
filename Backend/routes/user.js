import express  from "express";
import bcryt from 'bcrypt'
const router = express.Router();
import { User } from "../models/User.js";
import jwt from 'jsonwebtoken'
// import nodemailer from 'nodemailer'

router.post('/signup', async (req, res)=>{
    const {fullname, username, email, password} = req.body;
    const user = await User.findOne({email})
    if(user){
        return res.json({message: "user already existed"})
    }

    const hashpassword = await bcryt.hash(password, 10)

    const newUser = new User({
        fullname,
        username,
        email,
        password: hashpassword,
    })

    await newUser.save()
    return res.json({status: true, message: "record registed"})
})

router.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.json({message: "user is not registered"})
    }

    const validPassword = await bcryt.compare(password, user.password)
    if(!validPassword){
        return res.json({message: "password is incorrect"})
    }

    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '1h'})
    res.cookie('token', token, {httpOnly: true, maxAge: 360000})
    return res.json({status: true, message:"loginsuccesfully"})
})

// Profile route
router.get('/profile', async (req, res) => {
    try {
        // Extract token from request cookies
        const token = req.cookies.token;
        
        // If token is not present, user is not authenticated
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.KEY);
        
        // Extract username from decoded token
        const { username } = decoded;
        
        // Find user by username
        const user = await User.findOne({ username });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // If user found, return user data
        return res.json({ fullname: user.fullname, username: user.username, email: user.email });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

router.get('/logout', (req, res) =>{
    res.clearCookie('token')
    return res.json({status: true})
})




// router.post('/forgot-password', async (rq, res)=>{
//     const {email} = req.body;
//     try {
//         const user = await User.findOne({email})
//         if(!user){
//             return res.json({message: "user not regusterd"})
//         }
//     } catch (err) {
//         console.log(err)
//     }
// })
  
export {router as UserRouter}