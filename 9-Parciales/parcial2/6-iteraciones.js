//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");

	var importe;
	var cantidad=7;
	var contador=0;
	var minimo;
	var maximo;



	while(contador<cantidad)
	{
		contador++;

		importe=prompt("ingresar importe del dia: "+contador);
		while(importe<0)
		{
			importe=prompt("ingresar importe mayor a cero");
		}
		importe=Number(importe);

		if(contador==1)
		{
			minimo=importe;
			maximo=importe;
		}
		else
		{
			if(importe<minimo)
			{
				minimo=importe;
			}

			if(importe>maximo)
			{
				maximo=importe;
			}
		}
	}


	alert("el mayor importe fue: "+maximo+"\nel menor importe fue: "+minimo);	
}


