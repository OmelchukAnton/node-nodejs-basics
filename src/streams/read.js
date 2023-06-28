import { createReadStream } from 'node:fs';

const read = async () => {
  const readableStream = createReadStream('files/fileToRead.txt');

  readableStream.on('data', (chunk) => {
    console.log(chunk);
  });
};

await read();
