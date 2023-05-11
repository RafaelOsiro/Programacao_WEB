const express = require('express')
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('', function(req, res) {
  res.render('forms.html')
})

app.post('/submit-forms', function(req, res) {
  const name = req.body['first-name']
  const cpf = req.body.cpf
  const birthday = req.body['data-nascimento']

  res.render('results.html', {
    name: name,
    cpf: cpf,
    birthday: birthday
  })
})

const app_port = 8000
app.listen(app_port, function() {
  console.log('Application running on ' + app_port)
})