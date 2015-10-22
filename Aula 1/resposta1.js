function maisFrequente(array) {
	if (array == undefined || array == null)
		return undefined
	var freqs = {}
	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		if (freqs.hasOwnProperty(item))
			freqs[item] ++;
		else
			freqs[item] = 1;
	}
	var freq = 0;
	var resp = undefined;
	for (var item in freqs) {
		if (freqs[item] > freq) {
			freq = freqs[item];
			resp = item;
		}
	}
	return {resp: resp, freq: freq}
}