/** @jsx React.DOM */
var _ = require('underscore'),
  Tile = require('./tile_view'),
  React = require('react');

var AppView = React.createClass({
  getInitialState: function(){
    return {
      numRow: 4,
      numCol: 6
    };
  },

  render: function() {
    var tileInOneRow = _.times(this.state.numCol, function(){
      return <Tile />;
    });
    var tileInOneRowWrapped = <div>{tileInOneRow}</div>;
    var board = _.times(this.state.numRow, function(){
      return tileInOneRowWrapped;
    });

    return (
      <div className='board-container'>
        {board}
      </div>
    );
  }

});

module.exports = AppView;
