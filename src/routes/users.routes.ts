import { Router } from 'express'

import UsersController from '../controllers/UsersController'
import { usersValidator } from '../middlewares/validators/usersValidator'

const router = Router()

router.post('/users', usersValidator, UsersController.create)
router.get('/users/:email', UsersController.show)

export default router
