const args = process.argv.slice(2);

let timer = function(array) {
  let timeout = 0;

  for (let arg of array) {
    let argN = Number(arg);
    if (argN >= 0 && !isNaN(argN)) {
      setTimeout(() => {
        process.stdout.write(`${argN}\x07\n`);
      }, timeout = (argN * 1000));
    } timeout;
  }
};

timer(args);