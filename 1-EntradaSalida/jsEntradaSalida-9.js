/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
//tomamos el valor de lo ingresado por usuario	
var nro1=document.getElementById('sueldo').value;
var nro1=parseInt(nro1);
//aplicamos el aumento del 10%
var resultado=(nro1*1.1);
//le agrego el parseInt ya que me daba un nro decimal
var resultado=parseInt(resultado);
//con esta funcion del getElementByid logro poner el resultado en el 2do recuadro
document.getElementById('resultado').value=resultado;
	
}
