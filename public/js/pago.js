$(document).ready(function() {
	console.log("elemento listo");
	$("#pagar").click(function()
	{
			var datos={
				numero:$("#numero-pago").val(),
				nombre:$("#nombre-datos").val(),
				vence:$("#vencimiento-pago").val()
			};

			$.get('http://192.168.43.67:8080/setTarjeta',datos,function(datos,status)
			{
				alert(status);
			});	
	});
});