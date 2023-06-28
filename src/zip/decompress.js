import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async () => {
  const handleStream = createReadStream('files/archive.gz');
  handleStream.pipe(createUnzip()).pipe(createWriteStream('files/fileToCompress.gz.txt'));
};

await decompress();
