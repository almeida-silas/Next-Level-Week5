function isProduction () {
  const mode = process.env.NODE_ENV
  return mode !== 'dev'
}

module.exports = {
  type: process.env.DB_DIALECT,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: false,
  entities: [isProduction() ? 'dist/entities/*.js' : 'src/entities/*.ts'],
  migrations: [isProduction() ? 'dist/database/migrations/*.js' : 'src/database/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/database/migrations'
  }
}
