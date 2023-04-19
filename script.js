let productos = [];

function agregarProducto() {
  let producto = document.getElementById('producto').value;
  let cantidad = parseInt(document.getElementById('cantidad').value);
  let valor = parseInt(document.getElementById('valor').value);

  let nuevoProducto = {
    nombre: producto,
    cantidad: cantidad,
    valor: valor
  };

  productos.push(nuevoProducto);
  mostrarProductos();
}

function mostrarProductos() {
  let listaProductos = document.getElementById('lista-productos');
  listaProductos.innerHTML = '';

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let li = document.createElement('li');
    li.textContent = producto.nombre + ' - ' + producto.cantidad + ' - $' + producto.valor;
    listaProductos.appendChild(li);
  }
}

function calcularTotal() {
  let total = 0;

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    total += producto.cantidad * producto.valor;
  }

  let divTotal = document.getElementById('total');
  divTotal.innerHTML = 'Total a Pagar: $' + total;
}