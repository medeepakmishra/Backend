require ('dotenv').config();

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res)=>{
    res.send("you can loging using this url")

})


app.get( '/yt',(req,res)=>{
    res.send("hi evertone")
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
d 