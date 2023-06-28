import { Worker } from 'worker_threads';

const performCalculations = async () => {};

const createWorker = (data) => {
  return new Promise((resolve) => {
    const worker = new Worker('./worker.js', { workerData: data });

    worker.on('message', (result) => {
      resolve(result);
    });

    worker.on('error', (error) => {
      resolve({ status: 'error', data: null });
    });
  });
};

const createWorkers = (numWorkers) => {
  const workers = [];

  for (let i = 0; i < numWorkers; i++) {
    const data = i + 10;
    const workerPromise = createWorker(data);
    workers.push(workerPromise);
  }

  return Promise.all(workers);
};

const numCores = require('os').cpus().length;
const numWorkers = numCores;

createWorkers(numWorkers)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

await performCalculations();
