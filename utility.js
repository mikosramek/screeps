module.exports = {
  spawn: {
    basicHarvester: function(spawn, name) {
      Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE], name );
    }
  } 
};
