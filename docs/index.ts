import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Next Level Week - API',
    description: 'Next Level Week 5 #NeverStopLearning',
    version: '1.0.0'
  },
  contact: {
    name: 'Silas Almeida',
    email: 'silas.sena@toodoo.com.br',
    url: 'https://www.linkedin.com/in/silas-sena'
  },
  externalDocs: {
    description: 'Repository Link',
    url: 'https://github.com/s1lasjee/Next-Level-Week5'
  },
  servers: [{
    url: '/api',
    description: 'Main Route'
  }],
  paths,
  schemas,
  components
}
