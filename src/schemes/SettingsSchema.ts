import Joi from 'joi'

const SettingsSchema = Joi.object().keys({
  username: Joi.string().required(),
  chat: Joi.boolean().required().default(false)
})

export { SettingsSchema }
