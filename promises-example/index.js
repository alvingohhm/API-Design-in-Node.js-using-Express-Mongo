var action = function() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve('hey');
		},5000);
	})
};

action()
	.then(function(word){
		console.log(word);
	});