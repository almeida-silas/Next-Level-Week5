import request from 'supertest'
import faker from 'faker'

import { createConnection, getConnection } from 'typeorm'

import { Setting } from '../../src/entities/Setting'
import app from '../../src/app'

describe('Settings', () => {
  beforeEach(async () => {
    return await createConnection({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [Setting],
      synchronize: true,
      logging: false
    })
  })

  afterEach(async () => {
    const connection = getConnection()

    return await connection.close()
  })

  it('should be success when create a new settings', async () => {
    const setting = {
      username: faker.internet.userName(),
      chat: true
    }
    const response = await request(app).post('/api/settings').send(setting)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('should be fail when create a new settings', async () => {
    const setting = {
      chat: true
    }
    const response = await request(app).post('/api/settings').send(setting)

    expect(response.status).toBe(422)
  })
})
