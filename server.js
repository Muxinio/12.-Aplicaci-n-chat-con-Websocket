const express = require('express');
const app = express();
const http = require("http")
const server = http.createServer(app)



const {Server} = require ('socket.io')
const io = new Server(server)

io.on('connection',(socket)=>{
    //aviso de desconexion y conexion de usuarios
   console.log("Usuario Conectado")
     socket.on('disconnect',()=>{
     console.log('Un usuario se ha desconectado')
    })
   //muestra el mensaje en consola 
socket.on('chat',(msg) => {
      console.log('Mensaje:'+msg)
   })
 //muestra el mensaje en la pagina
socket.on('chat', (msg)=>{
     io.emit('chat',msg)
   })
 })

app.set('view engine','ejs','ejs-lint','html');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',require('./router'));
app.get("/chat.html", function(request, response) {
  response.sendFile(__dirname + "/chat.html");
});
//socket io nesecita si o si un server.liten
server.listen(8080,()=>{
  console.log('Servidor On en el puerto 8080');
})

module.exports = Server