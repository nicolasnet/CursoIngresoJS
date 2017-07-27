//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("ingresar 1er numero");
	numeroUno=Number(numeroUno);

	numeroDos=prompt("ingresar 2do numero");
	numeroDos=Number(numeroDos);

	if(numeroUno==numeroDos)
	{
		document.write("son iguales, multiplicacion= "+(numeroUno*numeroDos));
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			document.write("el 1ro es mayor, resta= "+(numeroUno-numeroDos));
		}
		else
		{
			document.write("el 2do es mayor, suma= "+(numeroUno+numeroDos));
		}
	}
}

