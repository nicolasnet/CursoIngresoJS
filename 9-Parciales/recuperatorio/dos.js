function Mostrar()
{
    var importe;
    var descuento=0.75;
    var importeFinal;

    importe=prompt("ingrese importe");
    importe=parseInt(importe);

    importeFinal=importe*descuento;

    document.getElementById('importeFinal').value=importeFinal;
}
