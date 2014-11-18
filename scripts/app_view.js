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
    var color = 'yellow';

    var board = [];
    for(var i=0; i<this.state.numRow; i++){
      var tileInOneRow = [];
      for(var j=0; j<this.state.numCol; j++){
        tileInOneRow.push(
          <Tile
            row={i}
            col={j}
            color={color}/>
        );
      }
      //wrapped in a div to break inline-blocks into rows
      var tileInOneRowWrapped = <div>{tileInOneRow}</div>;
      board.push(tileInOneRowWrapped);
    }

    return (
      <div>
        <div>
          <button>Clear</button>
        </div>
        <div className='board-container'>
          {board}
        </div>
      </div>
    );
  }

});

module.exports = AppView;
