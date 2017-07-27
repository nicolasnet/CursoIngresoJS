function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;
	var suma;

	numeroUno=prompt("ingresar 1er numero");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingresar 2do numero");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos;
		alert("los numeros son iguales, multiplicacion= "+multiplicacion);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno - numeroDos;
			alert("el 1er numero es mayor, resta= "+resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("el 2do numero es mayor, suma= "+suma);

		}
	}



}
