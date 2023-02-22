function findPrimes(n) {
    let primes = [];
  
    // Создаём список чисел от 2 до n
    let numbers = [];
    for (let i = 2; i <= n; i++) {
      numbers.push(i);
    }
  
    // Зачёркиваем кратные числа
    while (numbers.length > 0) {
      let prime = numbers.shift();
      primes.push(prime);
  
      numbers = numbers.filter(function(num) {
        return num % prime !== 0;
      });
    }
  
    return primes;
  }
  
  // Пример использования
  let primes = findPrimes(10);
  console.log(primes); 