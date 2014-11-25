/** @jsx React.DOM */
/**
 * talk to Flux
 * set up button and the board
 */
var _ = require('underscore'),
  Tile = require('./tile_view'),
  Footer = require('./footer_view'),
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
    console.log('render AppView');

    //test props changes
    //this will NOT work
    var footerInput = 1;
    var changeFooterInput = function(){
      footerInput = Math.random();
      console.log('footerInput', footerInput);
    };

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
      <div className='app-container'>
        <div>
          <span
            onClick={this.clearTiles}
            title='clear tiles'
            className='icon icon-refresh'></span>
          <span
            onClick={this.saveTiles}
            title='save tiles'
            className='icon icon-check'></span>
        </div>
        <div className='board-container'>
          {board}
        </div>
        <Footer input={footerInput}/>
        <div onClick={changeFooterInput}>
          Change footer input props
        </div>
      </div>
    );
  }

});

module.exports = AppView;
