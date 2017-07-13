function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	/*while(true)
	{
		console.log("hola");
		break;
		console.log("chau");
	}*/
	/*var salir=0;

	while(salir!="si")
	{
		console.log("hola");
		salir="si";
		console.log("chau");
	}
*/
	
	while(contador<5)
	{
		contador=contador+1;
		numero=prompt("ingrese el "+contador+"º numero:");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
	}




	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN