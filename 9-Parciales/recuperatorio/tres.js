function Mostrar()
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

    precioUno=document.getElementById('precioUno').value;
    precioUno=Number(precioUno);

    precioDos=document.getElementById('precioDos').value;
    precioDos=Number(precioDos);

    precioTres=document.getElementById('precioTres').value;
    precioTres=Number(precioTres);


    suma=precioUno+precioDos+precioTres;

    promedio=suma/3;

    alert("la suma de los numeros es: "+suma+"\nel promedio es: "+promedio);

}
