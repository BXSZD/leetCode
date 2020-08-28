const add = fn =>
    judge = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...arg) => judge(...args, ...arg)

console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1,2)(3)());
