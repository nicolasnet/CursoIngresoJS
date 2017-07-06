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
				else
					{
						alert("niño");	
					}
		}



}//FIN DE LA FUNCIÓN