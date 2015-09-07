var eventer = {
	callback : {},
	methods : {
		on : function (event, cb, id) {
			eventer.callback[event] = eventer.callback[event] || [];
			eventer.callback[event].push(cb);
		},
		emit : function (event) {
			for (var i in eventer.callback[event]) {
				eventer.callback[event][i]();
			}
		}
	}
}

module.exports = eventer.methods;