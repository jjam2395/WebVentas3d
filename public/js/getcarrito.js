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

  // var indice=productos.indexOf(2,'id');
  // console.log(indice);


  $.getJSON('http://localhost:8080/getcarrito', {}, function(prod) {//solicitar el id de los productos elegidos
        console.log("Success");

        //$("#datos").val(JSON.stringify(productos).replace("\"", "").replace("\"", ""));
        var total=0;
        var html=``;
        for (var a=0; a<prod.length;a++)
        {
          var indice=productos.indexOf(prod[a].id,'id');
          console.log(productos[indice].nombre);
          html+=`<div class="col-xs-12">
                  <div class="producto-carrito card">
                    <div class="row">
                      <div class="col-xs-12 col-md-2">
                        <img class="img-responsive" width=100%  src="${productos[indice].direccion}">
                      </div>
                      <div class="col-xs-12 col-md-5 ">
                        <h4 class="product-name titulo-producto">
                          ${productos[indice].nombre}
                        </h4>
                        <p class="descripcion-producto">
                          ${productos[indice].descripcion}
                        </p>
                        <p class="descripcion-producto">
                          <a class="precio" href="#">Eliminar</a>
                        </p>
                        </div>
                          <div class="col-xs-12 col-md-5 text-xs-center flex-xs-middle">
                            <div class="input-group row flex-items-xs-middle flex-items-xs-center">
                              <div class="col-xs-6 col-md-6 text-xs-right">
                                <h5 class="precio ">$${productos[indice].precio}
                                  <span class="text-muted">x</span>
                                </h5>
                              </div>
                              <div class="col-xs-4 col-md-4 text-xs-left">
                                <input type="text" class="form-control " value="1">
                              </div>
                              <div class="col-xs-2  col-md-2 "><label>pza</label></div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>`;
                total+=parseInt(productos[indice].precio);
        }
        html+=`<div class="col-xs-12 ">
                <div class="producto-carrito card">
                  <div class="row flex-items-xs-right">
                    <div class="col-xs-12 col-md-5  text-xs-right">
                      <p class="precio">
                        Total: $${total}
                      </p>
                      <a  href="datos" class="btn btn-primary form-text">Comprar Ahora</a>
                    </div>
                  </div>
                </div>
              </div>`;

        document.getElementById("productos").innerHTML=html;
        $.get('http://localhost:8080/setTotal',{total:total});
      });
});


