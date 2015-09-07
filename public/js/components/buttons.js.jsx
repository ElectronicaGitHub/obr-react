/** @jsx React.DOM */
var React = require('react');
var store = require('../modules/store');
var checker = require('../modules/checker');

require('../../styles/components/buttons.less');

module.exports = React.createClass({
    displayName: 'buttons',
    render: function () {
    	var _buttons = buttons.map(function (el) {
    		return <div className="button" onClick={ el.method }>{ el.text }</div>
    	})
        return (
            <div className="buttons">{ _buttons }</div>
        );
    }
});

var methods = {
	check : function () {
		checker.check(function (data) {
			// console.log('check callback', data);
		});
	}
}

var buttons = [
	{
		type : 'check',
		text : 'Проверить',
		method : methods.check
	}
]