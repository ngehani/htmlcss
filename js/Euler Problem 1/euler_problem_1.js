var euler_1 = function() {
	sum = 0;
	for (var i=1; i < 1000; i+=1) {
    if ((i%3 === 0) || (i%5 === 0)) {
        sum = sum+i;
    }
	}
	return sum;
};
var result = document.write(euler_1());