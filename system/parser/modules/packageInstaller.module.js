export {prefix}
const prefix = "pkg";

class Commands  {
  static container = new Array;
  constructor(id) {
    this.id = new String;
    Commands.container.push(this);
  }
  argument(eventID) {
    switch(event) {
      case "install":
        return "installing file...";
      break;
      default:
       return "no event specified";
    }
  }
}

new install = new Commands("install");

const run = (command, exceptions, callback) => {
  let response;
  Commands.container.forEach(eCmd => {
    if(command == eCmd.id) {
      response = eCmd.argument(eCmd.id)
    } else {
      response = "INVALID COMMAND";
    }
  });
}