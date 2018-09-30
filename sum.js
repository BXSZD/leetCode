/*
	两数之和
*/
function getSum(arr,sum) {
	
}
var obj = {
	data: {
		b: 2,
		c: 3,
	},
	computed: {
		a: function() {
			return this.b;
		},
	}
}
var Vue = function (obj) {
	this._watcher = Object.create(null);
	let computed = obj.computed;
	for (x in obj.data) {
		let temp = obj.data[x];
		Object.defineProperty(obj.data, x, {
			set: function (newVal) {
				console.log(newVal);
				return newVal;
			},
			get:function() {
				console.log(arguments.callee, this);
				return temp;
			}
		})
	}
}
var app = new Vue(obj);
var template = obj.data.b;
var template2 = obj.data.c;
console.log(template, template2);
/*
	var obj = {
		a: [
			{
				b: {
					c: '1',
				}
			}
		]
	}
	path: a.b.c
*/
function get(object, path, defaultValue = '') {
	var temp = path.split('.');
	var res;
	while(temp.length > 0) {
		if(object[temp[0]]=== undefined) {
			return defaultValue;
		} else {
			res = object[temp[0]];
			temp.shift();
		}
	}
	return res;
}