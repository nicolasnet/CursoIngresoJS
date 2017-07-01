/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
//de esta manera dividimos los pasos.
//1ro tomamos los datos literales y los guardamos en variables	
var n1=(document.getElementById('numeroDividendo').value);
var n2=(document.getElementById('numeroDivisor').value);
//2do los transformamos en valores
var n1=parseInt(n1)
var n2=parseInt(n2)
//3ro realizamos la operacion solicitada
//resto este proceso nos brinda lo que hace falta para llegar al entero en caso de no ser divisibles
//cuando uno es divisible del otro el resultado arrojado es 0 (CERO)
var resultado = n1%n2
//por ultimo mostramos el resultado segun las caracteristicas pedidas
alert("el resto es "+resultado)	
}
