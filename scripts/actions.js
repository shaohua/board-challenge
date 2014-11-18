var vent = require('./vent').getInstance();

var Actions = {
  updateTile: function(payload){
    vent.trigger('tile:update', payload);
  },

  clearTiles: function(){
    vent.trigger('tiles:clear');
  },

  saveTiles: function(){
    vent.trigger('tiles:save');
  }
};

module.exports = Actions;
