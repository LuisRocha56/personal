let montoTXT = document.getElementById("monto");
let gastoTXT = document.getElementById("gasto");
let gastos = [];
let mostrarArreglo = document.getElementById("mostrarArreglo");

function guardar(){
    let nuevoGasto = gastoTXT.value + ": $" + montoTXT.value;
    gastos.push(nuevoGasto); // push agrega elementos al arreglo

    // mostrar en consola
    console.log(gastos);

    // mostrar en pantalla
    mostrarArreglo.innerHTML = gastos;
}