var tree = [
  {
    id: 5,
    text: '1',
  },
  {
    id: 1,
    text: '1',
  },
  {
    id: 2,
    text: '2',
    parent: 1,
  }, {
    id: 3,
    text: '3',
    parent: 2,
  }, {
    id: 4,
    text: '4',
    parent: 4,
  }
]

function getTree(tree) {
  const obj = {};
  tree.map(item => {
    const id = item.id;

    obj[item.id] = item;
  });
  for (let i = 0; i< tree.length; i++) {
    tree[i] = ;
  }
}
