function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var nota;
	var notamayor;  //inicializo en -1 en caso de que ingresen el numero 0
	var notamenor;

	while(contador<3)         //esto lo necesito para q solo entre 3 veces
	{
		contador=contador+1;  //esto lo necesito para q solo entre 3 veces
		nota=prompt("ingrese nota");

		nota = parseInt(nota);

		if(contador==1)
		{								//con este agregado de if no necesitamos inicializar las variable max y min.
			notamayor=nota;
			notamenor=nota;
		}
		else
		{

			if(nota>notamayor)    //la condicion q necesito para q compare y busque cual es mayor
			{
				notamayor=nota;		//cuando la nota ingresada es mayor, se guarda como notamayor
			}

			if(nota<notamenor)
			{
				notamenor=nota;
			}
		}	
	}
	

	console.log("nota mayor "+notamayor);
	console.log("nota menor "+notamenor);








	//while(respuesta=="si")
								/*while(contador<3)
	{
		contador=contador+1;
		numero=prompt("ingrese el "+contador+"º numero");
		numero=parseInt(numero);
		acumulador=acumulador + numero;
		console.log("vuelta Nro"+contador);*/


					/*while(true)
						contador++;
						console.log("vuelta Nro"+contador);      ESTE NO ESTA FUNCIONANDO... PROBLEMA EN EL BREAK
						if(contador==3)
						{
						break;
						}

		//respuesta=prompt(" ingrese si para continuar");
		//respuesta=prompt(" ingrese algo distinto a si para salir"); no queda claro para el usuario
	}*/


/*
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
*/
}//FIN DE LA FUNCIÓN