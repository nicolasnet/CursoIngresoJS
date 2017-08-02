	function Mostrar()
{
	var peso;
	var minimo;
	var maximo;
	var cantidad=3;  //cambiar a 50 para este ejercicio.
	var contador=0;





	while(contador<cantidad)
	{	
		contador++;

		peso=prompt("ingresar peso en Kg. del "+contador+"° contenedor");
		while(!(peso>0))
		{
			peso=prompt("ingresar peso mayor a cero Kg.");
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

	console.log("el menos pesado es de "+minimo+" kg.");
	console.log("el mas pesado es de "+maximo+" kg.");
}
