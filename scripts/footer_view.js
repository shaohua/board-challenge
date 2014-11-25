/** @jsx React.DOM */
/**
 * footer
 */

/**
 * when state changes, component only re-render itself
 * when props changes,
 */
var _ = require('underscore'),
  React = require('react'),
  Actions = require('./actions');

var FooterView = React.createClass({
  getInitialState: function(){
    return {
      flag: true
    };
  },

  componentWillReceiveProps: function(nextProps){
    console.log('componentWillReceiveProps', nextProps);
  },

  onClick: function(){
    this.setState({
      flag: !this.state.flag
    });
  },

  render: function() {
    console.log('render FooterView');
    return (
      <div onClick={this.onClick}>
        footer
      </div>
    );
  }

});

module.exports = FooterView;
