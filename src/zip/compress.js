import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const handleStream = createReadStream('files/fileToCompress.txt');
  handleStream.pipe(createGzip()).pipe(createWriteStream('files/archive.gz'));
};

await compress();
