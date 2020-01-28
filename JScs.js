//JS

function diff(first, second) {
	if ((second > 360 || second < 0) || (first > 360 || first < 0)) {
		result = "Error wrong angle";
	} else if (first > second ){
		result = first - second;
	} else if (second >= first) {
		result = second - first;
	} 
	return result;
};


console.log(diff(260, 120)); 