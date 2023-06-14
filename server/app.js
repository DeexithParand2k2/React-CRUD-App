const express = require('express')
const app = express()
const port = 5000
const db = require('./sqlConnection')
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cred',(req,res)=>{
  db.query('SELECT * from credentials', (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
})

app.get('/checkconnection', (req, res) => {
    db.ping((err) => {
        if(err) return res.status(500).send("MySQL Server is Down");
          
        res.send("MySQL Server is Active");
    })
})

app.listen(port, () => {
  console.log(`blue lock anime running at ${port}`)
})
