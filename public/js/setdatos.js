$(document).ready(function() {
	console.log("elemento listo");
	$("#comprar").click(function()
	{
		console.log($("#nombre-datos").val());
		var datos={
			nombre:$("#nombre-datos").val(),
			telefono:$("#telefono-datos").val(),
			calle:$("#calle-datos").val(),
			colonia:$("#colonia-datos").val(),
			cp:$("#cp-datos").val(),
			edo:$("#edo-datos").val(),
			ciudad:$("#ciudad-datos").val(),
			email:$("#email-datos").val(),
			comentario:$("#comentario-datos").val()
			};

		$.get('http://localhost:8080/setDatos',datos);
		window.location.href = "http://localhost:8080/pago";
	});
});