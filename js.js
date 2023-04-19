let numeros = [];

function calcular() {
	// Obtener los valores ingresados por el usuario
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let num3 = parseInt(document.getElementById("num3").value);
	let num4 = parseInt(document.getElementById("num4").value);

	// Verificar que no haya números iguales
	if (num1 == num2 || num1 == num3 || num1 == num4 || num2 == num3 || num2 == num4 || num3 == num4) {
		document.getElementById("resultado").innerHTML = "Los números ingresados deben ser distintos.";
		return;
	}

	// Guardar los números en un arreglo
	numeros = [num1, num2, num3, num4];

	// Encontrar el número mayor y menor
	let mayor = numeros[0];
	let menor = numeros[0];
	for (let i = 1; i < numeros.length; i++) {
		if (numeros[i] > mayor) {
			mayor = numeros[i];
		}
		if (numeros[i] < menor) {
			menor = numeros[i];
		}
	}

	// Mostrar el resultado
	document.getElementById("resultado").innerHTML = "El número mayor es " + mayor + " y el número menor es " + menor + ".";

	// Eliminar el número mayor del arreglo
	numeros.splice(numeros.indexOf(mayor), 1);
}