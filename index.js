const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())
 
app.get('/', function (req, res, next) {
  res.send('Hello world!!!')
})

app.listen('8080', () => {
  console.log('App started!!!');
})
 
