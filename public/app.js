// styles injection
require('./styles/app.less');
// 

// deps injection
$ = require('jquery');
var React = require('react');
var eventer = require('./js/modules/eventer');
var store = require('./js/modules/store');
//


// modules injection
var builder = require('./js/components/builder.js');
var _debugger = require('./js/components/debugger.js');
var buttons = require('./js/components/buttons.js');
var classes = require('./js/components/classes.js');
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