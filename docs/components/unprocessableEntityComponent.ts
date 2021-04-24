export const unprocessableEntityComponent = {
  description: 'Unprocessable Entity',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/unprocessableEntity'
      }
    }
  }
}
