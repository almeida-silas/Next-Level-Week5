import 'reflect-metadata'
import './database/connection'

import express from 'express'
import { routes } from './routes'
import { errors } from 'celebrate'
import { setupSwagger } from './config/swagger'

const app = express()

setupSwagger(app)
app.use(express.json())
app.use(routes)
app.use(errors())

export default app
