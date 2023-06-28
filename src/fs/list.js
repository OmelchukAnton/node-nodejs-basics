import { existsSync, readdirSync } from 'node:fs';

const list = async () => {
  const path = 'files';

  if (!existsSync(path)) {
    try {
      throw Error('FS operation failed');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    readdirSync(path).forEach((file) => {
      console.log(file);
    });
  }
};

await list();
