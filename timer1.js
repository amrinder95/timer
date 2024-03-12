const arg = process.argv.slice(2);
const test = ["Hello"];

const timer = (array) => {
  for(let element of array) {
    if (element > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, element * 1000);
    }
    if(typeof element !== "number") {
      continue;
    }
  }
};

timer(arg);