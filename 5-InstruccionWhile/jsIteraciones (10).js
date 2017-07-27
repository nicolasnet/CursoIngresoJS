function Mostrar()
{
						//  EJERCICIO 10 DE WHILE


	var numero;
	var respuesta="si";

	var contador=0;
	
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	
	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var contadorImpares=0;

	var promedioNegativos=0;
	var promedioPositivos=0;

	var diferenciaEntrePositivosYNegativos=0;

	var ventanaNueva;



	while(respuesta!="no")
	{
		contador=contador+1;

		numero=prompt("ingresar el "+contador+"º numero");
		numero=Number(numero);

		while(!(numero<1 || numero>0))
		{
			numero=prompt("por favor ingresar valor numerico");
			numero=Number(numero);
		}

		



		if(numero<0)
		{
			acumuladorNegativos=acumuladorNegativos+numero;
			contadorNegativos=contadorNegativos+1;
		}
		else
		{
			if(numero==0)
			{
				contadorCeros=contadorCeros+1;
			}
			else
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorPositivos=contadorPositivos+1;
			}
		}


		 	//cantidad numeros pares

		 if(numero%2 == 0)
		 {
		 	contadorPares=contadorPares+1;
		 }
		 else
		 {
		 	contadorImpares=contadorImpares+1;  //en caso de que tambien se pidan los impares  (si solo piden impares... if(numero%2 !=0) )
		 }


		 	//diferencia entre positivos y negativos
		 diferenciaEntrePositivosYNegativos=diferenciaEntrePositivosYNegativos+numero;




		respuesta=prompt("si no desea continuar escribir `no´");
	}

/*
	console.log("suma nros. negativos: "+acumuladorNegativos);
	console.log("suma nros. positivos: "+acumuladorPositivos);

	console.log("cantidad de nros. negativos: "+contadorNegativos);
	console.log("cantidad de nros. positivos: "+contadorPositivos);
	console.log("cantidad de nros. Ceros: "+contadorCeros);
	console.log("cantidad de nros. pares: "+contadorPares);

	promedioNegativos=acumuladorNegativos/contadorNegativos;
	console.log("promedio de nros. negativos: "+promedioNegativos);
	promedioPositivos=acumuladorPositivos/contadorPositivos;
	console.log("promedio de nros. positivos: "+promedioPositivos);

	console.log("diferencia Entre Positivos Y Negativos: "+diferenciaEntrePositivosYNegativos);
*/



	ventanaNueva=window.open("","ventanaNueva", "width=400,height=300")

	
	ventanaNueva.document.writeln("suma nros. negativos: "+acumuladorNegativos );
	ventanaNueva.document.writeln("</br>suma nros. positivos: "+acumuladorPositivos);

	ventanaNueva.document.writeln("</br>cantidad de nros. negativos: "+contadorNegativos);
	ventanaNueva.document.writeln("</br>cantidad de nros. positivos: "+contadorPositivos);
	ventanaNueva.document.writeln("</br>cantidad de nros. Ceros: "+contadorCeros);
	ventanaNueva.document.writeln("</br>cantidad de nros. pares: "+contadorPares);

	promedioNegativos=acumuladorNegativos/contadorNegativos;
	ventanaNueva.document.writeln("</br>promedio de nros. negativos: "+promedioNegativos);
	promedioPositivos=acumuladorPositivos/contadorPositivos;
	ventanaNueva.document.writeln("</br>promedio de nros. positivos: "+promedioPositivos);

	ventanaNueva.document.writeln("</br>diferencia Entre Positivos Y Negativos: "+diferenciaEntrePositivosYNegativos);







 //---------------------------------------------------------------------------------------------------------------------------------------------------------------











	/*						EJERCICIO MANDADO POR EL PROFESOR, PRACTICA INTEGRAL DE LOS TEMAS.

			ejemplo de obtencion, validacion y extraccion de informacion, de esta encuesta se debe informar:
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

				//partidos opciones: gobierno; op.; otro
	*/
	
