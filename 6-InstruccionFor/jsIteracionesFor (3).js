function Mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
var cantidad=1000;
var numero;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;

	for(contador=0; contador<cantidad; contador++)
	{
		numero=Math.floor((Math.random() * 10) + 1);
		//console.log(numero);

		switch(numero)
		{
			case 1:
				cont1++;
				break;

			case 2:
				cont2++;
				break;

			case 3:
				cont3++;
				break;

			case 4:
				cont4++;
				break;

			case 5:
				cont5++;
				break;

			case 6:
				cont6++;
				break;

			case 7:
				if(cont7==(0.05*cantidad))
				{
					continue;
				}
				else
				{				
				cont7++;
				break;
				}

			case 8:
				cont8++;
				break;

			case 9:
				cont9++;
				break;	

			case 10:
				cont10++;
				break;
		}

		//console.log(contador);
	}
		console.log("la cantidad de 1: "+cont1);
		console.log("la cantidad de 2: "+cont2);
		console.log("la cantidad de 3: "+cont3);
		console.log("la cantidad de 4: "+cont4);
		console.log("la cantidad de 5: "+cont5);
		console.log("la cantidad de 6: "+cont6);
		console.log("la cantidad de 7: "+cont7);
		console.log("la cantidad de 8: "+cont8);
		console.log("la cantidad de 9: "+cont9);
		console.log("la cantidad de 10: "+cont10);	



}//FIN DE LA FUNCIÓN