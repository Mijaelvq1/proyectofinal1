function pedir() {
        var usuario = document.getElementById('nombre').value;
        var contrasena = document.getElementById('CI').value;
        var direccion = document.getElementById('direccion').value;
        // var email = document.getElementById('email').value;
    
        // Muestra un mensaje temporal
        mostrarMensajeTemporal("Su Pedido fue recibido con exito");
    
        // Simula una demora antes de redirigir (puedes realizar operaciones asincrónicas aquí)
        setTimeout(function () {
            // Redirige a otra página (reemplaza 'otraPagina.html' con la URL de la página a la que deseas redirigir)
            window.location.href = '../html/ventas.html';
        }, 3000); // Redirige después de 3 segundos (igual puedes configurar el tiempo como abajo)
    }
    
    function mostrarMensajeTemporal(mensaje) {
        // Crea un elemento para el mensaje
        var mensajeElemento = document.createElement('div');
        mensajeElemento.textContent = mensaje;
        mensajeElemento.className = 'mensaje-temporal';
    
        // Agrega el elemento al cuerpo del documento
        document.body.appendChild(mensajeElemento);
    
        // Elimina el mensaje después de 3 segundos (aca podemos ajustar el tiempo)
        setTimeout(function () {
            document.body.removeChild(mensajeElemento);
        }, 3000);
    }