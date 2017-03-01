//method 1
Array.prototype.unique = function(){
	var res = [],
		json = {};
	for ( var i = 0, length = this.length; i < length; i ++) {
		if (!json[this[i]]) {
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;

}
var arr = [112,112,34,'你好',112,112,34,'你好','str','str1',NaN,NaN];
alert(arr.unique());



//method 2
function unique(arr) {
	var res = [];
	arr.forEach(function(item){
		if (res.indexOf(item) === -1) {
			res.push(item);
		}
	});
	return res;
}
var arr = [112,112,34,'你好',112,112,34,'你好','str','str1',NaN,NaN];
alert(unique(arr));//这种方法不能去除NaN


//method 3
Array.prototype.unique1 = function(){
	var res = [this[0]];
	for(var i = 1; i < this.length; i++){
		var repeat = false;
		for(var j = 0; j < res.length; j++){
			if(this[i] === res[j] || (this[i]!==this[i]&&res[j]!==res[j])){
				repeat = true;
				break;
			}
		}
		if(!repeat){
			res.push(this[i]);
		}
	}
	return res;
}
var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0,NaN,NaN];
alert(arr.unique1());