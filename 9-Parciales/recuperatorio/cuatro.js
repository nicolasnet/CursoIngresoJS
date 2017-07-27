function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=prompt("ingrese 1er numero");
    numeroUno=parseInt(numeroUno);

    numeroDos=prompt("ingrese 2do numero");
    numeroDos=parseInt(numeroDos);

    resultado=numeroUno+numeroDos;

    if(resultado==0)
    {
        document.write("el resultado es cero");
    }
    else
    {
        if(resultado>0)
        {
            document.write("el resultado es positivo");
        }
        else
        {
            document.write("el resultado es negativo");
        }
    }
}
