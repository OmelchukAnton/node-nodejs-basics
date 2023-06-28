import { isMainThread, parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = (data) => {
  // This function sends result of nthFibonacci computations to main thread
  if (isMainThread) {
    const result = nthFibonacci(data);

    if (result !== undefined) {
      // If the computation is successful, send the result to the main thread
      parentPort.postMessage({ status: 'resolved', data: result });
    } else {
      // If there is an error in the computation, send an error status to the main thread
      parentPort.postMessage({ status: 'error', data: null });
    }
  }
};

sendResult();
