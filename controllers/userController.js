const express = require('express')

const register = async (req,res) => {
    console.log(req.body)
    res.send('Register')
}

const login = async (req,res) => {

}

const update = async (req,res) => {

}

const deleteUser = async (req,res) => {

}

const getAllUser = async (req,res) => {

}

module.exports = {register, login, update, deleteUser, getAllUser}
