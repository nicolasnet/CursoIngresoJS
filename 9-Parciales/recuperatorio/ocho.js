function Mostrar()
{
	var numero;
	var respuesta="si";
	var contador=0;
	var cantidadNumerosPares=0;
	var acumuludorNumero=0;
	var promedio;
	var maximo;
	var minimo;



	while(respuesta!="no")
	{
		contador++

		numero=prompt("ingresar el "+contador+"º numero positivo");
		while(numero<0)
		{
			numero=prompt("unicamente ingresar numeros positivos");
		}
		numero=Number(numero);


		if(numero%2==0)
		{
			cantidadNumerosPares++
		}



		acumuludorNumero=acumuludorNumero+numero;



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

		respuesta=prompt("si no desea continuar ingrese `no´");
	}


	document.write("cantidad de numeros pares= "+cantidadNumerosPares);

	promedio=acumuludorNumero/contador;
	document.write("</br>promedio de numeros= "+promedio);

	document.write("</br>suma total de numeros= "+acumuludorNumero);

	document.write("</br>numero maximo= "+ maximo);
	document.write("</br>numero minimo= "+ minimo);
}
