export const settingsSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      default: 'youCan'
    },
    chat: {
      type: 'boolean'
    }
  },
  required: ['username', 'chat']
}
