function substrings (string) {
	var ob = {};
	for (var i = 0; i < string.length; i++) {
		for (var j = i+1; j < string.length + 1; j++) {
			ob[string.substring(i, j)] = true;
		}
	}
	return Object.keys(ob).sort();
}