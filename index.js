require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8081;
const TIMEZONE = process.env.TIMEZONE;
 
app.use(cors())
 
app.get('/', function (req, res, next) {
  res.json('Hello world!!!')
})

app.get('/timezone', function (req, res, next) {
  res.json(TIMEZONE)
})

app.listen(PORT, () => {
  console.log('App started!!!');
})
 
module.exports = app
