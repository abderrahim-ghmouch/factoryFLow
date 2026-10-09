import express from 'express'

import dotenv from 'dotenv/config'

const app = express()

app.use(express.json())

const startServer = async function () {
    try {
        await app.listen(process.env.PORT, () => {

            console.log(`server started in port${process.env.PORT}`)
        })

    } catch {

        console.error(error.Message)
    }
}

startServer()