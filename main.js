var workers = require('creep.Worker');
var utility = require('utility');
// console.log(Game.creeps[0])


const numberOfCreeps = Object.keys(Game.creeps).length;

if(numberOfCreeps === 0){
  console.log("Creating a new creep")
  utility.spawn.basicHarvester('Spawn1', numberOfCreeps+1);
}



workers.harvest();


//  Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );