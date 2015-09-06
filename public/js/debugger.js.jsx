var React = require('react/addons');
var store = require('../store');

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
			console.log('debugger:dataUpdate', data);
			self.setState({
				data : JSON.stringify(data)
			})
		})
	},
	render : function() {
		return (<div> { this.state.data } </div>)

	}
})