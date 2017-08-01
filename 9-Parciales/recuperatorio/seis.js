	function Mostrar()
{
	var peso;
	var contador=0;
	var cantidad=5; //cambiar a 50 para este ejercicio.
	var maximo;
	var minimo;


	while(contador<cantidad)
	{

		contador++

		peso=prompt("ingresar kg del contenedor nro "+contador);
		while(peso<1)
		{
			peso=prompt("ingresar peso mayor a cero kg.");
		}
		peso=Number(peso);



		if(contador==1)
		{
			minimo=peso;
			maximo=peso;
		}
		else
		{
			if(peso<minimo)
			{
				minimo=peso;
			}


			if(peso>maximo)
			{
				maximo=peso;
			}
		}
	}


	alert("peso maximo= "+maximo+"\npeso minimo= "+minimo);

}
