const express=require('express');
const app=express();
const http=require('http');
const {addUser,removeUser,getUser,getUsersInRoom} =require('./users.js/users')
const cors=require('cors');
const {Server}=require('socket.io');
const router=require('./router');
app.use(cors());
// app.use(router);
const port =process.env.PORT|| 5000
//heroku
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
}
const server=http.createServer(app);

const io=new Server(server,{
  cors:{
      origin:"http://localhost:3000",
      methods:["GET","POST"]
  }
})

io.on('connection',(socket)=>{
   

    socket.on("join",({name,room},callback)=>{
      const {error,user}=addUser({id:socket.id,name,room});
      
        if(error)
        return callback(error);

socket.emit('message',{user:'admin',text:`${user.name} ,welcome to the room ${user.room}`})
socket.broadcast.to(user.room).emit('message',{user:"admin",text:`${user.name} has joined`})
        socket.join(user.room);
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
        callback();
    })
      socket.on('sendMessage',(message,date,callback)=>{
          const user=getUser(socket.id);

          io.to(user.room).emit('message',{user:user.name,text:message,date:date});
          io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});
          callback();
      })

    socket.on("disconnect",()=>{
     const user=removeUser(socket.id);
         
     if(user){
       io.to(user.room).emit('message',{user:"admin",text:`${user.name} has left the chat`})
       io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
     }
    })
})




server.listen(port,()=>{
  console.log("server running");
})