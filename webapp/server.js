const express = require('express')
const { exec } = require('child_process')
const app = express()

app.get('/healthz', (req, res) => res.send('ok'))
app.get('/export', (req, res) => {
  const type = req.query.type || 'json'
  exec(`python3 export.py --format ${type}`, (err, stdout) => {
    if (err) {
      res.status(500).send('error')
      return
    }
    res.send(stdout)
  })
})

app.listen(8080)
