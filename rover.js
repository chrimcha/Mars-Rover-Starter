const Command = require("./command");
const Message = require("./message");

class Rover {
   constructor(position = 0, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   
   receiveMessage(message) {
      let translatedMessage = {
         message: Message.name,
         results: Message.commands
      }
     
      return translatedMessage;
   }
}

module.exports = Rover;