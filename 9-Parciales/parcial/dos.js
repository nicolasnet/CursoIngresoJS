function Mostrar()
{
/*
  var importe;
  var importeFinal;


  importe=prompt("ingrese importe");
  importe=parseInt(importe);
  importeFinal=importe*1.21;

  document.getElementById('importeFinal').value=importeFinal;
*/

//Se piden 10 numeros, informar el promedio.
/*
	var importe;
	var promedio;
	var contador=0;
	var acumulador=0;
	var cantidad=10;

	while(contador<cantidad)
	{
		contador++;
		importe=prompt("ingresar "+contador+"° importe");
		importe=Number(importe);
		acumulador=acumulador+importe;
		
		


	}

	promedio=acumulador/cantidad;


	console.log("el promedio es: "+promedio);
*/

//se piden 10 notas validadas entre cero y diez, informar la peor nota.

/*	
	var nota;
	var notaMenor;
	var cantidad=10;
	var contador=0;

	while(contador<cantidad)
		{
			contador++
			nota=prompt("ingresar "+contador+"° nota");
			nota=Number(nota);
			while(nota<0 || nota>10)
			{
				nota=prompt("por favor ingresar nota entre 0 y 10");
				nota=Number(nota);
			}


			if(contador==1)
			{
				notaMenor=nota;
			}
			else
			{
				if(nota<notaMenor)
				{
					notaMenor=nota;
				}
			}
		}


	console.log("la nota menor es: "+notaMenor);
*/

//estamos haciendo aparecer un cuadrado.... es algo simple para demostrar q no hay q complicarse

	var i;


	for(i=0; i<10; i++)
	{

		if(i==0 || i==9)
		{
			document.write("**********<br>");	
		}
		else
		{
			document.write("*00000000*<br>");
		}
		



	}
















}
