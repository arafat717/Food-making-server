const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')

app.use(
  cors({
    origin: ["https://food-recipe-clint-site.web.app"],
    methods: "GET",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
const allfoods = require("./data.json")

app.get('/alldata', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','https://food-recipe-clint-site.web.app')
    res.setHeader('no-cors',true)
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