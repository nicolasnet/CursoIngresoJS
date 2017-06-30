/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var n1 = parseInt(document.getElementById('numeroUno').value);
var n2 = parseInt(document.getElementById('numeroDos').value);
var resultado = n1+n2
alert("la suma es "+resultado)	
}

function restar()
{
var n1 = parseInt(document.getElementById('numeroUno').value);
var n2 = parseInt(document.getElementById('numeroDos').value);
var resultado = n1-n2
alert("la resta es "+resultado)	
}

function multiplicar()
{ 
var n1 = parseInt(document.getElementById('numeroUno').value);
var n2 = parseInt(document.getElementById('numeroDos').value);
var resultado = n1*n2
alert("la multiplicación es "+resultado)	
}

function dividir()
{
var n1 = parseInt(document.getElementById('numeroUno').value);
var n2 = parseInt(document.getElementById('numeroDos').value);
var resultado = n1/n2
alert("la divición es "+resultado)	
}

