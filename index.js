const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.set('view engine', 'pug')
app.use(express.static('./static'));

app.get('/', (req, res) => {
  res.render('about', {page: 'about'})
})

app.get('/resume', (req, res) => {
  res.render('resume', { page: 'resume' })
})

app.listen(PORT)
