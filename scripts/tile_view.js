/** @jsx React.DOM */
var _ = require('underscore'),
  React = require('react');

var TileView = React.createClass({
  getInitialState: function(){
    return {
      flag: true
    };
  },

  //http://www.paulirish.com/2009/random-hex-color-code-snippets/
  getRandomColor: function(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  },

  setColor: function(){
    var nextColor = this.state.flag ? this.getRandomColor() : 'white';
    this.setState({
      flag: !this.state.flag
    });
  },

  render: function() {
    var containerStyle = {
      backgroundColor: this.props.color
    };

    return (
      <div
        className='tile'
        onClick={this.setColor}
        style={containerStyle}>
      </div>
    );
  }

});

module.exports = TileView;
