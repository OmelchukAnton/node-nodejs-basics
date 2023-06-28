import { createWriteStream } from 'node:fs';

const write = async () => {
  const writableStream = createWriteStream('files/fileToWrite.txt');

  process.stdin.on('data', (data) => {
    writableStream.write(data);
  });
};

await write();
