const path = require("path")
const http = require("http")
const express = require("express")
const socketIO = require("socket.io")

const publicPath = path.join(__dirname,"/../public")
let app = express()
const port = process.env.PORT|| 3000
let server = http.createServer(app)
let io = socketIO(server)

app.use(express.static(publicPath))

io.on("connection",(socket)=>{
    console.log("A new user just connected")

    socket.on('disconnect', ()=>{
        console.log("User was disconnected")
    })
})



server.listen(port, ()=>{
    console.log(`Server id up on port ${port}`)
})