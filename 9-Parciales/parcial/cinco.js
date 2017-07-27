function Mostrar()
{
	var diaDeSemana;



	diaDeSemana=prompt("ingresar dia de la semana");
/*
	switch(diaDeSemana)
	{
		case "sabado":
		case "domingo":
			alert("es fin de semana");
			break;
		default:
			alert("a trabajar");
			break;
	}
*/
	switch(diaDeSemana)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("a trabajar!!");
			break;

		case "sabado":
		case "domingo":
			alert("fin de semana");
			break;
	}



}
