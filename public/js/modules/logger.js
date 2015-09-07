var logger = {
	methods : {
		info : function(text, component, id) {
			console.log('%c' + text + ', module ' + component + ', id ' + id , 'color: darkblue');
		}
	}	
}

module.exports = logger.methods;

