/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Worker');
 * mod.thing == 'a thing'; // true
 */
var utility = require('utility');

module.exports = {
    myWorkers: []
};

module.exports.allWorkersHarvest = () => {
    for(const i in Game.creeps){
        module.exports.myWorkers.push(Game.creeps[i]);
    }
}

module.exports.harvest = () => {
    for(const i in Game.creeps){

        const worker = Game.creeps[i];

        // console.log(worker.store[RESOURCE_ENERGY]);

        if(worker.store[RESOURCE_ENERGY] < worker.store.getCapacity()){
            module.exports.goHarvest(worker);
        } else {
            module.exports.depositStore(worker);
        }
    }   
}

module.exports.goHarvest = (worker) => {
    const target = worker.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if(target) {
        if(worker.harvest(target) == ERR_NOT_IN_RANGE) {
            worker.moveTo(target);
        }
    }
}
module.exports.depositStore = (creep) => {
    const storage = Game.spawns['Spawn1'];

    const answer = creep.transfer(storage, RESOURCE_ENERGY)
    if(answer == ERR_NOT_IN_RANGE) {
        creep.moveTo(storage);
    }else if(answer === ERR_FULL) {
        console.log(`${storage} is full, spawning another creepo boyo`);
        utility.spawn.basicHarvester(storage.name, Math.random() * 1000);
    }
}