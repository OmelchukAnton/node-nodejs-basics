import { existsSync, renameSync } from 'node:fs';

const rename = async () => {
  if (!existsSync('files/wrongFilename.txt') || existsSync('files/properFilename.md')) {
    try {
      throw Error('FS operation failed');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    renameSync('files/wrongFilename.txt', 'files/properFilename.md');
  }
};

await rename();
