const Command = require("./command");
const Message = require("./message");

class Rover {
   constructor(position = 0, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   

   receiveMessage(message) {
      let roverCommandTypes = {
         MOVE: {completed: true},
         STATUS_CHECK: {
            completed: true, 
            roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}},
         MODE_CHANGE: {completed: true}
      }
      let commandArray = message.commands;
      let resultsArray = [];

      let translatedMessage = {
         message: message.name,
         results: resultsArray
         }
      
      let j = 0;
      while (resultsArray.length < commandArray.length) {
      
         for (let i = 0; i < commandArray.length; i++) {
            if (commandArray[i].commandType === 'MOVE') {
               roverCommandTypes.STATUS_CHECK.roverStatus.position =  this.position += commandArray[i].value;
               let m = roverCommandTypes.MOVE;
               resultsArray.push(m);
            }

            if (commandArray[i].commandType === 'STATUS_CHECK') {
               let s = roverCommandTypes.STATUS_CHECK;
               resultsArray.push(s);
            } 
            
            if (commandArray[i].commandType === 'MODE_CHANGE') {
               let c = roverCommandTypes.MODE_CHANGE;
               this.mode = 'LOW_POWER';
               roverCommandTypes.STATUS_CHECK.roverStatus.mode = 'LOW_POWER';
               resultsArray.push(c);
            }

            if (this.mode === 'LOW_POWER') {
               roverCommandTypes.MOVE.completed = false;
            }
         }
         
         j++;
      }

      return translatedMessage;
   }
}

module.exports = Rover;