const faker = require('faker');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Load the global parameters n and m from config.js
const config = require('./config.js');
const n = config.n;
const m = config.m;
console.log(`n: ${n}, m: ${m}`);

function generateData() {
    let data = [];
    for (let i = 0; i < m; i++) {
        let row = {};
        for (let j = 0; j < n; j++) {
            row[`column${j}`] = faker.random.word();
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

const data = generateData();
writeDataToCsv(data);
