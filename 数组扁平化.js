var arr1 = [1,[1,2,3],[1,2,3]];

var func = function(arr1) {
  return arr1.toString().split(',');
}
console.log(func(arr1));

function func2(arr) {
  while(arr.some(item=>Array.isArray(item))) {
      arr = [].concat(...arr);
  }
  return arr;
}

console.log(func2(arr1));
