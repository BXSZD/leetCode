function debounce (fn, delay, context) {
  let ins;

  return function (...args) {
    if (ins) {
      clearTimeout(ins);
    }

    ins = setTimeout(() => {
      fn.call(context || this, ...args);
    }, delay);
  }
}

const func = function () {
  console.log(1);
}

const fn = debounce(func, 1000, window);

for (let i=0;i< 4;i++) {
  fn();
}
