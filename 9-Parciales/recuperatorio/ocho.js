function Mostrar()
{
	var numero;
	var respuesta="si";
	var contador=0;
	var cantidadNumerosPares=0;
	var acumuladorNumeros=0;
	var promedio;
	var minimo;
	var maximo;


	while(respuesta!="no")
	{
		contador++;

		numero=prompt("ingresar el "+contador+ "° numero positivo");
		while(!(numero>=0))
		{
			numero=prompt("ingrese unicamente numeros positivos");
		}
		numero=Number(numero);


		acumuladorNumeros=acumuladorNumeros+numero;


		if(numero%2==0)
		{
			cantidadNumerosPares++;
		}


		if(contador==1)
		{
			minimo=numero
			maximo=numero
		}
		else
		{
			if(numero<minimo)
			{
				minimo=numero;
			}

			if(numero>maximo)
			{
				maximo=numero
			}
		}


		respuesta=prompt("si no desea continuar escriba 'no'");
	}

	promedio=acumuladorNumeros/contador;

	document.write("cantidad numeros pares: "+cantidadNumerosPares);
	document.write("</br>promedio de todos los numeros "+promedio);
	document.write("</br>suma total: "+acumuladorNumeros);
	document.write("</br>numero maximo: "+maximo);
	document.write("</br>numero minimo: "+minimo);
}
