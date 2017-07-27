//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");
	
	var base;
	var perimetro;


	base=document.getElementById('lado').value;
	base=Number(base);

	perimetro=base*3;

	alert("el perimetro es: "+perimetro);
}

