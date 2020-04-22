import * as cmd from "../cmd/cmd.js";
function check() {
  console.log("parser is working")
}

const suffixes = new Array,
modPath = "./system/parser/modules";

async function fetchFile(url) {
  const promise = await fetch(url, {
    method: "GET",
    mode: "same-origin"
  })
  try {
   return await promise.json();
  }
  catch(err) {
   cmd.log(err + " on " + await JSON.stringify(promise), true)
  }
}

async function parseModule(url) {
  const module = await fetchFile(url);
  try {
    module.list.forEach( eModule => {
     cmd.log(`loaded ${eModule.name} from ${url}`, true);
    });
  }
  catch(err) {
    cmd.log(err, true)
    cmd.log(`url: ${url}`);
  }
}

function query(text) {
 
}

cmd.bSubmit.addEventListener("mouseup", query);

parseModule(`${modPath}/dependencies.json`)
export  {cmd, query};