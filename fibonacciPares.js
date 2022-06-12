// Inicializa el arreglo que contendrá la secuencia de Fibonacci
let output = [];
// Inicializa un arreglo para guardar los números de Fibonacci pares
let pairOutput = [];

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
    // A partir de la secuencia obtenida, se verifica cuáles números son pares y se incorporan al arreglo de pares inicializado
    for (const number of output) {
        if (number % 2 === 0) {
            pairOutput.push(number);
        }
    }
    console.log("La secuencia de números pares de Fibonacci hasta el número " + n + " es: " + pairOutput + ".");
}

fibonacciGenerator(1000);