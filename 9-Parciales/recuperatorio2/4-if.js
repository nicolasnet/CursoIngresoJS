//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");

	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;
	var suma;


	numeroUno=prompt("ingrese el 1er numero");
	numeroUno=Number(numeroUno);

	numeroDos=prompt("ingrese el 2do numero");
	numeroDos=Number(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos;
		document.write("los numeros son iguales, multiplicacion= "+multiplicacion);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno - numeroDos;
			document.write("el 1ro es mayor, resta= "+ resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("el 2do es mayor, suma= "+suma);
		}
	}
	
}

