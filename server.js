var express=require("express");//importamos el servidor de express
var app=express();//ejecutamos el servidor de express
server=require("http").Server(app);//crear servidor con http y pasarle la aplicacion express

server.listen(8080,function(){
  console.log("Server running, on port 8080");
})
