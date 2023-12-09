// Part 3: Deferred Execution
document.addEventListener('DOMContentLoaded', function() {

    const primeNumbersContainer = document.getElementById('primeNumbersContainer');

        function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return num > 1;
    }

    function renderPrimesIncrementally(n) {
    let count = 0;

    function renderNextPrime() {
        if (count <= n) {
        if (isPrime(count)) {
        
            primeNumbersContainer.textContent = `Current prime number: ${count}`;
        }
        count++;

        setTimeout(renderNextPrime, 0);
        } else {
    
        alert('Prime number calculation is complete!');
        }
    }

    renderNextPrime();
    }

    renderPrimesIncrementally(10000);
});