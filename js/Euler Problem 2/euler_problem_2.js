var sum_of_even_numbers = function(max){
	var sequence = [];
	sequence.push(0,1,0);
	var sum = 0;
	

	while(sequence[2] <= max){
		sequence[2] = sequence[0] + sequence[1];
		if (sequence[2]%2 === 0 && sequence[2] <=max){
			sum += sequence[2];
			document.write("running total of even's = "+sum+"<br><br>");	
		}
			sequence[0]=sequence[1];
			sequence[1]=sequence[2];
			
	}
	document.write("sum_of_even_numbers = "+sum);
	return sum;
};

sum_of_even_numbers(4000000);
