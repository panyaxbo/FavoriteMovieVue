const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const requestify = require('requestify')
const environment = require('./environment/env')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.status(200).json([{
    title: 'Hello World!!',
    description: 'Hi there! How are you!'
  }])
})

app.get('/movies', (req, res) => {
  // requestify.get('https://api.themoviedb.org/4/list/1?api_key=8f6364fbde97b98b2dfbe9ffab896f0e')
  requestify.get(`${environment.MOVIE_API_URL}?apikey=${config.MOVIEDB_API_KEY}`)
    .then(function (movies) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      console.log(movies.getBody())
      res.status(200).json(movies.getBody())
    }
    )
})

app.listen(process.env.PORT || 3000, () => {
  console.log('hello world')
})
