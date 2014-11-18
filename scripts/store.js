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
    tileInOneRow.push('white');
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

vent.on('tile:update', function(payload){
  console.log('tile:update', payload);
  var tilesCopy = deepcopy(Store.get('tiles'));
  tilesCopy[payload.row][payload.col] = payload.color;
  Store.set('tiles', tilesCopy);
});

vent.on('tile:clear', function(payload){
  Store.set('tiles', defaultTiles);
});


module.exports = Store;
