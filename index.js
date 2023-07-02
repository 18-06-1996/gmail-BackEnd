const express = require ('express')
const cors = require ('cors')
const connection = require ('./database/db.js')
const routes =require ('./Routes/route.js')



const app = express()
const PORT =8000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))

connection();

app.use('/',routes)

app.listen(PORT,()=>console.log(`server is started ${PORT}`))