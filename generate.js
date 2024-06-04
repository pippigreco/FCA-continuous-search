const faker = require('faker');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Load the global parameters n and m from config.js
const { n, m } = require('./config.js');

function generateData() {
    let data = [];
    for (let i = 0; i < n; i++) {
        let row = {};
        for (let j = 0; j < m; j++) {
            row[`column${j}`] = faker.random.word();
        }
        data.push(row);
    }
    return data;
}

function writeDataToCsv(data) {
    const csvWriter = createCsvWriter({
        path: 'data.csv',
        header: Object.keys(data[0]).map(key => ({id: key, title: key})),
    });

    csvWriter.writeRecords(data)
        .then(() => console.log('The CSV file was written successfully'));
}

const data = generateData();
writeDataToCsv(data);
