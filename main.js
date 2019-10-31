
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');



var harvesterTotal = 2;


module.exports.loop = function () {
    
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    //console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < harvesterTotal) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
    }
    if(builders.length < builderTotal) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder'}});
    }


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        
        
    }
}