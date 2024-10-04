import fs from 'node:fs';
import process from 'node:process';

const read = async () => {
  const __dirname = import.meta.dirname;
  const dirSource = `${__dirname}/files/fileToRead.txt`;

  const rr = fs.createReadStream(dirSource);
  rr.on('data', (chunk) => process.stdout.write(chunk + '\n'));
};

await read();
