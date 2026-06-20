const express = require('express')
const user = require('../models/userModel')

const register = async (req,res) => {
    try {
        const inputData = req.body
        if(Object.keys(inputData).length === 0 && Object.values(inputData).length === 0) {
            return res.status(404).json({message: "Provide details to Register"})
        }
        const checkExistence = await user.findOne({
            $or:[
            {email:inputData.email},
            {mobile_number:inputData.mobile_number}
            ]
        }
        )
        console.log(checkExistence)
        if(checkExistence) {
            return res.status(402).json({message: "User already exists! Kindly Login"})
        }
        const createUser = await user.create(inputData)
        // console.log(createUser)
        return res.status(200).json({message: "User created successfully", email:createUser.email})
    } catch(err) {
        console.log(err)
       return res.status(400).json({message: 'Internal Server Error'})
    }

}

const login = async (req,res) => {

}

const update = async (req,res) => {

}

const deleteUser = async (req,res) => {

}

const getAllUser = async (req,res) => {
    const users = await user.find()
    return res.status(200).json({message: "Users fetched", data:users})
}

module.exports = {register, login, update, deleteUser, getAllUser}
