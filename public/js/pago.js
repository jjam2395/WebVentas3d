$(document).ready(function() {
	console.log("elemento listo");
	$("#pagar").click(function()
	{
			var datos={
				numero:$("#numero-pago").val(),
				nombre:$("#nombre-datos").val(),
				vence:$("#vencimiento-pago").val()
			};

			$.get('http://localhost:8080/setTarjeta',datos,function(datos,status)
			{
				alert(status);
			});	
	});
});