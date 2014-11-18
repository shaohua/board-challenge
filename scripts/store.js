var vent = require('./vent').getInstance(),
  _ = require('underscore'),
  Backbone = require('backbone');

//helpers
var defaultNumRow = 4,
  defaultNumCol = 6;

var defaultTiles = [];
for(var i=0; i<defaultNumRow; i++){
  var tileInOneRow = [];
  for(var j=0; j<defaultNumCol; j++){
    tileInOneRow.push({
      color: 'white',
      colored: false
    });
  }
  defaultTiles.push(tileInOneRow);
}

var TileModel = Backbone.Model.extend({
  defaults : {
    numRow: defaultNumRow,
    numCol: defaultNumCol,
    tiles: defaultTiles
  }
});


//store
var Store = new TileModel();

var deepcopy = function(input){
  if(typeof input === 'undefined') return undefined;
  return JSON.parse(JSON.stringify(input));
};

/**
 * update one single tile
 * @param  {object} payload [properties include row, col, color, colored]
 * @return none
 */
vent.on('tile:update', function(payload){
  console.log('tile:update', payload);
  var tilesCopy = deepcopy(Store.get('tiles'));
  tilesCopy[payload.row][payload.col].color = payload.color;
  tilesCopy[payload.row][payload.col].colored = payload.colored;
  Store.set('tiles', tilesCopy);
});

/**
 * clear all tiles
 */
vent.on('tiles:clear', function(){
  Store.set('tiles', defaultTiles);
});

/**
 * save all tiles
 */
vent.on('tiles:save', function(){
  console.log('saving all tiles', Store.get('tiles'));
});


module.exports = Store;
