function checkUnder21() {
    let arr = document.getElementById("array").value.split(',').map(Number);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            alert("Element has to be under 21.");
            return;
        }
    }
    document.getElementById("displayarray1").innerText = "Your Array is: " + arr.join(', ');
}

function addNumberIntoArray() {
    let arr = document.getElementById("array").value.split(',').map(Number);
    let number = parseInt(document.getElementById("numberToAdd").value);
    arr.push(number);
    document.getElementById("displayarray2").innerText = "Your Array after adding number is: " + arr.join(', ');
}

function sumOddArray() {
    let arr = document.getElementById("array").value.split(',').map(Number);
    let sum1 = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 !== 0) {
            sum1 += arr[j];
        }
    }
    document.getElementById("displayarraysum1").innerText = "Sum of odd numbers: " + sum1;
}

function sumEvenArray() {
    let arr = document.getElementById("array").value.split(',').map(Number);
    let sum2 = 0;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] % 2 === 0) {
            sum2 += arr[k];
        }
    }
    document.getElementById("displayarraysum2").innerText = "Sum of even numbers: " + sum2;
}

function result() {
    let arr = document.getElementById("array").value.split(',').map(Number);
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    let c = sumEven - sumOdd;
    document.getElementById("displayResult").innerText = "Sum of Even - sum of Odd = " + c;
}