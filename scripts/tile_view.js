/** @jsx React.DOM */
var _ = require('underscore'),
  React = require('react'),
  Actions = require('./actions');

var TileView = React.createClass({
  //http://www.paulirish.com/2009/random-hex-color-code-snippets/
  getRandomColor: function(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  },

  setColor: function(){
    var nextColor = this.props.colored ? 'white' : this.getRandomColor();
    Actions.updateTile({
      row: this.props.row,
      col: this.props.col,
      color: nextColor,
      colored: !this.props.colored
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
