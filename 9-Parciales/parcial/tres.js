function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	perimetro=2*(largo+ancho);
	alambre=perimetro*3;

	alert("metros de alambre necesario: "+alambre);



}
