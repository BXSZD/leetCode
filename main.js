/*
	给定一个字符串，找出不含有重复字符的最长子串的长度。

	示例：

	给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

	给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

	给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
	
*/
function deWeighting(str) {
	return Array.from(new Set(str.split(''))).length === str.length;
}
function lengthOfLongestSubstring(str){
	const res = str;
	let temp = '';
	let maxlength = 0;
	for (let j =0; j < str.length; j++){
		temp ='';
		for (let i = j;i < str.length;i++) {
			if(temp.indexOf(str[i]) > -1)break;
			temp += str[i];
			if (res.indexOf(temp) > -1 && temp.length > maxlength) {
				maxlength = temp.length;
			}
		}
	}
	return maxlength;
}


/*
	
	给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

	请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

	你可以假设 nums1 和 nums2 均不为空。
*/
const findMedianSortedArrays = function(nums1, nums2) {
	Array.prototype.push.apply(nums1,nums2);
	const arr = nums1.sort((a, b) => {
		return a > b;
	});
	console.log(arr);
	const length = arr.length;
	if(length % 2 === 0) {
		return (arr[length / 2 - 1] + arr[length / 2])/2;
	} else {
		return arr[Math.ceil(length / 2) - 1];
	}
}


/*
	3 
	给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
*/
var isSame = function(str) {
	let temp = str.split('').reverse().join('');
	return temp === str;
}
var longestPalindrome = function(s) {
	let maxlength = 0;
	let res = '';
	for (let j = 0;j< s.length;j++) {
		temp = '';
		for (let i = s.length -1;i< s.length;i--) {
			temp = s.substring(j, i + 1);
			if(temp.length <= maxlength) break;
			if (s[i] === s[j]) {
				if (isSame(temp) && temp.length > maxlength) {
					res = temp;
					maxlength = temp.length;
				}
			}
		}
	}
	return res;
};
var params = "mwwfjysbkebpdjyabcfkgprtxpwvhglddhmvaprcvrnuxifcrjpdgnktvmggmguiiquibmtviwjsqwtchkqgxqwljouunurcdtoeygdqmijdympcamawnlzsxucbpqtuwkjfqnzvvvigifyvymfhtppqamlgjozvebygkxawcbwtouaankxsjrteeijpuzbsfsjwxejtfrancoekxgfyangvzjkdskhssdjvkvdskjtiybqgsmpxmghvvicmjxqtxdowkjhmlnfcpbtwvtmjhnzntxyfxyinmqzivxkwigkondghzmbioelmepgfttczskvqfejfiibxjcuyevvpawybcvvxtxycrfbcnpvkzryrqujqaqhoagdmofgdcbhvlwgwmsmhomknbanvntspvvhvccedzzngdywuccxrnzbtchisdwsrfdqpcwknwqvalczznilujdrlevncdsyuhnpmheukottewtkuzhookcsvctsqwwdvfjxifpfsqxpmpwospndozcdbfhselfdltmpujlnhfzjcgnbgprvopxklmlgrlbldzpnkhvhkybpgtzipzotrgzkdrqntnuaqyaplcybqyvidwcfcuxinchretgvfaepmgilbrtxgqoddzyjmmupkjqcypdpfhpkhitfegickfszermqhkwmffdizeoprmnlzbjcwfnqyvmhtdekmfhqwaftlyydirjnojbrieutjhymfpflsfemkqsoewbojwluqdckmzixwxufrdpqnwvwpbavosnvjqxqbosctttxvsbmqpnolfmapywtpfaotzmyjwnd"
console.time();
console.log(longestPalindrome(params));
console.timeEnd();
/*
	链表 1 两数之和
*/
var sum = function(l1, l2) {
	l1 = l1.head;
	l2 = l2.head;
	let res = [];
	let next = l1;
	let next2 = l2;
	let i=sum = 0;
	let flag = false;
	while(next || next2) {
		let val1;
		if (next === null) {
			val1 = 0;
		} else {
			val1 = next.val;
			next = next.next;
		}
		if (next2 === null) {
			val2 = 0;
		} else {
			val2 = next2.val;
			next2 = next2.next;
		}
		if (flag) {
			res.push((val1 + val2 + 1) % 10 );
		} else {
			res.push((val1 + val2) % 10);
		}
		if(((val1 + val2) + (flag ? 1 : 0))>= 10) {
			flag = true;
		} else {
			flag = false;
		}
		if (next === null && next2 === null && flag) {
			res.push(1);
		}
	}
	return res;
}
function createLink(arr) {
	let link = new linkList();
	arr.forEach((item) => {
		link.append({
			val: item,
		});
	})
	return link;
}
function linkList() {
	this.head = null;
	return this.head;
}
linkList.prototype.append = function(newNode) {
	if (this.head === null){
		newNode.next = null;
		this.head = newNode;
	} else {
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		newNode.next = null;
		current.next = newNode;
	}
}
linkList.prototype.detele = function(index) {
	let i = 0;
	let begin = this.head;
	let end;
	while (begin.next) {
		console.log(i);
		if (i === index) {
			end = this.head;
		}
		if (!begin.next) {
			end.next = begin;
		} else {
			begin = begin.next;
		}
		if (end) {
			end = end.next;
		}
		i++;
	}
};
var link = createLink([1,2,3]);
link.detele(1);
console.log(link);
/*
	7 翻转整数
*/
var reverse = function(x) {
	let temp = x > 0 ? Math.pow(2, 31) - 1 : Math.pow(2, 31);
	let num = parseInt((x + '').split('').reverse().join(''));
	if( Math.abs(num) > temp) {
		return 0;
	} else {
		return x >= 0 ? num : -num;
	}
}
/*
	9 回文数判断
*/

var isPalindrome = function(x) {
	let temp = x + '';
	return temp.split('').reverse().join('') === temp
}
/*
	11 盛最多水容器
*/
var maxArea = function(height) {
	let max = 0;
	let l = height.length;
	let temp;
	for (let i = 0;i < l - 1;i++) {
		for (let j = l; j > i;j--) {
			temp = Math.min(height[i], height[j]) * (j - i);
			if (temp > max) {
				max = temp;
			}
		}
	}
	return max;
}
