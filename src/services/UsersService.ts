import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '../repositories/UsersRepository'
import { User } from '../entities/User'

import AppError from '../errors/AppError'

class UsersService {
  async show (email: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({ email })

    if (user) {
      return user
    }

    throw new AppError('User not found', 404, ['email'])
  }

  async create (email: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const usersAlreadyExists = await usersRepository.findOne({ email })

    if (usersAlreadyExists) {
      throw new AppError('User already exists', 400, ['email'])
    }

    const user = usersRepository.create({ email })
    await usersRepository.save(user)

    return user
  }
}

export default new UsersService()
