import { Router } from 'express'
import SettingsController from '../controllers/SettingsController'

import { settingsValidator } from '../middlewares/validators/settingsValidator'

const router = Router()

router.post('/settings', settingsValidator, SettingsController.create)

export default router
