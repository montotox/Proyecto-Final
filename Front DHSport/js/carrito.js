
window.onload = function () {
    // Variables
    var baseDeDatos = [];
    fetch("http:/localhost:8080/api/all")
        .then(function (response){
            return response.json();
        }).then(function (data){
            baseDeDatos = (data);
            console.log(baseDeDatos);

    //Capturo el main
    var $items = document.querySelector('#items');
    //Creo la variable carrito como un array vacío
    var carrito = [];
    //Creo la variable total para contar el precio total de los productos cargados en el carro
    var total = 0;
    //Capturo la lista donde se van a listar los productos del carro
    var $carrito = document.querySelector('#carrito');
    //Capturo el span donde se debe cargar el precio total
    var $total = document.querySelector('#total');
    //Capturo el botón del carrito
    var $botonCarrito = document.querySelector('#botonCarrito');
    //Creo la variable donde cuento los items agregados al carro
    var numeroUnidadesItem = 0;

    // Funciones
    function renderItems () {
        for (var info of baseDeDatos) {
            // Estructura
            var miNodo = document.createElement('div');
            miNodo.classList.add('listado-productos');
            // Body
            var miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('caja-producto');
            // Imagen
            var miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('imagen-producto');
            miNodoImagen.setAttribute('src', info['image']);
            // Info
            var miNodoInformacion = document.createElement('div');
            miNodoInformacion.classList.add('info-producto');
            // Titulo
            var miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('titulo-producto');
            miNodoTitle.textContent = info['title'];
            // Precio
            var miNodoPrecio = document.createElement('span');
            miNodoPrecio.classList.add('precio-producto');
            miNodoPrecio.textContent = '$ ' + info['price'];
            //Otro Div
            var container = document.createElement('div');
            container.classList.add('otro-div');
            //Descripcion
            var miNodoDescripcion = document.createElement('p');
            miNodoDescripcion.classList.add('descripcion');
            miNodoDescripcion.textContent = info['description'];
            // Boton
            var miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary', 'agregar-al-carro');
            miNodoBoton.textContent = '';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            //Imagen carrito
            var miNodoImagenCarro = document.createElement('span');
            // Insertamos
            container.appendChild(miNodoDescripcion);
            container.appendChild(miNodoBoton);
            miNodoBoton.appendChild(miNodoImagenCarro);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoInformacion);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(container);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito () {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito
        renderizarCarrito();
        // Contamos Items
        contarItems();
        //Renderizamos el boton
        renderizarBtnCarro();
    }

    function renderizarCarrito () {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Quitamos los duplicados
        var carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            var miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            var numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            var miNodo = document.createElement('li');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['title']} $${miItem[0]['price']}`;
            // Contenedor
            var miContenedor = document.createElement('div');
            miContenedor.classList.add('contenedor-carrito');
            miContenedor.setAttribute('src', '../info-producto.html');
            // Imagen
            var miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('imagen-producto-carro');
            miNodoImagen.setAttribute('src', miItem[0]['image']);
            // Boton de borrar
            var miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miContenedor.appendChild(miNodoImagen);
            miContenedor.appendChild(miNodo);
            miContenedor.appendChild(miBoton);
            $carrito.appendChild(miContenedor);
        })
    }

    function borrarItemCarrito () {
        console.log()
        // Obtenemos el producto ID que hay en el boton pulsado
        var id = this.getAttribute('item');
        // Borramos todos los productos
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
        //Contamos de nuevo los items
        contarItems();
        //Renderizamos de nuevo el boton
        renderizarBtnCarro();
    }

    function calcularTotal () {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (var item of carrito) {
            // De cada elemento obtenemos su precio
            var miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['price'];
        }
        // Formateamos el total para que solo tenga dos decimales
        var totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }

    function contarItems () {

        if (carrito.length == null || carrito.length == 0) {
            numeroUnidadesItem = carrito.length;
        } else {
            //Reccoremos el array del carrito
           for (var item of carrito) {
            // Guardamos en la variable el número de productos que hay en el carro
            numeroUnidadesItem = carrito.length;
        }
        }
    }

    function renderizarBtnCarro () {
        // Vaciamos todo el html
        $botonCarrito.textContent = '';
        // Creamos el nodo del item del carrito
        var miTotal = document.createElement('span');
        miTotal.classList.add('numero-indicador-items');
        //Creamos el nodo de texto
        miTotal.textContent = numeroUnidadesItem;
        //Modificamos el DOM
        $botonCarrito.appendChild(miTotal);
    }
    // Eventos

    // Inicio
    renderItems();

  }).catch(function(error){
      console.log("El error fue: " + error);
  });
}
