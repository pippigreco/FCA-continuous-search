console.log(`n: ${n}, m: ${m}`);

function generateDataAndWriteToCsv() {
    let data = [];
    for (let i = 0; i < m; i++) {
        let row = {};
        for (let j = 0; j < n; j++) {
            row[`a${j+1}`] = Math.round(Math.random());
        }
        data.push(row);
    }
    return data;
}

data = generateDataAndWriteToCsv();
x = rankObjects(data);
