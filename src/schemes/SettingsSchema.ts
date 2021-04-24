import Joi from 'joi'

const SettingsSchema = Joi.object().keys({
  username: Joi.string().required(),
  chat: Joi.boolean().optional().default(false)
})

export { SettingsSchema }
