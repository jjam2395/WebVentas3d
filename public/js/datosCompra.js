$(document).ready(function()
{
	var productos=[
  {id:"2", nombre:"chikorita", descripcion:"Modelo a escala de chikorita",precio:"60",direccion:"estatico/images/productos/chicorita.jpg"},
  {id:"1",nombre:"Case para Iphone6", descripcion:"Case estilo Halo",precio:"150",direccion:"estatico/images/productos/caseiphone.jpg"},
  {id:"3",nombre:"Case raspberry",descripcion:"Protector para raspberry 3b",precio:"120",direccion:"estatico/images/productos/caseraspberry.png"},
  {id:"4",nombre:"Reloj", descripcion:"reloj de pared personalizable",precio:"100",direccion:"estatico/images/productos/prod1.png"},
  {id:"5",nombre:"Soporte iphone",descripcion:"base para iphone",precio:"110",direccion:"estatico/images/productos/standiphone.jpg"},];

  Array.prototype.indexOfOld=Array.prototype.indexOf

    Array.prototype.indexOf=function(e,fn){
      if(!fn){return this.indexOfOld(e)}
      else{ 
       if(typeof fn ==='string'){var att=fn;fn=function(e){return e[att];}}
        return this.map(fn).indexOfOld(e);
      }
    };

	$.getJSON('http://localhost:8080/datosCompra',{},function(datos)
	{
		console.log("Success");

		var datosPersonales=`
			 <div class="col-xs-12 text-xs-center"><h3> Información de Envio</h3></div>
	          <hr class="my-2">
	          <p class="lead">Nombre: ${datos[0].nombre}</p>
	          <hr >
	          <p class="lead">Calle: ${datos[0].calle}</p>
	          <hr >
	          <p class="lead">Colonia: ${datos[0].colonia}</p>
	          <hr >
	          <p class="lead">Codigo Postal: ${datos[0].cp}</p>
	          <hr >
	          <p class="lead">Municipio: ${datos[0].ciudad}</p>
	          <hr >
	          <p class="lead">Estado: ${datos[0].edo}</p>
				`;

		var total=`
			<h4 class="mostrardatos">Total: $${datos[2]}</h4>
			`;

		document.getElementById("datosEnvio").innerHTML=datosPersonales;
		document.getElementById("total").innerHTML=total;
	});

	$.getJSON('http://localhost:8080/getcarrito',{},function(prod)
	{
		var html=``;
        for (var a=0; a<prod.length;a++)
        {
          var indice=productos.indexOf(prod[a].id,'id');
          html+=`
          		<div class="producto-carrito card">
      			<div class="row">
                  <div class="col-xs-12 col-md-2">
                    <img class="img-responsive" width=100%  src="${productos[indice].direccion}">
                  </div>
                  <div class="col-xs-12 col-md-5 ">
                    <p>
                     ${productos[indice].nombre}
                    </p>
                    </div>
                      <div class="col-xs-12 col-md-5 text-xs-center flex-xs-middle">
                        <div class=" row flex-items-xs-around flex-items-xs-center">
                          <div class="col-xs-6 col-md-6 text-xs-right">
                            <p class="">Precio: $${productos[indice].precio}
                            </p>
                          </div>
                          <div class="col-xs-4 col-md-3 "> 1 pza</div>
                        </div>
                      </div>
                </div>
                </div>`;
        }
        document.getElementById("productos").innerHTML=html;
	});
});