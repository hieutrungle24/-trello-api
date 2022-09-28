import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8088

app.get('/', (req, res) => {
  res.end('<h1>Hola world</h1>')
})
app.listen(port, hostname, () => {
  console.log(`Server is running at ${hostname}:${port}/`)
})