function agregar(id)
{
	$.get('http://localhost:8080/setcarrito',{id:id});
}

