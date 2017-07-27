
function Mostrar()
{
    var laBase;
    var superficie;
    
    laBase=document.getElementById('laBase').value;
    laBase=parseInt(laBase);
    
    superficie=laBase*laBase;

    alert("la superficie es iguala: "+superficie);
}
