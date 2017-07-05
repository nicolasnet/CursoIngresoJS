/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
//de esta manera dividimos los pasos.
//1ro tomamos los datos literales y los guardamos en variables	
var PrecioUno=(document.getElementById('PrecioUno').value);
var PrecioDos=(document.getElementById('PrecioDos').value);
var PrecioTres=(document.getElementById('PrecioTres').value);

//2do los transformamos en valores
var PrecioUno=parseInt(PrecioUno);
var PrecioDos=parseInt(PrecioDos);
var PrecioTres=parseInt(PrecioTres);

//3ro realizamos la operacion solicitada
var resultado = PrecioUno+PrecioDos+PrecioTres;

//por ultimo mostramos el resultado segun las caracteristicas pedidas
alert("la suma es "+resultado)	
	
}
function Promedio () 
{
//1ro tomamos los datos literales y los guardamos en variables	
var PrecioUno=(document.getElementById('PrecioUno').value);
var PrecioDos=(document.getElementById('PrecioDos').value);
var PrecioTres=(document.getElementById('PrecioTres').value);

//2do los transformamos en valores
var PrecioUno=parseInt(PrecioUno);
var PrecioDos=parseInt(PrecioDos);
var PrecioTres=parseInt(PrecioTres);

//3ro realizamos la operacion solicitada
var resultado = (PrecioUno+PrecioDos+PrecioTres)/3;

//por ultimo mostramos el resultado segun las caracteristicas pedidas
alert("el promedio es "+resultado)		
}
function PrecioFinal () 
{
//1ro tomamos los datos literales y los guardamos en variables	
var PrecioUno=(document.getElementById('PrecioUno').value);
var PrecioDos=(document.getElementById('PrecioDos').value);
var PrecioTres=(document.getElementById('PrecioTres').value);

//2do los transformamos en valores
var PrecioUno=parseInt(PrecioUno);
var PrecioDos=parseInt(PrecioDos);
var PrecioTres=parseInt(PrecioTres);

//3ro realizamos las operaciones solicitadas y almacenamos resultados en variables
var PrecioFinaluno = PrecioUno*1.21;
var PrecioFinaldos = PrecioDos*1.21;
var PrecioFinaltres = PrecioTres*1.21;

//por ultimo mostramos el resultado segun las caracteristicas pedidas
alert("Precio Uno Final: $"+PrecioFinaluno+"\nPrecio Dos Final: $"+PrecioFinaldos+"\nPrecio Tres Final: $"+PrecioFinaltres);			
}
