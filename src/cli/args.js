const parseArgs = () => {
  const args = process.argv.slice(2);

  let output = [];
  for (let i = 0; i < args.length; ++i) {
    if (!args[i].startsWith('--')) {
      throw new Error(`Argument "${args[i]}" should start with "--".`);
    }

    if (i === args.length - 1 || args[i + 1].startsWith('--')) {
      throw new Error(`Value is missing for the argument "${args[i]}".`);
    }

    output.push(`${args[i].slice(2)} is ${args[++i]}`);
  }

  if (output.length > 0) {
    console.log(output.join(', '));
  }
};

parseArgs();
