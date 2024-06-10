const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
//const { URLSearchParams } = require('url')
const db = require('./connection')
const response = require('./response')


app.use(bodyParser.json())


app.get('/', (req, res) => {
    const sql="SELECT * FROM user"
  db.query( sql , (error, result) => {
   response( result, "data semua user", res)
 
  })

})

app.get('/user/:id', (req, res) => {
    const sql=`SELECT * FROM user WHERE id = ${req.query.id}`
  db.query( sql , (error, result) => {
    if(error) console.log("error")
   response( result, "pencarian data user menggunakan id", res)
 
  })

})


app.post('/user', (req, res) => {
  const{id, username, password, nama}=req.body
  console.log(req.body)
  const sql=`INSERT INTO user (id, username, password, nama) VALUES (${id},'${username}','${password}','${nama}')`
db.query( sql , (error, result) => {
  if(error) console.log("error")
 response(result, "menambahkan data user", res)

})

})

app.put('/user', (req, res) => {
  const{id, username, password, nama}=req.body
  console.log(req.body)
  const sql=`UPDATE user SET id = ${id}, username = '${username}', password = '${password}', nama = '${nama}'
  WHERE id = ${id}`
db.query( sql , (error, result) => {
  if(error) console.log("error")
 response(result, "edit data user", res)

})

})

app.delete('/user', (req, res) => {
  const{id}=req.body
  console.log(req.body)
  const sql=`DELETE FROM user WHERE id = ${id}`
db.query( sql , (error, result) => {
  if(error) response(result, "error", res)
 
    response(result, "HAPUS data user", res)

})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})