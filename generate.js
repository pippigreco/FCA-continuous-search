console.log("generate.js loaded");

function generateData() {
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

data = generateData();
console.log(data);
