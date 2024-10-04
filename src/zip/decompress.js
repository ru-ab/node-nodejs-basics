import zlib from 'node:zlib';
import stream from 'node:stream';
import fs from 'node:fs';

const decompress = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = `${__dirname}/files/archive.gz`;
  const targetPath = `${__dirname}/files/fileToCompress.txt`;

  const gunzip = zlib.createGunzip();
  const source = fs.createReadStream(sourcePath);
  const target = fs.createWriteStream(targetPath);

  stream.pipeline(source, gunzip, target, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

await decompress();
