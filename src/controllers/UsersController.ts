import { Request, Response } from 'express'

import UsersService from '../services/UsersService'

class UsersController {
  async show (request: Request, response: Response): Promise<Response> {
    const { email } = request.params

    try {
      const user = await UsersService.show(email)

      return response.status(200).json(user)
    } catch (error) {
      if (error.message && error.message === 'User not found') {
        return response.status(404).json(error)
      }
      throw new Error()
    }
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    try {
      const user = await UsersService.create(email)

      return response.status(201).json(user)
    } catch (error) {
      if (error.message && error.message === 'User already exists') {
        return response.status(400).json(error)
      }
    }
  }
}

export default new UsersController()
