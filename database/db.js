const mongoose = require ('mongoose')
const dotenv = require ('dotenv')

dotenv.config();

const db_name ='gmailclone'

const DB_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bwkbmts.mongodb.net/${db_name}`

const connection = ()=>{
    try {
        mongoose.connect(DB_URL, {useNewUrlParser :true})
        console.log("Database Connected Successfully...");
    } catch (error) {
        console.log("error while connecting database",error.message);
    }
}

 module.exports = connection