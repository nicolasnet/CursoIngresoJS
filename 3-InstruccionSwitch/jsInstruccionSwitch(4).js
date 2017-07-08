function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
    case "Febrero" :
    {
        alert("este mes tiene 29 días");
        break;
    }
    case "Enero" :

    case "Marzo" :

 	case "Mayo" :

 	case "Julio" :
    
    case "Agosto" :

    case "Octubre" :

    case "Diciembre" :
    {
    	alert("este mes tiene 31 días")
    	break;
    }

  
    default:
    {
        alert("Este mes tiene 30 días");
        break;  
    }
}	



}//FIN DE LA FUNCIÓN