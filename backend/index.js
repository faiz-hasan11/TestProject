import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from "./routes/users.js"

const app = express()

app.use(bodyParser.json({limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}))
app.use(cors())

app.use("/users", userRoutes)


const CONNECTION_URL = "mongodb://Faiz:YxaMFvEGHz2VI52f@cluster0-shard-00-00.c80rl.mongodb.net:27017,cluster0-shard-00-01.c80rl.mongodb.net:27017,cluster0-shard-00-02.c80rl.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-5z4m5k-shard-0&authSource=admin&retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set("useFindAndModify" , false)