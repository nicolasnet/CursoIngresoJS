function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	//while(numero<0 || numero>9) esta opcion me resulta mas clara, pero las que siguen tambien funcionan
	//while(!(numero>=0 && numero<10))
	while(!(numero> -1 && numero<10))	
	{
		alert("incorrecto, ingresar numero del 0 al 9 inclusive");
		var numero = prompt("ingrese un número entre 0 y 10.");
	}

	alert("correcto!!");


}//FIN DE LA FUNCIÓN