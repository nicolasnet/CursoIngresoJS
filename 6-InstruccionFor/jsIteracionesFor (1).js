function Mostrar()
{
	var contador=0;
	var respuesta="si";

	for(; respuesta=="si";)  //la 1er aprte solo se ejecuta la 1ra vez, la condicion siempre se usa
												//la accion a partir de la 2da hasta la ultima
	{
		console.log("hola "+contador);
		if(contador==10)
		{
			break;
		}

		 contador++

		 respuesta=prompt("escribir no para frenar");


	}



	




}