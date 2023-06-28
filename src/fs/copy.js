import { existsSync, cpSync } from 'node:fs';

const copy = async () => {
  if (existsSync('files_copy')) {
    try {
      throw Error('FS operation failed');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    cpSync('files', 'files_copy', { recursive: true });
  }
};

await copy();
