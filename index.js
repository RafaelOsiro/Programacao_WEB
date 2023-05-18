const express = require('express')
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({ extended: true }))

const app_port = 8000
app.listen(app_port, function() {
  console.log('Application running on ' + app_port)
})

app.get('/', function (req, res) {
  res.render('index.html')
})

app.post('/submit', function(req, res) {

  const name = req.body['first-name']
  const lastName = req.body['last-name']
  const cpf = req.body.cpf
  const birthday = req.body['birthday']
  const address = req.body['address']
  const uf = req.body.uf
  const zipCode = req.body['zipCode']
  const email = req.body['email']
  const phoneNumber = req.body['phoneNumber']
  const especialidade = req.body['especialidade-medica']
  const appointmentDate = req.body['data-consulta']
  const appointmentHour = req.body['horario-consulta']
  const alergic = req.body['medicamentos-alergicos']
  const information = req.body['inforamcoes-adicionais']

  let emptyFieldException = []
  let message = "não pode ser vazio"

  if (name == '') {
    emptyFieldException.push({empyField: "Nome", message: message})
  }

  if (lastName == '') {
    emptyFieldException.push({empyField: "Sobrenome", message: message})
  }

  if (cpf == '') {
    emptyFieldException.push({empyField: "CPF", message: message})
  }

  if (birthday == '') {
    emptyFieldException.push({empyField: "Data de Aniversário", message: message})
  }

  if (address == '') {
    emptyFieldException.push({empyField: "Endereço", message: message})
  }

  if (uf == '') {
    emptyFieldException.push({empyField: "UF", message: message})
  }

  if (zipCode == '') {
    emptyFieldException.push({empyField: "CEP", message: message})
  }

  if (email == '') {
    emptyFieldException.push({empyField: "E-mail", message: message})
  }

  if (phoneNumber == '') {
    emptyFieldException.push({empyField: "Número de telefone", message: message})
  }

  if (especialidade == '') {
    emptyFieldException.push({empyField: "Especialidade", message: message})
  }

  if (appointmentDate == '') {
    emptyFieldException.push({empyField: "Data da Consulta", message: message})
  }

  if (appointmentHour == '') {
    emptyFieldException.push({empyField: "Horário da Consulta", message: message})
  }

  if (emptyFieldException.length == 0) {
    res.render('results.html', {
      name: name + " " + lastName,
      cpf: cpf,
      birthday: birthday,
      address: address,
      uf: uf,
      zipCode: zipCode,
      email: email,
      phoneNumber: phoneNumber,
      especialidade: especialidade,
      appointmentDate: appointmentDate,
      appointmentHour: appointmentHour,
      alergic: alergic,
      information: information
    })
  } else {
    res.render("index.html", {
      emptyFieldException
    })
  }
})