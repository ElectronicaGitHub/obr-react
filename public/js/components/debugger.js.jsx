var React = require('react/addons');
var store = require('../modules/store');
var eventer = require('../modules/eventer');
var logger = require('../modules/logger');

module.exports = React.createClass({
	displayName : 'debugger',
	getInitialState: function () {
	    return {
	        data : JSON.stringify(this.props.data)
	    };
	},
	componentDidMount: function () {
		var self = this;
		store.on('dataUpdate', function (data) {
			logger.info('dataUpdate', self.constructor.displayName, 'NO-ID');
			self.setState({
				data : JSON.stringify(data)
			})
		})
	},
	render : function() {
		return (<div> { this.state.data } </div>)

	}
})