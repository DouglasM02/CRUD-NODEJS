import express from 'express'
import { usersDelete, usersGetAll,usersGetOne,usersPost, usersPut } from '../../services/db/dbHandler.js'

const usersRoutes = express()

usersRoutes.get("/users/", async (req, res) => {
    const users = await usersGetAll()
    res.send(users)
})

usersRoutes.get("/users/:id", async (req, res) => {
    const {id} = req.params
    const user = await usersGetOne(id)
    res.send(user)
})

usersRoutes.post("/users/", async (req, res) => {
    const {name} = req.body
    await usersPost(name)
    res.sendStatus(201)
})

usersRoutes.put("/users/:id", async (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const user = {
        id: id,
        name: name
    }
    console.log("fora: ", user)
    await usersPut(user)

    res.sendStatus(200)
})

usersRoutes.delete("/users/:id", (req, res) => {
    const {id} = req.params
    usersDelete(id)
    res.sendStatus(200)
})

export {usersRoutes}
