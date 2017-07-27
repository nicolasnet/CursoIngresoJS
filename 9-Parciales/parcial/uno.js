
function Mostrar()
{
	var laBase;
	var perimetro;

	laBase=document.getElementById('laBase').value;
	laBase=parseInt(laBase);
	perimetro=laBase*4;

	alert("el perimetro es: "+perimetro);
}
