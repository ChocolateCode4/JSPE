import * as Parser from "./parser/commandParser.js";
 export {Parser};

const cmd = Parser.cmd;

function download(url, type) {
  switch(type) {
    case "json":
      //fetch json arguments here
    break;
    case "javascript" || "js":
      //fetch javascript files here
    break;
    case "module":
      //fetch js or .mjs modules then export them to modules folder
    default:
     cmd.log(`${type} request is unspecified`, true);
  }
}