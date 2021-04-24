import 'reflect-metadata'
import './database/connection'

import express from 'express'
import { routes } from './routes'
import { setupSwagger } from './config/swagger'
import { globalHandler } from './errors/handler'

const app = express()

setupSwagger(app)
app.use(express.json())
app.use(routes)
app.use(globalHandler)

export default app
