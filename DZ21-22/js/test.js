var app = {
	pow: function(x, n) {
	if (x == 0 && n == 0) {return res = 'NaN'}
		var res = 1;
		for (var i = 0; i < Math.abs(n); i++) {
		res = res*x;
		}
	if(n < 0) {
		return 1/res;
		} else {
		return res;
		}
	return false;
	},
	nod: function(x, n) {
    x=Math.abs(x); n=Math.abs(n);
    while(x&&n)
		if (x >= n) {
		x %= n;
		}else{
		n %= x;
		}
    return x||n
}
}
try {
	module.exports.app = app; 
} catch (e) {}
