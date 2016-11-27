function agregar(id)
{
	console.log(id);
	$.get('http://localhost:8080/setcarrito',{id:id});
}

