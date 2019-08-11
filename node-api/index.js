const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const parameters = require('./parameters');
const api = require('./api');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.use('/api',api);

app.listen(parameters.port, () => {
  console.log(`App running on port ${parameters.port}.`)
})