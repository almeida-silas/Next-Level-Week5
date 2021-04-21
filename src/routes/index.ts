import { Router } from 'express'

import settings from './settings.routes'

const routes = Router()

routes.use('/api', settings)

export { routes }
