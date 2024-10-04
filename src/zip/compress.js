import zlib from 'node:zlib';
import stream from 'node:stream';
import fs from 'node:fs';

const compress = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = `${__dirname}/files/fileToCompress.txt`;
  const targetPath = `${__dirname}/files/archive.gz`;

  const gzip = zlib.createGzip();
  const source = fs.createReadStream(sourcePath);
  const target = fs.createWriteStream(targetPath);

  stream.pipeline(source, gzip, target, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

await compress();
