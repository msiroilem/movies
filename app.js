const express = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
