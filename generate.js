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

function writeDataToCsv(data) {
    if (data.length === 0) {
        console.error('No data to write to CSV');
        return;
    }

    const csvWriter = createCsvWriter({
        path: 'data.csv',
        header: Object.keys(data[0]).map(key => ({id: key, title: key})),
    });

    csvWriter.writeRecords(data)
        .then(() => console.log('The CSV file was written successfully'));
}

data = generateDataAndWriteToCsv();
x = rankObjects(data);
writeDataToCsv(data);
