//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");

	var nota;
	var sexo;
	var cantidad=6;
	var contador=0;
	var acumualdorNotas=0;
	var promedio;
	var minimo;
	var cantidadVaronesNotaMayorIgual6=0;


	while(contador<cantidad)
	{
		contador++;

		nota=prompt("ingresar nota del "+contador+"º alumno");
		while(!(nota>0 && nota<11))
		{
			nota=prompt("ingresar nota entre 0 y 10");
		}
		nota=Number(nota);


		sexo=prompt("ingresar sexo f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingresar unicamente `f´ o `m´");
		}


		acumualdorNotas=acumualdorNotas+nota;

		if(contador==1)
		{
			minimo=nota;
		}
		else
		{
			if(nota<minimo)
			{
				minimo=nota;
			}
		}

		if(sexo=="m" && nota>=6)
		{
			cantidadVaronesNotaMayorIgual6++;
		}
	}

	promedio=acumualdorNotas/contador;

	alert("promedio de notas: "+promedio+"\nnota mas baja: "+minimo+"\ncantidad de varones con notas mayor o igual a 6: "+ cantidadVaronesNotaMayorIgual6);
	
}

