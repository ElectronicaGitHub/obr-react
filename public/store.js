'use strict';

var $ = require('jquery');

var scope = {
	data : null
}
var store = {
	callback : {},
	methods : {
		data : function () {
			return scope.data.components;
		},
		getData : function (cb) {
			if (scope.data) cb(scope.data);
			setTimeout(function () {
				scope.data = json;
				cb && cb(scope.data);
			}, 1000);
		},
		fullUpdate : function (data) {
			scope.data.components = data;
			store.methods.emit('dataUpdate');
		},
		update : function (id, updates) {
			console.log('update', scope.data, id, updates);
			for (var i in scope.data.components) {
				if (scope.data.components[i].id == id) {
					scope.data.components[i].state = scope.data.components[i].state || {};
					scope.data.components[i].state = updates;
					store.methods.emit('dataUpdate');
				}
			}
		},
		on : function (event, cb, id) {
			store.callback[event] = store.callback[event] || [];
			if (id) {
				for (var i in scope.data.components) {
					if (scope.data.components[i].id == id) {
						store.callback[event].push(cb.bind(null, scope.data.components[i]));
					}
				}
			} else {
				store.callback[event].push(cb.bind(null, scope.data));
			}
		},
		emit : function (event) {
			for (var i in store.callback[event]) {
				store.callback[event][i]();
			}
		}
	}
}

module.exports = store.methods;

var json = {
	title : 'Title message',
	components: [
		{	
			name : 'textBlock',
			id : 1, 
			settings : {
				text : 'This is first textBlock message',
				color : '#d7d7ff',
				bold : true
			}
		},
		{
			name : 'textBlock',
			id : 2,
			settings : {
				text : 'This is second textBlock message',
				color : '#ffd1e7',
				bold : false
			}
		},
		{
			name : 'selectOne',
			id : 3,
			settings : {
				text : 'Which one is the best to be?',
				variables : [
					{ id : 31, text : 'First'  },
					{ id : 32, text : 'Second' },
					{ id : 33, text : 'Third'  }
				]
			}
		}
	]
}