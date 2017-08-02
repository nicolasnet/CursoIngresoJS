//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");

	var numero;
	var contador=0;
	var respuesta="si";
	var cantidadNumerosPares=0;
	var acumuladorNumeros=0;
	var promedio;
	var maximo;
	var minimo;


	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese el "+contador+"º numero positivo");
		while(numero<0)
		{
			numero=prompt("ingresar numero mayor a 0 `cero´");
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

		respuesta=prompt("si no desea continuar escribir `no´");
	}

	promedio=acumuladorNumeros/contador;

	document.write("cantidad de numeros pares: "+cantidadNumerosPares);
	document.write("</br>promedio de numeros: "+promedio);
	document.write("</br>suma total de numeros: "+acumuladorNumeros);
	document.write("</br>numero maximo: "+maximo);
	document.write("</br>numero minimo: "+minimo);	
}

