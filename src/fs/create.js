import { appendFile, existsSync, writeFile } from 'node:fs';

const create = async () => {
  const path = 'files/fresh.txt';

  if (existsSync(path)) {
    try {
      throw Error('FS operation failed');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    appendFile(path, 'I am fresh and young', () => {
      console.log('File is created successfully.');
    });
  }
};

await create();
