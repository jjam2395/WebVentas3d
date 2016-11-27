var express=require("express");//importamos el servidor de express
var app=express();//ejecutamos el servidor de express
var cookieSession=require("cookie-session");
server=require("http").Server(app);//crear servidor con http y pasarle la aplicacion express

app.set("view engine","ejs");
app.use("/estatico",express.static('public'));
app.use(cookieSession(
{
       name: "session",
       keys: ["llave1","llave2"]
}));


app.get("/",function(req,res)
{
	res.render("index"); 
});

app.get("/catalogo",function(req,res)
{
	res.render("catalogo"); 
});

app.get("/setcarrito",function(req,res)
{
	console.log(req.query.id);
});


server.listen(8080,function(){
  console.log("Server running on port 8080");
})


