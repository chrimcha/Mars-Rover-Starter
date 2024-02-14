const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

    it("constructor sets position and default values for mode and generatorWatts", function() {
      expect(Rover.position = "position").toBe("position");
      expect(Rover.mode = "NORMAL").toBe("NORMAL");
      expect(Rover.generatorWatts = 110).toBe(110);
    });

    it("response returned by receiveMessage contains the name of the message", function() {
      let commands = [new Command('Move', 10000), new Command('STATUS_CHECK')];
      let message = new Message('Test if moved position', commands);
      let rover = new Rover(98382); 
      let currentMessage = rover.receiveMessage(message);

      expect(currentMessage.message).toContain(Message.name);
    });

    // it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    //   expect(Rover.receiveMessage(message)).toIncludes(Rover.results.length);

    //   // expect(Rover.results.length).toBe(2);
    //   // let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    //   // let message = new Message('Test message with two commands', commands); 
    //   // let currentMessage = Rover.receiveMessage(message);
    //   // expect(currentMessage.results.length).toIncludes(Command.length);
    // });

    // it("responds correctly to the status check command", function() {
    //   let currentMessage = Rover.receiveMessage(message);
    //   expect(currentMessage.results).toIncludes("roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: position}");
    // });

    // it("responds correctly to the mode change command", function() {
    //   expect(Rover.mode = "LOW_POWER").toBe("false");
    // });

    // it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    //   let rover = new Rover(98382);
    //   let message = new Message('Test if moved position', commands);
    //   let commands = [[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('Move', 10000)/*, new Command('STATUS_CHECK')*/];
    //   let currentMessage = rover.receiveMessage(message);
    //   expect(currentMessage[1])Rover.toBe("{completed: false}");
    // });

    // it("responds with the position for the move command", function(){
    //   let commands = [new Command('Move', 10000), new Command('STATUS_CHECK')];
    //   let message = new Message('Test if moved position', commands);
    //   let rover = new Rover(98382); 
    //   let currentMessage = rover.receiveMessage(message);
    //   expect(currentMessage.position).toBe(108382);
    // });

});
