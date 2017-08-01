function Mostrar()
{
	var numeroPositivo;
	var respuesta="si";
	var contador=0;
	var acumuladorNumeros=0;
	var cantidadNumerosPares=0;
	var promedio;
	var maximo;
	var minimo;


	while(respuesta!="no")
	{
		contador++;

		numeroPositivo=prompt("ingresar numero positivo nro: "+contador+" º");
		//numeroPositivo=parseInt(numeroPositivo);
		while(numeroPositivo<0)
		{
			numeroPositivo=prompt("ingresar numeros unicamente positivos");
			//numeroPositivo=parseInt(numeroPositivo);
		}
		numeroPositivo=Number(numeroPositivo);


			//numeros pares
		if(numeroPositivo%2==0)	
		{
			cantidadNumerosPares++;
		}


			//acumulador para sacar promedios y suma total
		acumuladorNumeros=acumuladorNumeros+numeroPositivo;


			//maximo y minimo
		if(contador==1)
		{
			minimo=numeroPositivo;
			maximo=numeroPositivo;
		}
		else
		{
			if(numeroPositivo<minimo)
			{
				minimo=numeroPositivo;
			}


			if(numeroPositivo>maximo)
			{
				maximo=numeroPositivo;
			}
		}









		respuesta=prompt("si no desea seguir, escribir `no´");
	}



	document.write("la cantidad de numeros pares es: "+cantidadNumerosPares);

	promedio=acumuladorNumeros/contador;
	document.write("</br>el promedio es: "+promedio);

	document.write("</br>suma total de numeros= "+acumuladorNumeros);

	document.write("</br>el numero maximo es: "+maximo);
	document.write("</br>el numero minimo es: "+minimo);
}
