//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 5-Switch");

	var mes;

	mes=prompt("ingresar mes del año");

	switch(mes)
	{
		case "enero":
		case "febrero":
			alert("Veranito!!!");
			break;
		case "marzo":
		case "abril":
		case "mayo":
		case "junio":
		case "julio":
		case "agosto":
		case "septiembre":
		case "noviembre":
		case "diciembre":
			alert("extraño enero y febrero");
			break;
	}
	
}

