//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");

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

		numero=prompt("ingrese el "+contador+"º numero positivo");
		while(!(numero>=0))
		{
			numero=prompt("ingresar unicamente numeros positivos");
		}
		numero=Number(numero);


		acumuladorNumeros=acumuladorNumeros+numero;


		if(numero%2==0)
		{
			cantidadNumerosPares++;
		}


		if(contador==1)
		{
			minimo=numero;
			maximo=numero;
		}
		else
		{
			if(numero<minimo)
			{
				minimo=numero;
			}

			if(numero>maximo)
			{
				maximo=numero;
			}
		}



		respuesta=prompt("si no desea continuar escriba `no´");
	}

	promedio=acumuladorNumeros/contador;

	document.write("La cantidad de numeros pares es: "+cantidadNumerosPares);
	document.write("</br>El promedio de los numeros es: "+promedio);
	document.write("</br>La suma total de numeros es: "+acumuladorNumeros);
	document.write("</br>El numero minimo es: "+minimo);
	document.write("</br>El numero maximo es: "+maximo);	
}

