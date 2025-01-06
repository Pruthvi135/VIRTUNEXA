// script.js
document.getElementById('factorialForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const numberInput = document.getElementById('numberInput').value;
    const method = document.querySelector('input[name="method"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (numberInput === '' || isNaN(numberInput) || numberInput < 0) {
        resultDiv.textContent = 'Please enter a valid positive integer.';
        resultDiv.style.color = 'red';
        return;
    }

    const number = parseInt(numberInput, 10);
    let result;

    if (method === 'iterative') {
        result = factorialIterative(number);
        resultDiv.textContent = `Factorial (Iterative) of ${number} is ${result}.`;
    } else {
        result = factorialRecursive(number);
        resultDiv.textContent = `Factorial (Recursive) of ${number} is ${result}.`;
    }

    resultDiv.style.color = 'green';
});

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
