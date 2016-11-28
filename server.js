var express=require("express");//importamos el servidor de express
var app=express();//ejecutamos el servidor de express
//var cookieSession=require("cookie-session");
server=require("http").Server(app);//crear servidor con http y pasarle la aplicacion express

app.set("view engine","ejs");
app.use("/estatico",express.static('public'));
/*app.use(cookieSession(
{
       name: "session",
       keys: ["llave1","llave2"]
}));*/

var productos=[];

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
	//req.session.id=req.query.id;
	productos.push({id:req.query.id,cantidad:0})//agregamos el producto al arreglo
	console.log(req.query);
});

app.get("/getcarrito",function(req,res)
{
  	res.header("Access-Control-Allow-Origin","*");
  	res.send(productos);
});

app.get("/carrito",function(req,res)
{
	res.render("carrito");
});

app.get("/datos",function(req,res)
{
	res.render("datos"); 
});

server.listen(8080,function(){
  console.log("Server running on port 8080");
})


