function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
//con este formato de SWITCH nos ahorramos tenes q poner un alert en cada caso
//el BREAK separa las opciones que tienen distintas instrucciones
switch(mesDelAño)
{
    case "Febrero" :
    {
        alert("este mes no tiene mas de 29 días");
        break;
    }
    default:
    	alert("Este mes tiene 30 días o mas");

//con DEFAULT instruimos que el resto de variables que no tengan una instruccion realice la instruccion que se le asigna a continuacion


//nos obviamos de poner todos los demas CASE 


    /*
    case "Enero" :

    case "Marzo" :
   
    case "Abril" :
    
    case "Mayo" :
    
    case "Junio" :
    
    case "Julio" :
    
    case "Agosto" :
    
    case "Septiembre" :
    
    case "Octubre" :
    
    case "Noviembre" :
    
    case "Diciembre" :
    {
        alert("Este mes tiene 30 días o mas");
        break;  //todos los CASE posteriores al break de febrero y hasta este break generaran la instruccion de este ultimo
    }*/
}
	


}//FIN DE LA FUNCIÓN