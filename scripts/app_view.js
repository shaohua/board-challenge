/** @jsx React.DOM */
var _ = require('underscore'),
  Tile = require('./tile_view'),
  React = require('react'),
  Actions = require('./actions'),
  TileStore = require('./store');

var getStateFromStore = function(){
  return {
    numRow: TileStore.get('numRow'),
    numCol: TileStore.get('numCol'),
    tiles: TileStore.get('tiles')
  };
};

var AppView = React.createClass({
  getInitialState: function(){
    return getStateFromStore()
  },

  //the three methods below can be put into a mixin
  //but don't want to get too fancy here
  _onChange: function() {
    this.setState(getStateFromStore());
  },

  componentDidMount: function() {
    TileStore.on('change', this._onChange);
  },

  componentWillUnmount: function() {
    TileStore.off('change', this._onChange);
  },

  clearTiles: function(){
    Actions.clearTiles();
  },

  saveTiles: function(){
    Actions.saveTiles();
  },

  render: function() {
    var board = [];
    for(var i=0; i<this.state.numRow; i++){
      var tileInOneRow = [];
      for(var j=0; j<this.state.numCol; j++){
        tileInOneRow.push(
          <Tile
            row={i}
            col={j}
            color={this.state.tiles[i][j].color}
            colored={this.state.tiles[i][j].colored}/>
        );
      }
      //wrapped in a div to break inline-blocks into rows
      var tileInOneRowWrapped = <div>{tileInOneRow}</div>;
      board.push(tileInOneRowWrapped);
    }

    return (
      <div>
        <div>
          <button onClick={this.clearTiles}>Clear</button>
          <button onClick={this.saveTiles}>Save</button>
        </div>
        <div className='board-container'>
          {board}
        </div>
      </div>
    );
  }

});

module.exports = AppView;
