import { Router } from 'express'

import settings from './settings.routes'
import users from './users.routes'

const routes = Router()

routes.use('/api', settings)
routes.use('/api', users)

export { routes }
