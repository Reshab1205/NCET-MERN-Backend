const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/home', (req,res) => {
    res.send('Hello I am Homepage')
})

router.get('/about', (req,res) => {
    res.send('Hello I am About page')
})

router.get('/contact', (req,res) => {
    res.send('Hello I am Contact page')
})

router.get('/profile', (req,res) => {
    res.send('Hello I am Profile page')
})


router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/update-user', userController.update)
router.post('/delete-user', userController.deleteUser)
router.post('/get-users', userController.getAllUser)




module.exports = router