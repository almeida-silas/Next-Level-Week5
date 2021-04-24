import { Request, Response } from 'express'

import SettingsService from '../services/SettingsService'

class SettingsController {
  async create (request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body

    try {
      const settings = await SettingsService.create({ username, chat })

      return response.status(201).json(settings)
    } catch (error) {
      if (error.message && error.message === 'User already exists') {
        return response.status(400).json(error)
      }
    }
  }
}

export default new SettingsController()
