// Inicializa el arreglo que contendrá la secuencia de Fibonacci
let output = [];

const fibonacciGenerator = (n) => { // n define hasta qué número se desea mostrar la secuencia de Fibonacci
    if (n === 0) {
        output = [0];
    } else if (n === 1) {
        output = [0,1,1];
    } else {
        output = [0,1,1];
        // Obtener el nuevo número de la secuencia a partir de la suma de los dos últimos
        let newNumber;
        while ((output[output.length - 1] + output[output.length-2]) <= n) {
            newNumber = output[output.length-1] + output[output.length-2];
            output.push(newNumber);
        }
    } 
    console.log("La secuencia de Fibonacci hasta el número " + n + " es: " + output + ".");
}

fibonacciGenerator(1000);