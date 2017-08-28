console.log('######## EJERCICIO 1 ########');

var arr_ints = [48, 2, 3, 64, 95, 6, 15, 99, 102, 135];
var arr_str = {};

for (i = 0; i < arr_ints.length; i++) {
	if(div_x_n(arr_ints[i], 3) || include_n(arr_ints[i], 3) ){
		arr_str[i] = "Fizz"; 		
	}

	if(div_x_n(arr_ints[i], 5) || include_n(arr_ints[i], 5) ){
		arr_str[i] = "Buzz"; 		
	}

	if(div_x_n(arr_ints[i], 3) && div_x_n(arr_ints[i], 5) ){
		arr_str[i] = "FizzBuzz";
	}

}

console.log(arr_ints);
console.log(arr_str);


function div_x_n(num, n){
	return ((!(num % n)) ? true : false);
}

function include_n(num, pattern){
	var numstr = num.toString();
 	return numstr.match(RegExp(pattern,"g"));
}