import { argv } from 'node:process';

const parseArgs = () => {
  const displayArr = [];
  argv.forEach((val, index) => {
    displayArr.push(`prop${index === 0 ? '' : index + 1}Name is value ${val}`);
  });

  console.log(displayArr.join(', '));
};

parseArgs();
