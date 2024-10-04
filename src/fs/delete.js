import fs from 'node:fs/promises';

const remove = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = `${__dirname}/files/fileToRemove.txt`;

  try {
    await fs.rm(targetPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