/*
	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sexo;
	var contadorMasc=0;
	var contadorFem=0;
	var contadorMujeresMayoresDeEdad=0;
	var contadorHombresMenorDe30=0;
	var edad;
	var edadMayor;
	var edadMenorHombre;
	var promedioEdad=0;
	var acumuladorEdad;
	var contadorPersonasDe50años=0;
	var contadorMujeresDe50años=0;
	var voto;
	var contadorGob=0;
	var contadorOp=0;
	var contadorOtro=0;
	var contadorHombresVotaronOtro=0;
	var contadorMujeresVotaronOp=0;
	var altura;
	var alturaHombreMenorEdad=0;
	var contadorMujeres50añosMas1metroVotaronGobierno=0;
	



	while(respuesta!="no")
	{
		sexo = prompt("igrese f para femenino o ingrese m para masculino");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("por favor igrese f para femenino o ingrese m para masculino");
		}


		edad=prompt("ingrese su edad");
		while(edad<1 || edad>100)
		//si aca la edad minima le ponemos 18 años (osea edad<18) al pedir la mujeres mayores de edad este seria igual a contadorFem
		{
			edad=prompt("por favor ingresar edad verdadera");
		}		
		edad=parseInt(edad); //este parseInt esta fuera del while, ya que si pones la edad en el 1er prompt, nunca entra al while y no ejecuta el parseInt

		
		voto=prompt("por favor votar por: gob, op u otro");
		while(voto!="gob" && voto!="op" && voto!="otro")
		{
			voto=prompt("solo elegir entre:\n`gob´ = gobierno\n`op´ = oposicion\n`otro´ = resto de partidos");
		}


		altura=prompt("ingresar altura");
		while(altura<1 || altura>3)
		{
			altura=prompt("por favor ingresar una altura correcta entre 1 y 3 metros");
		}
		altura=Number(altura); //OJO Number va la N con mayuscula!! asi devuelve un valor numerico y no uno literal




		contador=contador+1;



			//1- cant de mujeres y hombres
		if(sexo=="m")
		{
			contadorMasc=contadorMasc+1;
		}
		else
		{
			contadorFem=contadorFem+1;
		}

			//2- persona de mayor edad
		if (contador==1) 
		{
			edadMayor=edad;
		}
		else
		{

			if(edad>edadMayor)
			{
				edadMayor=edad;
			}
		}
		
			//3- promedio de edad
		if(contador==1)
		{
			acumuladorEdad=edad;
		}
		else
		{
			acumuladorEdad=parseInt(acumuladorEdad);
			acumuladorEdad=acumuladorEdad+edad;
		}		
		
			//4- quien gana las elecciones
		if(voto=="gob")
		{
			contadorGob=contadorGob+1;
		}
		else
		{
			if(voto=="op")
			{
				contadorOp=contadorOp+1;
			}
			else
			{
				contadorOtro=contadorOtro+1;
			}
		}

			//5- mujeres mayores de edad
		if(sexo=="f" && edad>17)
		{
			contadorMujeresMayoresDeEdad=contadorMujeresMayoresDeEdad+1;
		}

			//6- hombres menores a 30 años
		if(sexo=="m" && edad<30)
		{
			contadorHombresMenorDe30=contadorHombresMenorDe30+1;
		}

			//7- altura del hombre de menor edad
		if(sexo=="m")
		{	
			if(contadorMasc==1)
			{
				edadMenorHombre=edad;
				alturaHombreMenorEdad=altura;
			}
			else
			{
				if(edad<edadMenorHombre)
				{
					edadMenorHombre=edad;
					//alturaHombreMenorEdad=parseInt(alturaHombreMenorEdad);
					alturaHombreMenorEdad=altura;
				}
			}	
		}

			//8- hombres que votaron a otro
		if(sexo=="m")
		{
			if(voto=="otro")
			{
				contadorHombresVotaronOtro=contadorHombresVotaronOtro+1;
			}
		}

			//9- mujeres que votaron a op
		if(sexo=="f")
		{
			if(voto=="op")
			{
				contadorMujeresVotaronOp=contadorMujeresVotaronOp+1;
			}
		}

			//10 y 11- personas de 50 años
		if(edad==50)
		{
			contadorPersonasDe50años=contadorPersonasDe50años+1;
			if(sexo=="f")
			{
				contadorMujeresDe50años=contadorMujeresDe50años+1;
			}
		}

			//12- mujeres de 50 años, de mas de 1 metro, votaron al gobierno
		if(sexo=="f" && edad==50 && altura>1 && voto=="gob")
		{
			contadorMujeres50añosMas1metroVotaronGobierno=contadorMujeres50añosMas1metroVotaronGobierno+1;
		}




		respuesta = prompt("si no desea continuar ingresar `no´, hasta ahora van "+contador+" encuestados cargados");
	
	}


		console.log("edadMayor: "+edadMayor);
		console.log("contadorFem: "+contadorFem);
		console.log("contadorMasc: "+contadorMasc);

		promedioEdad=acumuladorEdad/contador;
		console.log("promedioEdad: "+promedioEdad);

		if(contadorGob>contadorOp && contadorGob>contadorOtro)
		{
			console.log("el partido ganador es Gobierno con "+contadorGob+" votos");
		}
		else
		{
			if(contadorOp>contadorGob && contadorOp>contadorOtro)
			{
				console.log("el partido ganador es la Oposicion con "+contadorOp+" votos");		
			}
			else
			{
				if(contadorOtro>contadorGob && contadorOtro>contadorOp)
				{
					console.log("el partido ganador es Otro con "+contadorOtro+" votos");
				}
				else
				{
					//if(contadorGob==contadorOp || contadorGob==contadorOtro || contadorOp==contadorOtro) //creo q  este if no es necesario
					//{
						console.log("hay mas de un candidato que puede ganar las elecciones")
					//}	
				}	
			}
		}

		//console.log("en total hay "+contadorMujeresMayoresDeEdad+" mujeres mayores de edad");
		//console.log("en total hay "+contadorHombresMenorDe30+" hombres menores a 30 años");
		console.log("cantidad de mujeres mayores de edad: "+contadorMujeresMayoresDeEdad);
		console.log("cantidad de hombres menores a 30 años: "+contadorHombresMenorDe30);

		console.log("altura del hombre de menor edad: "+alturaHombreMenorEdad);

		console.log("cantidad de hombres que votaron a Otro: "+contadorHombresVotaronOtro);

		console.log("cantidad de personas de 50 años: "+contadorPersonasDe50años);
		console.log("cantidad de mujeres de 50 años: "+contadorMujeresDe50años);

		console.log("cantidad de mujeres de 50 años con mas de 1 metro y que votaron al Gobierno: "+contadorMujeres50añosMas1metroVotaronGobierno);

*/



}//FIN DE LA FUNCIÓN