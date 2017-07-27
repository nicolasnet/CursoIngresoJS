function Mostrar()
{
/*
		//Nivel 1 ej. 1.-
	var base;
	var ladoDelCuadrado;
	var perimetro;



	base=document.getElementById('BaseCuadrado').value;

	ladoDelCuadrado=Math.sqrt(base);

	perimetro=4*ladoDelCuadrado;



	alert("el perimetro del cuadrado es: "+perimetro);
*/

/*	
		//Nivel 1 ej. 2.-
	var importe;
	var precioFinal;

	importe=prompt("ingrese importe");
	precioFinal=importe*1.21;

	alert("precio final del producto: "+precioFinal);
*/


		//Nivel 1 ej. 3
	var LargoTerreno;
	var AnchoTerreno;
	var perimetro;
	var alambreNecesario;

	LargoTerreno=document.getElementById('LargoTerreno').value;
	LargoTerreno=parseInt(LargoTerreno);
	AnchoTerreno=document.getElementById('AnchoTerreno').value;
	AnchoTerreno=parseInt(AnchoTerreno);

	perimetro=(2*(LargoTerreno+AnchoTerreno));
	alambreNecesario=perimetro*3;

	alert("el alambre necesario son: "+alambreNecesario+" mts.");

	
/*
		//Nivel 2 ej. 4
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;
	var suma,

	numeroUno=prompt("ingrese 1er numero");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese 2do numero");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos;
		document.write("los numeros son iguales, multiplicacion= "+multiplicacion);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			document.write("el 1ro es mayor, resta= "+resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("el 2do es mayor, suma= "+suma);
		}
	}
*/
	
/*
		//Nivel 2 ej. 5
	var diaDeSemana

	diaDeSemana=prompt("ingresar dia de Semana");

	switch(diaDeSemana)
	{
		case "sabado":
		case "domingo":
		{
			alert("es fin de semana");
			break;
		}

		default:
		{
			alert("a trabajar!!");
			break;
		}
	}
*/






}//FIN DE LA FUNCIÓN
