function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';


	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingresar numero");
		numero=parseInt(numero);

		if(numero<0)
		{
			negativo = negativo * numero;
		}
		else
		{
			positivo = positivo + numero;
		}





		respuesta = prompt("escribir si en caso de querer agregar mas numeros");


	}









document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN