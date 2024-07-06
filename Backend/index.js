import express from 'express'
// const express = require('express')
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'
import { formRouter } from './routes/form.js';
import { loanRouter } from './routes/loan.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)
// Use the formRouter for handling form submissions
app.use('/form', formRouter);
app.use('/loan', loanRouter);
mongoose.connect('mongodb://127.0.0.1:27017/fypauthentication')

app.listen(process.env.PORT, ()=>{
    console.log("Server is running")
})