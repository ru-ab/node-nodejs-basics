import fs from 'node:fs/promises';

const list = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = `${__dirname}/files`;

  try {
    const files = await fs.readdir(targetPath);
    files.forEach((file) => console.log(file));
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
