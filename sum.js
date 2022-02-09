let total = 0;
let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  //console.log(i + ' -> ' + (args[i]));
  total += parseInt(args[i]);
}
console.log(total);