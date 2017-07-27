//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	
	var precio;
	var importe;
	var iva=1.21,

	precio=prompt("ingrese el precio");
	precio=Number(precio);

	importe=precio*iva;

	//alert("el importe final es: "+importe);
	document.getElementById('importe').value=importe;	
}

