function categorizeNumber(input) {
    if (typeof input !== 'number') {
      throw new Error('Input harus berupa bilangan bulat');
    }
  
    if (input === 0) {
      return 'Nol';
    }
  
    if (input < 0) {
      return 'Negatif';
    }
  
    if (isPrime(input)) {
      return 'Prima';
    }
  
    if (input % 2 === 0) {
      return 'Genap';
    } else {
      return 'Ganjil';
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
  } catch (error) {
    console.log(error.message);
  } // Output: "Input harus berupa bilangan bulat"
  
  