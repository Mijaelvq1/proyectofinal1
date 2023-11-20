const carrito=document.getElementById("carrito");
const listaproductos=document.getElementById("lista-productos");
const contenedorCarrito=document.querySelector('.carro-compra .lista_de_productos');
const vaciarCarritoBtn=document.querySelector('#vaciar_carrito');
var pedidosbtn=document.querySelector("#pedidos");
let   articulosCarrito=[];

registrarEventsListeners()

function registrarEventsListeners() {
    //cuando yo le de click agregar producto xd"
    listaproductos.addEventListener('click' , agregarproducto)


    //eliminar producto del carrito
    carrito.addEventListener('click',eliminarProducto)

    //vaciar el carrito
    pedidosbtn.addEventListener("click",pedido)
    vaciarCarritoBtn.addEventListener('click', e=>{
    articulosCarrito=[];
    limpiarHTML()
})
}
function pedido(){
    window.location.href = '../html/login2.html';
}

function agregarproducto(e){
    if (e.target.classList.contains("agregar-carrito")){
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerInfo(productoSeleccionado)
}
}
//elimina un producto de un carrito
function eliminarProducto(e) {
    if (e.target.classList.contains("borrar-producto")){
        const productoId = e.target.getAttribute('data-id');
        //eliminar del arreglo articulos del carrito por el data-id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !==productoId)
        carritoHTML()
    }
    
}
//Leer el contenido del nuestro html al que le dimos click y extrer la iinfo
function leerInfo(producto) {
    // crear un objeto con el contenido dele producto actual
    const infoProducto = {
        imagen : producto.querySelector('img').src,
        titulo : producto.querySelector('h3').textContent,
        precio : producto.querySelector('.descuento').textContent,
        id : producto.querySelector('button').getAttribute('data-id'),
        cantidad : 1
    }

    //Revisa si un elemento ya existe en el carrito mija
    const existe=articulosCarrito.some(producto => producto.id === infoProducto.id)

    if (existe) {
        //actualizar la cantidad
        const producto=articulosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad++;
                return producto
            }else{
                return producto;
            }
        });   
   
        [...articulosCarrito,infoProducto]
    }else{
        //agregamos elementos a compras
    articulosCarrito=[...articulosCarrito,infoProducto]
    }
    carritoHTML()
    //console.log(articulosCarrito)
}

//muestra el carrito en html

function carritoHTML() {
    limpiarHTML()
    //recore eel carrito de compras y genera el html
    articulosCarrito.forEach(producto =>{
        const fila= document.createElement('div');
        fila.innerHTML=`
        <img src="${producto.imagen}"></img>
        <p>${producto.titulo}</p>
        <p>${producto.precio}</p>
        <p>${producto.cantidad}</p>
        <p><span class="borrar-producto"  data-id="${producto.id}">X</span></p>
      `;

      contenedorCarrito.appendChild(fila)
    });
}

// elimina los productos de la lista-productos
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)   
    } 
}




