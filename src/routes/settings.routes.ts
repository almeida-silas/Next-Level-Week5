import { Router } from 'express'
import { settingsValidator } from '../validators/settingsValidators'
import SettingsController from '../controllers/SettingsController'

const router = Router()

router.post('/settings', settingsValidator, SettingsController.create)

export default router
