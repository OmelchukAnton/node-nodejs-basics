import { Transform, pipeline } from 'stream';
import { StringDecoder } from 'string_decoder';

const transform = async () => {
  const decoder = new StringDecoder();

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      chunk = decoder.write(chunk).trim();
      chunk = chunk.split('').reverse().join('');
      callback(null, chunk);
    },
  });

  pipeline(process.stdin, reverse, process.stdout);
};

await transform();
