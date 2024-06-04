console.log("generate.js loaded");

function generateRandomData() {
    let data = [];
    for (let i = 0; i < m; i++) {
        let row = {};
        for (let j = 0; j < n; j++) {
            row[j] = Math.round(Math.random());
        }
        data.push(row);
    }
    return data;
}

function generateData() {
    let data = [];
    for (let i = 0; i < 8; i++) {
        let row = {};
        for (let j = 0; j < n; j++) {
            row[j] = (i >> j) & 1;
        }
        data.push(row);
    }
    return data;
}

data = generateData();
console.log(data);
