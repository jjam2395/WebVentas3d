$(document).ready(function()
{
  $.getJSON('http://localhost:8080/getcarrito', {}, function(productos) {
        console.log("Success");
        //$("#datos").val(JSON.stringify(productos).replace("\"", "").replace("\"", ""));
        var html
        for (var a in productos)
        {
          console.log(productos[a]);

        }
      });
});


/*var html= data.map(function(elem,index)
    {
      return(
        `<div>
         <strong>${elem.author}</strong> <br>
         <em>${elem.text}</em>
         </div>`);
    }).join(" ");


  document.getElementById("messages").innerHTML=html;// insertar el html en el elemento div identificado por messages*/