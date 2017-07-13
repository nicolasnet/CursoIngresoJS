function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
//while((sexo!="f" && sexo!="m")) ambas funcionan!!!!!!
while(!(sexo=="f" || sexo=="m"))
{
	alert("INGRESAR f o m");
	var sexo = prompt("ingrese f ó m .");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN