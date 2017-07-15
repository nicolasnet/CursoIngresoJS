function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;

		}
		else
		{
			if(numero>maximo)
			{	
				maximo=numero;
			}

			if(numero<minimo)
			{
				minimo=numero;
			}
		}






		respuesta=prompt("escribir no en caso de no seguir");
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo'),value=minimo;



}//FIN DE LA FUNCIÓN