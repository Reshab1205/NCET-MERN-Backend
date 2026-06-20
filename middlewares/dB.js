const mongoose = require('mongoose')

const connectDb = async () => {
    const url = process.env.DB_URL
    try {
        await mongoose.connect(url)
        console.log('Db Connected')
    } catch (err) {
        console.log('Db Error', err)
    }
}

module.exports = connectDb