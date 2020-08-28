window.onerror = function(e) {
  console.log('全局错误', e);
}

window.addEventListener('error', (error) => {
  console.log('捕获到异常：', error);
}, true)

// a
try {
  throw 'error'
} catch(e) {
  console.log(e, '1');
}

try {
  try {
    throw 'error'
  } catch(e) {
    console.log(e, '2');
  }
} catch(e) {
  console.log(e, '3');
}

try {
  try {
    throw 'error'
  } catch(e) {
    console.log(e, '4');
    throw e;
  }
} catch(e) {
  console.log(e, '5');
}

try {
  new Promise((resolve, reject) => {
    console.log(ccc);
    throw 6
  })
} catch(e) {
  console.log(e, '6');
}

try {
  Promise.reject('error');
} catch (e) {
  console.log(e, '7');
}

try {
  Promise.reject('error').catch(e => {
    console.log(e, '8');
  })
} catch(e) {
  console.log(e, '9');
}

async function b() {
  try {
    await Promise.reject('error')
  } catch(e) {
    console.log(e, '10');
  }
}

await b();

window.addEventListener('unhandledrejection', function(e) {
  console.log('unhandledrejection', e);
});

Promise.resolve(123).then(() => {
  return 123
}).catch((e) => {
  console.log(e);
  return e
}).then((e) => {
  console.log(e);
})

console.log('async')
// 1 2 4 5 6 8 10