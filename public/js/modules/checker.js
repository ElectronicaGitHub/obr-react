var store = require('./store');

var checker = {
	methods : {
		check : function (cb) {
			var data = store.data();

			setTimeout(function () {
				data = checker.methods.makeAnswers(data);
				store.fullUpdate(data);

				cb && cb(data);
			}, 1000);
		},
		makeAnswers : function (data) {
			for (var i in data) {
				var component = data[i];
				if (component.state) {
					component.state.correct = 32;
				}
			}
			return data;
		}
	}
}
module.exports = checker.methods;
