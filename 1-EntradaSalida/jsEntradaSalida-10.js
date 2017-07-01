/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{

//tomamos el valor de lo ingresado por usuario	
var nro1=document.getElementById('importe').value;
var nro1=parseInt(nro1);
//aplicamos el descuento del 25%
var resultado=(nro1*0.75);
//le agrego el parseInt ya que me daba un nro decimal
var resultado=parseInt(resultado);
//con esta funcion del getElementByid logro poner el resultado en el 2do recuadro
document.getElementById('resultado').value=resultado;
	
}
