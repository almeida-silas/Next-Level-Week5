import { errorSchema } from './errorSchema'
import { settingsSchema } from './settingsSchema'
import { unprocessableEntitySchema } from './unprocessableEntitySchema'
import { settingsResultSchema } from './settingsResultSchema'

export default {
  settings: settingsSchema,
  settingsResult: settingsResultSchema,
  unprocessableEntity: unprocessableEntitySchema,
  error: errorSchema
}
