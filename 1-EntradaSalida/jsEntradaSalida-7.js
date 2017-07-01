/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
//de esta manera dividimos los pasos.
//1ro tomamos los datos literales y los guardamos en variables	
var n1=(document.getElementById('numeroUno').value);
var n2=(document.getElementById('numeroDos').value);
//2do los transformamos en valores
var n1=parseInt(n1)
var n2=parseInt(n2)
//3ro realizamos la operacion solicitada
var resultado = n1+n2
//por ultimo mostramos el resultado segun las caracteristicas pedidas
alert("la suma es "+resultado)	
}


function restar()
{
//en las siguientes opciones realizamos el mismo metodo, pero de una manera compacta
//al definir la variable tambien la transformamos en valor
var n3 = (document.getElementById('numeroUno').value);
var n4 = (document.getElementById('numeroDos').value);
//y directamente realizamos el calculo
var resultado = n3-n4
alert("la resta es "+resultado)	
}

function multiplicar()
{ 
var n5 = (document.getElementById('numeroUno').value);
var n6 = (document.getElementById('numeroDos').value);
var resultado = n5*n6
alert("la multiplicación es "+resultado)	
}

function dividir()
{
var n7 = (document.getElementById('numeroUno').value);
var n8 = (document.getElementById('numeroDos').value);
var resultado = n7/n8
alert("la divición es "+resultado)	
}

