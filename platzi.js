var z;// = aleatorio( 10, 20);
//document.write(z + " , ");

for(var i = 0; i < 10; i++)
{
  z = aleatorio( 10, 20);
  document.write(z + " , ");
}


function aleatorio(maxi, min)
{
  var resultado;

  resultado = Math.floor (Math.random() * (maxi - min)) + min;

  return resultado;
}
