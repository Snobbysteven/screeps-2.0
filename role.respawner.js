//TODO: if nothing to build, upgrade instead.
var roleRespawner = {
    
var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

var builderTotal = 3;
var harvesterTotal = 2;
var upgraderTotal = 2;

run: function() {

    if(harvesters.length < harvesterTotal) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
    }
    if(upgraders.length < upgraderTotal) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader'}});
    }
    if(builders.length < builderTotal) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder'}});
    }
}
};

module.exports = roleRespawner;