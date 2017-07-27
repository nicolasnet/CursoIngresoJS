//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");


	var precio;
	var importe;



	precio=prompt("ingrese el precio");
	precio=Number(precio);

	importe=precio*1.21;

	document.getElementById('importe').value=importe;
	
}

