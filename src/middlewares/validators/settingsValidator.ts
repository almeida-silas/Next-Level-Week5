import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError'

import { SettingsSchema } from '../../schema/SettingsSchema'

export const settingsValidator = (request: Request, response: Response, next: NextFunction): void => {
  const { error, value } = SettingsSchema.validate(request.body, { abortEarly: false, errors: { stack: false } })

  if (error) {
    const errors = error.details.map((error) => ({
      message: error.message,
      path: error.path
    }))

    console.log(error.details)

    throw new AppError('Request validation failed', 422, errors)
  }

  request.body = value

  next()
}
