
var roleHarvester = require('role.harvester');



var harvesterTotal = 2;


module.exports.loop = function () {
    
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    //console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < harvesterTotal) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
    }


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        {
            roleHarvester.run(creep);
        }
        
    }
}