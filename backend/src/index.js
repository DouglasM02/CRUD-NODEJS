import express from "express";
import 'dotenv/config'
import {usersRoutes} from './users/routes/users.routes.js'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(cors())

app.use(usersRoutes)

app.listen(3000, () => {
    console.log("server started at port 3000")
})
