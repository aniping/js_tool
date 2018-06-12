<script type="text/javascript">
	
	//类型判断
	function type(target){
		var objStr = {
			'[object Object]' :'object-Object',
			'[object Array]' :'array-Object',
			'[object Number]' :'number-Object',
			'[object Boolean]' :'boolean-Object',
			'[object String]' :'string-Object'
		},
		toStr = Object.prototype.toString,
		ret = typeof target;
		if (target === null)
			return 'null';
		if(ret == 'object')
			return objStr[toStr.call(target)];
		else
			return ret;

	}

	//数组去重
	Array.prototype.unique = function (){
		var obj ={}, 
		arr = [],
		len = this.length;
		for(var i = 0; i < len; i ++){
			if(!obj[this[i]]){
				obj[this[i]] = 'y';
				arr.push(this[i]);
			}
		}
		return arr;
	}


	//字符串去重

	String.prototype.unique = function (){
		var str = {},
		len = this.length,
		newStr = '';
		for(var i = 0; i < len; i ++){
			if(!str[this[i]]){
				str[this[i]] = 'y';
				newStr += this[i];
			}
		}
		return newStr;
	}




</script>