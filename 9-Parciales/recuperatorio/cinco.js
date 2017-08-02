function Mostrar()
{
    var mes;

    mes=prompt("ingresar mes del año");

    switch(mes)
    {
        case "diciembre":
            alert("Se vienen las fiestas");
            break;

        case "enero":
            alert("Comienza el año");
            break;

        default:
            alert("no es enero ni diciembre");
            break;    
    }




}