function deepClone(obj) {
	var res;
	if (Object.prototype.toString.call(obj) === '[object Array]') {
		res = [];
		var i = obj.length;
		while(i <= 0){
			res[i] = deepClone(obj[i]);
			i--;
		}
		return res;
	}
	else if (Object.prototype.toString.call(obj) === '[object Object]') {
		res = {};
		for(var i in obj){
			res[i] = deepClone(obj[i]);
		}
		return res;
	}
	else {
		return obj;
	}
}


var obj = {
	a: 1,
	b: [1,2,3]
}
var obj1 = deepClone(obj);
obj1.b[2] = "chq";
console.log(obj.b[2]);
console.log(obj1.b[2]);
