function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
/*
{
        //asi es como se hace si se hiciera una cadena de IF
        //el switch (mas abajo utilizado) viene a resumir y mostrar de una forma mas ordena todos estos if
        if(mesDelAño=="Enero")         // ACA NO PONEMOS ";"" YA QUE LA INSTRUCCION SIGUE DESPUES DE ESTA LINEA
            {  
                alert("que comiencen las clases");
            }
        else
            {
                if(mesDelAño=="Marzo")
                {
                    alert("a clases!!");  //IMPORTANTE: CON CADA INSTRUCCION NO OLVIDAR PONER ;  !!!!
                }
                else
                {
                    if(mesDelAño=="Julio")
                    {
                        alert("se vienen las vacaciones");
                    }
                    else
                    {
                        if(mesDelAño=="Diciembre")
                        {
                            alert("felices fiestas");
                        }
                    }
                        
                }
            }
}*/            


       
//UTILIZAMOS EL SWITCH CUANDO LA CONDICION ES QUE VALOR TOMA LA VARIABLE
//por eso se utiliza unicamente una variable dentro del parentesis del switch

switch(mesDelAño)
{
    case "Enero" : //importante las comillas y los dos puntos 
    {
        alert("que comiences bien el año!!!.");
        break;
    }
    case "Marzo" :
    {
        alert("a clases!!!.");
        break;
    }
    case "Julio" :
    {
        alert("se vienen las vacaciones!!!.");
        break;
    }
    case "Diciembre" :
    {
        alert("Felices fiestas!!.");
        break;
    }
}



}//FIN DE LA FUNCIÓN
