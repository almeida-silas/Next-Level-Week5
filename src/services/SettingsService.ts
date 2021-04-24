import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../repositories/SettingsRepository'
import { Setting } from '../entities/Setting'
import AppError from '../errors/AppError'

interface ISettingsCreate {
  username: string
  chat: boolean
}

class SettingsService {
  async create ({ username, chat }: ISettingsCreate): Promise<Setting> {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const userAlreadyExists = await settingsRepository.findOne({ username })

    if (userAlreadyExists) {
      throw new AppError('User already exists', 400, ['username'])
    }

    const settings = settingsRepository.create({
      username,
      chat
    })

    await settingsRepository.save(settings)

    return settings
  }
}

export default new SettingsService()
