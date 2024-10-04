import crypto from 'node:crypto';
import fs from 'node:fs';
import process from 'node:process';

const calculateHash = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = `${__dirname}/files/fileToCalculateHashFor.txt`;

  const hash = crypto.createHash('sha256');
  const input = fs.createReadStream(sourcePath);

  input
    .pipe(hash)
    .setEncoding('hex')
    .on('data', (chunk) => process.stdout.write(chunk + '\n'));
};

await calculateHash();
