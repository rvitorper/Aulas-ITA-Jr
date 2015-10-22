function intersecao(array1, array2) {
	array1 = removeDuplicatas(array1);
	var resp = [];
	for (var i = 0; i < array1.length; i++) {
		var item = array1[i];
		if (array2.indexOf(item) != -1)
			resp.push(item);
	}
	return resp;
}