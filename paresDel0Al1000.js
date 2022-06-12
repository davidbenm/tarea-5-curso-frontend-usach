const numerosPares = (n) => { // n define hasta qué número se desea mostrar los pares
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) { // comprobar paridad verificando el resto de la división entre 2
            console.log(i);
        }
    }
}

numerosPares(1000);