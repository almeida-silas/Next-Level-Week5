import express, { Express } from 'express'
import path from 'path'
import ejs from 'ejs'

export const setupViews = (app: Express): void => {
  app.use(express.static(path.join(__dirname, '..', '..', 'public')))
  app.set('views', path.join(__dirname, '..', '..', 'public'))
  app.engine('html', ejs.renderFile)
  app.set('view engine', 'html')
}
