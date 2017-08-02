function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var resultado;

    numeroUno=prompt("ingresar 1er numero");
    numeroUno=Number(numeroUno);

    numeroDos=prompt("ingresar 2do numero");
    numeroDos=Number(numeroDos);

    suma=numeroUno+numeroDos;

    if(suma>0)
    {
        resultado="positivo";
    }
    else
    {
        if(suma==0)
        {
            resultado="cero";
        }
        else
        {
            resultado="negativo";
        }
    }



    document.write("el resultado es "+resultado);
}
