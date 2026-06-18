const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required: true},
    mobile_number:{type:String, unique:true},
    dp:{type:String},
    address:{
        address_line_1:{type:String},
        address_line_2:{type:String},
        pincode:{type:Number},
        city:{type:String},
        state:{type:String},
        nation:{type:String}
    },
    isActive:{type:Boolean},
    userStatus:{type:String, enum:["Active", "Inactive", "Blocked", "Banned"]}
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)

