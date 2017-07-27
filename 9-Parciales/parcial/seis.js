function Mostrar()
{
	var importe;
	var contador=1;
	var maximo;
	var minimo;


	while(contador<25)
	{
		
		importe=prompt("ingresar el "+contador+"º importe");
		importe=Number(importe);

		while(importe<0)
		{
			importe=prompt("por favor ingresar importe mayor a cero");
			importe=Number(importe);
		}

		if(contador==1)
		{
			minimo=importe;
			maximo=importe;
		}
		
		if(importe<minimo)
		{
			minimo=importe;
		}

		if(importe>maximo)
		{
			maximo=importe;
		}


		contador++

	}

	alert("el importe mayor fue: "+maximo+"\nel importe menor fue: "+minimo);


}
