const express = require('express')
const app = express()
const port = 80  // 기본포트 = http:80 & https:443
const fs = require('fs')
app.get('/yourname', (req, res) => {
  const f = JSON.parse(fs.readFileSync("apiData.json", {encoding: "utf-8"
  }))
  const data = {
    "what is your name?": f.name
  }
  res.send(data)
})

app.get('/yourjob', (req,res) => {
  const f = JSON.parse(fs.readFileSync("apiData.json", {encoding: "utf-8"
  }))
  const data = {
    "what do you do?": f.job
  }
  res.send(data)
})

app.get('/yourcountry', (req, res) => {
  const f = JSON.parse(fs.readFileSync("apiData.json", {encoding: "utf-8"
  }))
  const data = {
    "where do you live?": f.country
  }
  res.send(data)
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})


