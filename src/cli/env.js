import { env } from 'node:process';

const parseEnv = () => {
  const displayArr = [];
  for (const [key, value] of Object.entries(env)) {
    if (key.includes('RSS_')) {
      displayArr.push(`${key}=${value}`);
    }
  }

  console.log(displayArr.join('; '));
};

parseEnv();
