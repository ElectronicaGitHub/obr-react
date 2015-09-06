// styles injection
require('./styles/app.less');
// 

// deps injection
$ = require('jquery');
var React = require('react');
var store = require('./store');
//


// modules injection
var builder = require('./js/builder.js');
var _debugger = require('./js/debugger.js');
var buttons = require('./js/buttons.js');
var classes = require('./js/classes.js');
//

store.getData(function (data) {
	// main builder
	React.render(
	    React.createElement(builder, {
	    	components : data
	    }),
	    document.getElementById('list')
	);
	// debugger
	React.render(
	    React.createElement(_debugger, {
	    	data : data
	    }),
	    document.getElementById('debugger')
	);
	// buttons
	React.render(
	    React.createElement(buttons),
	    document.getElementById('buttons')
	);
})