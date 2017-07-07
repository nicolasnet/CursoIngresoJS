function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero=Math.floor((Math.random() * 10) + 1)
//lo muestro en consola para chequear funcionamiento
	console.log(numero)

	if(numero>8)
	{
		alert("excelente")
	}
	else
	{
		if(numero>3)
		 //en el ejercicio pide mayor y menor a 4, yo lo inclui aca xq es aprobado
			{
				alert("APROBO")
			}
		else
			{
				alert("Vamos, la proxima se puede")
			}	
	}

}//FIN DE LA FUNCIÓN
