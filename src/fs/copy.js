import { cp, access, constants } from 'node:fs/promises';

const isPathExists = async (targetPath) => {
  try {
    await access(targetPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const copy = async () => {
  const __dirname = import.meta.dirname;
  const dirSource = `${__dirname}/files`;
  const dirTarget = `${__dirname}/files_copy`;

  if (!(await isPathExists(dirSource)) || (await isPathExists(dirTarget))) {
    throw new Error('FS operation failed');
  }

  await cp(dirSource, dirTarget, { recursive: true });
};

await copy();
