import fs from 'node:fs/promises';

const read = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = `${__dirname}/files/fileToRead.txt`;

  try {
    const contents = await fs.readFile(targetPath, { encoding: 'utf-8' });
    console.log(contents);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
