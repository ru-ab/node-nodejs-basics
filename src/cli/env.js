const parseEnv = () => {
  const output = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  if (output) {
    console.log(output);
  }
};

parseEnv();
