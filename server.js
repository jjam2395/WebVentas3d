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
var totalcompra;
var datosPersonales;

app.get("/",function(req,res){
	res.render("index"); 
});

app.get("/catalogo",function(req,res){
	res.render("catalogo"); 
});

app.get("/setcarrito",function(req,res){
	//req.session.id=req.query.id;
	productos.push({id:req.query.id})//agregamos el producto al arreglo
	console.log(req.query);
});

app.get("/getcarrito",function(req,res){ //enviar el arreglo de productos{
  	res.header("Access-Control-Allow-Origin","*");
  	res.send(productos);
});

app.get("/carrito",function(req,res){
	res.render("carrito");
});

app.get("/datos",function(req,res)
{
	res.render("datos"); 
});

app.get("/setTotal",function(req,res)
{
	totalcompra=req.query.total;
}

app.get("/pago",function(req,res)
{
	res.render("pago"); 
});

server.listen(8080,function(){
  console.log("Server running on port 8080");
})


