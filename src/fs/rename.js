import fs from 'node:fs/promises';

const isPathExists = async (targetPath) => {
  try {
    await fs.access(targetPath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = `${__dirname}/files/wrongFilename.txt`;
  const targetPath = `${__dirname}/files/properFilename.md`;

  if (!(await isPathExists(sourcePath)) || (await isPathExists(targetPath))) {
    throw new Error('FS operation failed');
  }

  await fs.rename(sourcePath, targetPath);
};

await rename();
