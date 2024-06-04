// Main algorithm implementation will go here
console.log("main.js loaded");

function rankObjects(data) {
    let x = [];
    for (let row of data) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += c[i] * row[i];
        }
        x.push(sum);
    }
    return x;
}

