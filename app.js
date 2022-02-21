// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const { engine } = require('express-handlebars')
app.engine('handlebars', engine({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('index-A')
})

app.get('/portfolio', (req, res) => {
  res.render('index-P')
})

app.get('/contact', (req, res) => {
  res.render('index-C')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})