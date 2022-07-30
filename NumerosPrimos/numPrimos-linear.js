function numerosPrimos(n) {
    let numeros = new Array();
    for (let i = 0; i <= n; i++) {
      if (ehPrimo(i)){
        numeros.push(i);
      }
    }
    return numeros;
  }

  function ehPrimo(n) {
    for(let i = 2; i < n; i++)
      if(n % i === 0) {
          return false
      };
    return n > 1;
  }
  
  console.log(numerosPrimos(2));
  console.log(numerosPrimos(3));
  console.log(numerosPrimos(10));