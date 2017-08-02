function Mostrar()
{
	var edad;
	var sexo;
	var cantidad=3;  //cambiar a 100 para este ejercicio
	var contador=0;
	var acumuladorEdad=0;
	var promedio;
	var minimo;
	var cantidadHombresMayorIgual20=0;

	while(contador<cantidad)
	{
		contador++;

		edad=prompt("ingresar edad de la "+contador+"° persona");
		while(!(edad>0 && edad<100))
		{
			edad=prompt("ingresar edad entre 0 y 100");
		}
		edad=Number(edad);


		sexo=prompt("ingresar sexo f o m de la "+contador+"° persona");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingresar unicamente 'f' para femenino o 'm' para masculino");
		}


		acumuladorEdad=acumuladorEdad+edad;


		if(contador==1)
		{
			minimo=edad;
		}
		else
		{
			if(edad<minimo)
			{
				minimo=edad;
			}
		}


		if(sexo="m" && edad>=20)
		{
			cantidadHombresMayorIgual20++;
		}
	}

	promedio=acumuladorEdad/contador;


	alert("el promedio de edad es: "+promedio+"\nla edad mas baja es: "+minimo+"\ncantidad de varones mayores o iguales a 20 años: "+cantidadHombresMayorIgual20);


}
