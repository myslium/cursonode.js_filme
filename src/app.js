import './utils/global.js'

import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

import './repository/connection.js'

const servidor = express()

servidor.use(express())
servidor.use(cors())
servidor.use(express.json())


servidor.listen (
    5002,
    () => console.log('--> A API foi subida com sucesso ')
)


