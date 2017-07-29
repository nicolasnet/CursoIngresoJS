
function Mostrar()
{


	/*var laBase;
	var perimetro;

	laBase=document.getElementById('laBase').value;
	laBase=parseInt(laBase);
	perimetro=laBase*4;

	alert("el perimetro es: "+perimetro);*/



//-----------------------------------Practicas para el parcial----------------------------------------------------------------------


/*
//se pide numero por ID y se muestra por alert ese numero al cubo

	var laBase;
	var cubo;

	laBase=document.getElementById('laBase').value;
	laBase=Number(laBase);

	cubo=Math.pow(laBase, 3); //formula para potencias.
	//cubo=laBase*laBase*laBase;


	alert("el cubo del numero es: "+cubo);
*/

/*



//Se piden dos numeros por prompt y mostramos en el cuadro de texto la suma de los  mismos.

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("ingrese 1er numero");
	numeroUno=Number(numeroUno);

	numeroDos=prompt("ingrese 2do numero");
	numeroDos=Number(numeroDos);

	suma=numeroUno+numeroDos;

	document.getElementById('laBase').value=suma;
*/



//Pedir por prompt nombre y nacionalidad y mostrar el mensaje en el cuadro de texto "Pepe es Argentino".
/*	
	var nombre;
	var nacionalidad;

	nombre=prompt("ingresar nombre");

	nacionalidad=prompt("ingresar nacionalidad");




	document.getElementById('laBase').value=nombre+" es "+nacionalidad;
*/


/*
//pedir dos numeros y mostrar el menor por ID

	var numeroUno;
	var numeroDos;

	numeroUno=prompt("ingresar numero uno");
	numeroUno=Number(numeroUno);

	numeroDos=prompt("ingresar numero dos");
	numeroDos=Number(numeroDos);


	if(numeroUno>numeroDos)
	{
		document.getElementById('laBase').value=numeroDos;
	}
	else
	{
		document.getElementById('laBase').value=numeroUno;
	}
*/	

//Se pide nombre y edad y se informa por consola el nombre del mayor.
/*
	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var NombreEdadMayor;

	nombreUno=prompt("ingrese 1er nombre");
	edad=prompt("ingrese 1er edad");

	nombreDos=prompt("ingrese 2do nombre");
	edadDos=prompt("ingrese 2da edad");

	if(edadUno>edadDos)
	{
		NombreEdadMayor=nombreUno;
	}
	else
	{
		NombreEdadMayor=nombreDos;
	}


	console.log("el de mayor edad es: "+NombreEdadMayor);
*/

//Se ingresa por el cuadro de texto el importe a pagar de estacionamiento al precionar el boton nos mostrara, los sig mensajes:
// 1- "baratito" si es menos de 20. 2- "esta bien" si es menor a 70. 3- "esto es un robo" si sale mas de 70.
	
/*
	var importe;
	var resultado;

	importe=document.getElementById('laBase').value;

	if(importe<20) 
	{
		resultado="baratito";
	}
	else
	{
		if(importe<70) 
		{
			resultado="esta bien";
		}
		else
		{
			resultado="es un robo";
		}	
	}

	console.log(resultado);
*/

//se piden 3 numeros por prompt y se informa cual es el del medio.

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;


	numeroUno=prompt("ingresar 1er importe");
	numeroDos=prompt("ingresar 2do importe");
	numeroTres=prompt("ingresar 3er importe");

	if((numeroUno>=numeroDos && numeroUno<=numeroTres) || (numeroUno<=numeroDos && numeroUno>=numeroTres) )
	{
		resultado=numeroUno;
	}
	else
	{
		if((numeroDos>=numeroUno && numeroDos<=numeroTres) || (numeroDos<=numeroUno && numeroDos>=numeroTres))
		{
			resultado=numeroDos;
		}
		else
		{
			resultado=numeroTres;
		}


		
	}

	console.log(resultado);





















}
