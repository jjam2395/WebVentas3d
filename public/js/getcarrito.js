$(document).ready(function()
{
  $.getJSON('http://localhost:8080/getcarrito', {}, function(productos) {
        console.log("Success");
        //$("#datos").val(JSON.stringify(productos).replace("\"", "").replace("\"", ""));
        for (var a in productos)
        {
          console.log(productos[a].id);
          
        }
      });
});