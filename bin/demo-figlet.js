let figlet = require("figlet")
let { promisify } = require("util")
let asyncFiglet = promisify(require("figlet"))


//第一种方法，callback调用
figlet('Hello World !!!',function (err,data) { 
  if(err){
    console.log("something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
 })

async function run() {
  try {
    let data = await asyncFiglet("Vue 3");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
run();