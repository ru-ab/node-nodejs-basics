import fs from 'node:fs';
import process from 'node:process';

const write = async () => {
  const __dirname = import.meta.dirname;
  const dirTarget = `${__dirname}/files/fileToWrite.txt`;

  process.stdout.write(
    'Please enter some data (Ctrl+C or Ctrl+D to exit):' + '\n'
  );

  const ws = fs.createWriteStream(dirTarget);
  process.stdin.pipe(ws);
};

await write();
