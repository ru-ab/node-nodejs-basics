import process from 'node:process';
import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = [...chunk.toString()].reverse().join('');
      callback(null, reversed + '\n');
    },
  });

  process.stdout.write(
    'Please enter some data (Ctrl+C or Ctrl+D to exit):' + '\n'
  );

  pipeline(process.stdin, reverse, process.stdout, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

await transform();
