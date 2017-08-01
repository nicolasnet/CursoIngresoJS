function Mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var cantidadDeNotas=5; //cambiar por 100 para el ejercicio.
	var acumuladorNotas=0;
	var promedio;
	var notaMin;
	//var contadorMasculino=0;
	var hombresNotaMayorIgual6=0;


	while(contador<cantidadDeNotas)
		{
			contador++

			nota=prompt("ingresar nota nro "+contador+"º");
			while(nota<0 || nota>10)
			{
				nota=prompt("ingresar nota entre 0 y 10");
			}
			nota=Number(nota);


			sexo=prompt("ingresar sexo f o m");
			while(sexo!="f" && sexo!="m")
			{
				sexo=prompt("ingresar unicamente f o m");
			}


			acumuladorNotas=acumuladorNotas+nota;


			if(contador==1)
			{
				notaMin=nota;
			}
			else
			{
				if (nota<notaMin) 
				{
					notaMin=nota;
				}
			}


			if(sexo=="m" && nota>5)
			{
				hombresNotaMayorIgual6=hombresNotaMayorIgual6+1;
			}				
		}

		promedio=acumuladorNotas/contador;
		console.log("el promedio de notas es: "+promedio);

		console.log("la nota minima fue: "+notaMin);
		
		console.log("cantidad de Hombres con nota igual o mayor a 6: "+hombresNotaMayorIgual6);
}
