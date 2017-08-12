import express from 'express'
import bodyParser from 'body-parser'
import R from 'ramda'
import apiMockup from './apiMockup.json'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

Object.entries(apiMockup)
.map(([key, value]) => {
  const [method, apiPath] = key.split(' ')
  app[method.toLowerCase()](apiPath, (req, res) => res.status(200).send(value))
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  console.log(`
🚀  Server Start 🚀
🚀  Server runs on http://localhost:${port}`)
})
