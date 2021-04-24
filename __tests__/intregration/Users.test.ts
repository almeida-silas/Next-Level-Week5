import request from 'supertest'
import faker from 'faker'

import { createConnection, getConnection } from 'typeorm'

import { User } from '../../src/entities/User'
import app from '../../src/app'

describe('Settings', () => {
  beforeEach(async () => {
    return await createConnection({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [User],
      synchronize: true,
      logging: false
    })
  })

  afterEach(async () => {
    await getConnection().close()
  })

  it('should be success when create a new users', async () => {
    const response = await request(app).post('/api/users').send({
      email: faker.internet.email()
    })

    expect(response.status).toBe(201)
  })

  it('should be fail when create a new users', async () => {
    const email = faker.internet.email()

    await request(app).post('/api/users').send({
      email
    })

    const response = await request(app).post('/api/users').send({
      email
    })

    expect(response.status).toBe(400)
  })

  it('should be fail when create a new users without email', async () => {
    const response = await request(app).post('/api/users')

    expect(response.status).toBe(422)
  })
})
