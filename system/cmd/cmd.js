export {line, bSubmit,log};

const line = document.querySelector("#cmdline"),
bSubmit = document.querySelector("#run");

class Display {
 static area =  document.querySelector("#console");
}

function log(any, nl) {
  if(!nl) {
    Display.area.value += any;
  } else {
    Display.area.value += `${any} \n`;
  }
}