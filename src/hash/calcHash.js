import { readFileSync } from 'node:fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const buff = readFileSync('files/fileToCalculateHashFor.txt');
  const hashHex = createHash('sha256').update(buff).digest('hex');

  console.log(hashHex);
};

await calculateHash();
