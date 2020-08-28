const root = {
  val: "-",
  left: {
      val: '+',
      left: {
          val: 'a',
      },
      right: {
          val: '*',
          left: {
              val: 'b',
          },
          right: {
              val: 'c',
          }
      }
  },
  right: {
      val: '/',
      left: {
          val: 'd',
      },
      right: {
          val: 'e',
      }
  }
}

//      1
//   2     3
// 4          5  
//   6
// 7   8

// 先序 遍历递归 遍历二叉树
function preorder(root, arr = []){
  //递归基
  if(!root) return;
  arr.push(root.val);
  preorder(root.left, arr);
  preorder(root.right, arr);

  return arr;
}

console.log('递归先序遍历', preorder(root));


function preorder2(root) {
  const stack = [root];
  const result = [];

  while(stack.length) {
    const temp = stack.pop();

    if (temp) {
      result.push(temp.val);
      stack.push(temp.right);
      stack.push(temp.left);
    }
  }
  return result;
}

console.log('非递归先序遍历', preorder2(root));

// 中序遍历二叉树
function midorder(root, arr = []) {
  if (root) {
    midorder(root.left, arr);
    arr.push(root.val);
    midorder(root.right, arr);
  }
  return arr;
}

console.log('递归中序遍历', midorder(root));

function midorder2(root) {
  if (root) {
    const stack = [root];
    const result = [];
    let node = root;

    while(stack.length || node) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        result.push(node.val);
        node = node.right;
      }
    }

    return result;
  }
}

console.log('非递归中序遍历', midorder2(root));

function beforeorder(root, arr = []) {
  if (!root) return;
  beforeorder(root.right, arr);
  beforeorder(root.left, arr);
  arr.push(root.val);

  return arr;
}

console.log('递归后序遍历', beforeorder(root));

function beforeorder2(root, arr = []) {
  if (root) {
    const stack = [root];
    const result = [];

    while(stack.length || node) {
      
    }
  }

  return arr;
}

function cengjiorder(root, arr = [], count = 0, stack = []) {
  if (root) {
    if (count === 0) {
      stack = [root];
    }

    const node = stack[count];
    if (node) {
      count++;

      arr.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      cengjiorder(root, arr, count, stack);
    }

    return arr;
  }
}

console.log('广度优先遍历', cengjiorder(root));

var check = function(p, q) {
  console.log(p, q);
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
};

console.log('对称二叉树', check(root, root));

var add = (...args) => {
  var x = args.reduce((acc, cur) => {
    acc += acc;
    return acc;
  }, 0);

  return function (y) {
    console.log(x);
    return args.reduce((acc, cur) => {
      acc += acc;
      return acc;
    }, x)
  }
}

var add = function() {
  var temp = Array.prototype.slice.call(arguments);;

  var adder = function () {
    temp.push(...arguments);
    return adder;
  }

  adder.toString = function () {
    return temp.reduce(function (a, b) {
        return a + b;
    });
  }

  return adder;
}

add(1)(2)(3)
add(1, 2, 3)(4)
add(1)(2)(3)(4)(5)
