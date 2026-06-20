const express = require("express");
const user = require("../models/userModel");

const register = async (req, res) => {
  try {
    const inputData = req.body;
    if (
      Object.keys(inputData).length === 0 &&
      Object.values(inputData).length === 0
    ) {
      return res.status(404).json({ message: "Provide details to Register" });
    }
    const checkExistence = await user.findOne({
      $or: [
        { email: inputData.email },
        { mobile_number: inputData.mobile_number },
      ],
    });
    console.log(checkExistence);
    if (checkExistence) {
      return res
        .status(402)
        .json({ message: "User already exists! Kindly Login" });
    }
    const createUser = await user.create(inputData);
    // console.log(createUser)
    return res
      .status(200)
      .json({ message: "User created successfully", email: createUser.email });
  } catch (err) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const inputData = req.body;
    if (
      Object.keys(inputData).length === 0 &&
      Object.values(inputData).length === 0
    ) {
      return res.status(404).json({ message: "Provide details to Login" });
    }
    const checkExistence = await user.findOne({ email: inputData.email });
    if(!checkExistence) {
    return res.status(404).json({ message: "Account Does not Exists" }); 
    }
    if(inputData.password === checkExistence.password) {
       return res.status(200).json({message: "Login Successfull"}) 
    } else {
        return res.status(200).json({message: "Wrong Credentials"})   
    }

  } catch (err) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const inputData = req.body;
    const data = await user.findByIdAndUpdate(id, inputData, {
      new: true,
    });
    console.log(data);
    return res.status(200).json({ message: "User Updated successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await user.findByIdAndDelete(id);
    return res.status(200).json({ message: "User Deleted" });
  } catch (err) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await user.find();
    return res.status(200).json({ message: "Users fetched", data: users });
  } catch (err) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

module.exports = { register, login, update, deleteUser, getAllUser };
