import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

export async function signUp(req, res) {

    const { name, email, password, image } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (user) return res.status(409).send("email ja cadastrado")

        const hash = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ name, email, password: hash, image })
        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }

}