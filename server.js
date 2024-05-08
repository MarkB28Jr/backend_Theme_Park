require("dotenv").config()
require("./config/db.connection")

const { PORT } = process.env
const express = require("express")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const parkRouter = require('./routes/parks')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
  origin:"*"
}))
app.use(morgan('dev'))
app.use('/park', parkRouter)

app.listen(PORT, () => console.log(`Connected to ${PORT}!`))