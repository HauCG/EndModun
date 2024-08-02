function addString() {
    let a = document.getElementById("string").value;
    document.getElementById("displayString").innerText = a;
}

function countUpperWord() {
    let b = document.getElementById("string").value;
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= 'A' && b[i] <= 'Z') {
            count++;
        }
    }
    if (count > 0) {
        document.getElementById("displayCountUpperWords").innerText = "Count of uppercase letters: " + count;
    } else {
        document.getElementById("displayCountUpperWords").innerText = "The string doesn't contain upper char .";
    }
}