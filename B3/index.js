function inputArray() {
    let a = document.getElementById("array").value.split(',').map(Number);
    document.getElementById("displayArray").innerText = a.join(', ');
}

function isPrime(n) {
    if (n <= 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPrimesFromArray() {
    let x = document.getElementById("array").value.split(',').map(Number);
    let c = x.filter(isPrime);
    document.getElementById("displayPrimes").innerText = c.join(', ');
}