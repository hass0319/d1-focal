'use strict';
let total = 0;
processArgv();

function processArgv() {
  let args = process.argv.slice(2);
  for (let j = 0; j < args.length; j++) {
    console.log(j + ' -> ' + (args[j]));
  }
}
