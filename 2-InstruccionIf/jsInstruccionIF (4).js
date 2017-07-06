function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
	if(edad>17)
		{
				alert("mayor de edad")
		}
	else
		{	
				if(edad>12)
				{
					alert("adolecente")
				}
		}

/* otra opcion
var edad=document.getElementById('edad').value;
	if(edad>12)
		{
				if(edad<18)
				{
					alert("adolecente")
				}
		}
	if(edad>12&&edad<18)
		{
			alert(adolecente)
		}
*/
}//FIN DE LA FUNCIÓN