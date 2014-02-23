var sequence = [];
sequence.push(1,2);
var sum = 0;


document.write("length of array = "+sequence.length+"<br>");
for (i=0; i <= 50; i+=1) {
	sequence.push(sequence[i]+sequence[i+1]);
	document.write(sequence[i]+"<br>");
	document.write("length of array ="+sequence.length+"<br>")
	if (sequence[i]%2 === 0) {
		sum = sum + sequence[i];
		if (sum > 4000000) {
			document.write("sum of even numbers = "+sum+"<br>");
			return sum;
		}
	};	
};	

