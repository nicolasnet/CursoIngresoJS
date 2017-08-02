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
		importe=prompt("ingrese importe positivo nro: "+contador);
		while(!(importe>0))
		{
			importe=prompt("ingresar importe mayor a 0 `cero´");
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


	console.log("el importe minimo es: "+minimo);
	console.log("el importe maximo es: "+maximo);
	
}

