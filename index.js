const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
const allfoods = require("./data.json")

app.get('/alldata', (req, res) => {
    res.send(allfoods)
  })
app.get('/alldata/:id', (req, res) => {
    const id = req.params.id;
    const selectednews = allfoods.find(n => n.id=== id)
    res.send(selectednews)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })