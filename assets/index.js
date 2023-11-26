function toggleBorde() {
    var imagen = document.getElementById('imagenConBorde');
    

    var tieneBorde = imagen.style.border === '2px solid red';
    
    
    if (tieneBorde) {
      imagen.style.border = 'none'; // Quitar el borde
    } else {
      imagen.style.border = '2px solid red'; // Agregar el borde rojo
    }
  }

   function calcularPedido() {
    var cantidadSticker1 = parseInt(document.getElementById('cantidadSticker1').value);
    var cantidadSticker2 = parseInt(document.getElementById('cantidadSticker2').value);
    var cantidadSticker3 = parseInt(document.getElementById('cantidadSticker3').value);

    var sumaTotal = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    var resultadoParrafo = document.getElementById('resultado');

    if (sumaTotal <= 10) {
      resultadoParrafo.textContent = 'Llevas ' + sumaTotal + ' stickers.';
    } else {
      resultadoParrafo.textContent = 'Llevas demasiados stickers.';
    }
  }

   function verificarPassword() {
    var digito1 = document.getElementById('select1').value;
    var digito2 = document.getElementById('select2').value;
    var digito3 = document.getElementById('select3').value;


    var password = digito1 + digito2 + digito3;

    var resultadoParrafo = document.getElementById('resultado');

    if (password === '911') {
      resultadoParrafo.textContent = 'Password 1 correcto.';
    } else if (password === '714') {
      resultadoParrafo.textContent = 'Password 2 es correcto.';
    } else {
      resultadoParrafo.textContent = 'Password incorrecto.';
    }
  }