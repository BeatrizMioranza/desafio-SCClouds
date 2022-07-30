function numerosPrimos(n) {
  let numeros = [], i, j, primo = [];
  for (let i = 2; i <= n; ++i) {
      if (!numeros[i]) {
          primo.push(i);
          for (j = i << 1; j <= n; j += i) {
              numeros[j] = true;
          }
      }
  }
  return primo;
}

console.log(numerosPrimos(2));
console.log(numerosPrimos(3));
console.log(numerosPrimos(10));
