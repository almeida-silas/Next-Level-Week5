import { Router } from 'express'

import settings from './settings.routes'
import users from './users.routes'
import messages from './messages.routes'

const routes = Router()

routes.use('/api', settings)
routes.use('/api', users)
routes.use('/api', messages)
routes.use('/pages/client', (request, response) => {
  return response.render('html/client.html')
})

export { routes }
