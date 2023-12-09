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

        function addPrimeNumbersToContainer(n) {

    let primes = [];
    for (let i = 1; i <= n; i++) {

        if (isPrime(i)) {

        primes.push(i);
        }
    }

    const ul = document.createElement('ul');
    primes.forEach(prime => {

        const li = document.createElement('li');
        li.textContent = prime;
        ul.appendChild(li);
    });

    primeNumbersContainer.innerHTML = '';
    primeNumbersContainer.appendChild(ul);
    }

    addPrimeNumbersToContainer(20);

    alert('Prime number calculation is complete!');
});