//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	
	
	var ancho;
	var largo;
	var perimetro;
	var alambreNecesario;


	ancho=document.getElementById('ancho').value;
	ancho=Number(ancho);

	largo=document.getElementById('largo').value;
	largo=Number(largo);

	perimetro=2*(ancho+largo);

	alambreNecesario=perimetro*6;

	alert("el alambre necesario es: "+alambreNecesario+" metros");
}

