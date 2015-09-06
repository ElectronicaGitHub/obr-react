/** @jsx React.DOM */
var React = require('react');
var classes = require('./classes.js');

module.exports = React.createClass({
    displayName: 'builder',
    componentDidMount: function () {
    },
    render: function () {
    	var _rendered = this.props.components.components.map(function (el) {
			return React.createElement(classes[el.name], {
				settings : el.settings,
				id : el.id
			})
    	})
    	console.log(_rendered);
        return (<div> { _rendered } </div>)
    }
});