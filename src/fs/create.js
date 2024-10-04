import { writeFile, access, constants } from 'node:fs/promises';

const isFileExists = async (filepath) => {
  try {
    await access(filepath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const create = async () => {
  const __dirname = import.meta.dirname;
  const filepath = `${__dirname}/files/fresh.txt`;

  if (await isFileExists(filepath)) {
    throw new Error('FS operation failed');
  }

  const content = 'I am fresh and young';
  await writeFile(filepath, content);
};

await create();
