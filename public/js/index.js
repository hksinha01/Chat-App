let socket = io();

socket.on('connect', ()=>{
    console.log("connected from server")
})

socket.on('disconnect', ()=>{
    console.log("disconnected from sever")
})

socket.on("newMessage",(message)=>{
    console.log("newMessage",message)
})