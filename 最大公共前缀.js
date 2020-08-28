// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 

/**
 * @param {string[]} strs
 * @return {string}
 */
// 纵向搜索
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }
  const first = strs[0];
  let result = '';
  for (let i = 0;i < first.length;i++) {
    const temp = first.substr(0, i + 1);
    const arr = [first];

    for (let j = 1; j< strs.length; j++) {
      const cur = strs[j];
      if (cur.indexOf(temp) === 0) {
        arr.push(cur);
      }

      if (j === strs.length -1 && arr.length === strs.length) {
        result = temp;
      }
    }
  }
  return result;
};
