var vent = require('./vent').getInstance();

var Actions = {
  updateTile: function(payload){
    vent.trigger('tile:update', payload);
  },

  clearTile: function(payload){
    vent.trigger('tile:clear', payload);
  }
};

module.exports = Actions;
