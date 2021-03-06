/** @jsx React.DOM */

require('../../styles/components/textBlock.less');
require('../../styles/components/selectOne.less');

var React = require('react/addons');
var store = require('../modules/store');
var logger = require('../modules/logger');
var eventer = require('../modules/eventer');

module.exports = {
	textBlock : React.createClass({
	    displayName: 'textBlock',
	    componentWillMount: function () {
	    	logger.info('loading', this.constructor.displayName, this.props.id);
	    },
	    componentDidMount: function () {
	    	logger.info('ready', this.constructor.displayName, this.props.id);
	    },
	    render: function () {
	    	var cx = React.addons.classSet;
	    	var classes = cx({
	    		textBlock : true,
	    		bold : this.props.settings.bold
	    	})
	    	var styles = {
				backgroundColor: this.props.settings.color
	    	}
	        return (
	            <div style={ styles } className={ classes }>{ this.props.settings.text }</div>
	        );
	    }
	}),
	selectOne : React.createClass({
		displayName: 'selectOne',
		getInitialState: function () {
		    return {
		        selected : null  
		    };
		},
		selectOne : function (el) {
			var update_obj = { selected : el.id };
			this.setState(update_obj);
			store.update(this.props.id, update_obj);
		},
		componentWillMount: function () {
	    	logger.info('loading', this.constructor.displayName, this.props.id);
	    },
		componentDidMount: function () {
	    	logger.info('ready', this.constructor.displayName, this.props.id);

			var self = this;
			store.on('dataUpdate', function (data) {
				console.log('selectOne:dataUpdate', data);
				self.setState({
					correct : data.state.correct
				})

			}, this.props.id);
		},
		render : function () {
			var cx = React.addons.classSet;
			var self = this;
			var _variables = this.props.settings.variables.map(function (el) {
				var classes = cx({
					button : true,
					correct : self.state.correct && self.state.correct == el.id,
					error : self.state.correct && !(self.state.correct == el.id),
					selected : self.state.selected == el.id
				});
				return <div className={ classes } onClick={ self.selectOne.bind(null, el)} data-id="{ el.id }">{ el.text }</div>
			})
			return (
				<div className="selectOne">
					<h2 className="title">{ this.props.settings.text }</h2>
					{ _variables }
				</div>
			)
		}
	})
	
}