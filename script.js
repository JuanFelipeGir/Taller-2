let productos = [];

function agregarProducto() {
  let producto = document.getElementById('producto').value;
  let cantidad = document.getElementById('cantidad').value;

  let nuevoProducto = {
    nombre: producto,
    cantidad: cantidad
  };

  productos.push(nuevoProducto);

  document.getElementById('producto').value = '';
  document.getElementById('cantidad').value = '';

  mostrarProductos();
}
function calcularTotal() {
    let total = 0;
  
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];
      total += producto.cantidad * 10; // Aquí asumimos que cada producto cuesta $10
    }
  
    let pTotal = document.getElementById('total');
    pTotal.innerText = 'Total a pagar: $' + total;
  }
  