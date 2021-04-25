import { Router } from 'express'
import MessagesController from '../controllers/MessagesController'

// import { messagesValidator } from '../middlewares/validators/MessagesValidator'

const router = Router()

router.get('/messages/:id', MessagesController.listByUser)
router.post('/messages', MessagesController.create)

export default router
