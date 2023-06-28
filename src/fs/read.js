import { existsSync, readFileSync } from 'node:fs';

const read = async () => {
  const path = 'files/fileToRead.txt';

  if (!existsSync(path)) {
    try {
      throw Error('FS operation failed');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    console.log(readFileSync(path).toString());
  }
};

await read();
