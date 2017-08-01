function Mostrar()
{
	var edad;
	var sexo;
	var contador=0;
	var cantidad=5; //cambiar a 100 para el ejercicio
	var acumuladorEdad=0;
	var promedio;
	var minimo;
	var cantidadVaronesMayorIgual20=0;


	while(contador<cantidad)
	{
		contador++

		edad=prompt("ingresar edad de la "+contador+"º persona");
		while(edad<0 || edad>100)
		{
			edad=prompt("ingresar edad valida");
		}
		edad=Number(edad);


		sexo=prompt("ingresar sexo f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingresar unicamente f o m");
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



		if(sexo=="m" && edad>19)
		{
			cantidadVaronesMayorIgual20++
		}
	}


	promedio=acumuladorEdad/contador;
	alert("promedio= "+promedio+"\nla edad mas baja es: "+minimo+"\ncantidad de varones mayores o iguales a 20= "+cantidadVaronesMayorIgual20);




}
