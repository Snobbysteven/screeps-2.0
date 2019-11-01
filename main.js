//TODO: setup harvesters so that one massive harvester collects and carrys just coem grab the resources from it.
//TODO: Put the creeper count values into variables that can be easily set from a file.
//TODO: Look into resource search distance, creepers are going to the wrong side of the minieral where they can't even harvest because it is too far into the rock.
//TODO: Create AND checks for creeper spawns so that it makes sure the needed creepers get spawned before the not so much needed ones.
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleRespawner = require('role.respawner');

module.exports.loop = function () {
    
    roleRespawner.run();



    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester')
        {
            roleHarvester.run(creep);
        }
        
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        
        if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
    }
}