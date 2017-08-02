function Mostrar()
{
  var importe;
  var descuento=0.75;
  var importeFinal;


  importe=prompt("ingresar importe");
  importe=Number(importe);

  importeFinal=importe*descuento;

  document.getElementById('importeFinal').value=importeFinal;
}
