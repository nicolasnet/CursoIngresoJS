function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sexo;
	var contadorMasc;
	var contadorFem;
	var edad;
	var edadMayor;
	var promedioEdad;
	var acumuladorEdad;
	/*
	ejemplo de obtencion, validacion y extraccion de informacion de esta encuesta se debe informar:
	1- cuantas mujeres y cuantos hombres fueron entrevistados.
	2- la persona de mayor edad.
	3- el promedio de edad.
	4- quien ganara las elecciones.
	5- informar cuantas mujeres mayores de edad hay
	6- informar cuantos hombres menores a 30 años hay
	7- informar la altura del hombre que menos edad tiene
	8- informar cuantos hombres votaron a "otro"
	9- de las mujeres informar cuantas votaron a la op.
	10- cuantas personas de 50 años votaron
	11- cuantas personas de 50 años mujeres votaron
	12- cuantas mujeres de 50 años de mas de 1 metro votaron al gobierno
	*/




//partidos opciones gobierno; op.; otro




	while(respuesta!="no")
	{
		sexo = prompt("igrese F para femenino o ingrese M para masculino");
		while(sexo!="F" && sexo!="M")
		{
			sexo=prompt("igrese F para femenino o ingrese M para masculino por favor");
		}

		edad=prompt("ingrese su edad");
		while(edad<1 || edad>100)
		{
			edad=prompt("por favor ingresar edad verdadera");
			edad=parseInt(edad);
		}






		if(sexo=="M")
		{
			contadorMasc=contadorMasc+1;
		}
		else
		{
			contadorFem=contadorFem+1;
		}

		if(edad>edadMayor)
		{
			edadmayor
		}

		contador=contador+1;
		acumuladorEdad=acumuladorEdad+edad;
		promedioEdad=acumuladorEdad/contador;
		console.log(promedioEdad);




		respuesta = prompt("si no desea continuar apretar no");
	
	}




}//FIN DE LA FUNCIÓN