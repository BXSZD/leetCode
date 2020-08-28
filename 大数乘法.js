function acc(x, y) {
  let sum = 0;
  for (let j= y.length - 1;j>=0; j--) {
    const diff = y.length - j - 1 ;
    if (diff === 0) {
      sum += y[j] * x;
    } else {
      sum += Math.pow(10, diff) * y[j] * x; 
    }
    console.log(sum, y[j], diff, x);
  }
  return sum;
}


function acc2 (x, y) {
  let sum = 0;
  const result = [];

  for (let j = y.length - 1;j >= 0; j--) {
    for (let i = x.length - 1; i >=0; i--) {
      const index = i + j;
      const index2 = i + j + 1;
      const mul = y[j] * x[i] + (result[index2] || 0);
      result[index] = (result[index] || 0) + (Math.floor(mul / 10));
      result[index2] = mul % 10;
    } 
  }
  return result.join(',');
}

console.log(acc('123123', '123'));
console.log(acc2('123123', '1234'));
