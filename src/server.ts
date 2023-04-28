import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})