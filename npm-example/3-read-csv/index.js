import { open } from 'node:fs/promises';
import csv from 'csv-parser';

const basePath = process.cwd();
const csvPath = [basePath, '3-read-csv', 'sample.csv'];
const path = csvPath.join('/');
console.log({ path });

const fd = await open(path);
const stream = fd.createReadStream().pipe(csv());

const result = [];

for await (const row of stream) {
  result.push(row);
}

console.log(result);
