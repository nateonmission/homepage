const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()
app.locals.moment = require('moment')

app.set('view engine', 'pug')
app.use(express.static('./static'))

app.get('/', (req, res) => {
  res.render('about', { page: 'about' })
})

app.get('/resume', (req, res) => {
  res.render('resume', { page: 'resume' })
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { page: 'portfolio' })
})

app.listen(PORT)
