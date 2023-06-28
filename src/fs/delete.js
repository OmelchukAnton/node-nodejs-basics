import { existsSync, unlinkSync } from 'node:fs';

const remove = async () => {
  const path = 'files/fileToRemove.txt';

  if (!existsSync(path)) {
    try {
      throw Error('FS operation failed');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    unlinkSync(path);
  }
};

await remove();
