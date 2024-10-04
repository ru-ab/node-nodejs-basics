import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const modulePath = `${__dirname}/files/script.js`;

  const child = spawn('node', [modulePath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
