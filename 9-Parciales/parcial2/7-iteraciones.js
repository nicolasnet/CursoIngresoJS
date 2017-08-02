//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");

	var notas;
	var sexo;
	var cantidad=6;
	var acumuladorNotas=0;
	var contador=0;
	var minimo;
	var cantidadHombresNotaMayorIgual6=0;
	var promedio;

	while(contador<cantidad)
	{
		contador++;

		notas=prompt("ingresar nota del alumno: "+contador);
		while(notas<0 ||notas>10)
		{
			notas=prompt("ingresar nota entre 0 y 10");
		}
		notas=Number(notas);


		sexo=prompt("ingresar sexo f o m para el alumno: "+contador);
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingresar unicamente f o m");
		}


		acumuladorNotas=acumuladorNotas+notas;

		if(contador==1)
		{
			minimo=notas;
		}
		else
		{
			if(notas<minimo)
			{
				minimo=notas;
			}
		}

		if(notas>=6 && sexo=="m")
		{
			cantidadHombresNotaMayorIgual6++;
		}
	}


	promedio=acumuladorNotas/contador;

	alert("promedio de notas: "+promedio+"\nnota mas baja: "+minimo+"\ncantidad de hombres con nota mayor o igual a 6: "+cantidadHombresNotaMayorIgual6);
	
}

