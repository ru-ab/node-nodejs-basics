import { Worker } from 'node:worker_threads';
import os from 'node:os';

function createWorker(workerData) {
  const __dirname = import.meta.dirname;
  const workerScript = `${__dirname}/worker.js`;

  return new Promise((resolve, reject) => {
    const worker = new Worker(workerScript, { workerData });
    worker.on('message', (result) => resolve(result));
    worker.on('error', (msg) => reject(msg));
  });
}

const performCalculations = async () => {
  const cpus = os.cpus();
  const result = await Promise.all(
    cpus.map((_, i) => createWorker({ num: 10 + i }))
  );
  console.log(result);
};

await performCalculations();
