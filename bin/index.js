/**
 * 开发后台脚手架，快速生成标准Vue后台架构
 * @author 锐萌萌
 */

let program = require("commander")
let { promisify } = require('util')
let asyncFiglet = promisify(require("figlet"))
let chalk = require("chalk")
let inquirer = require("inquirer");
let init = require('./init.js')

//日志打印函数
const log = content => console.log(chalk.yellow(content))

//设置版本和参数
program.version('1.0.0');
program.option("-n --name <type>","output name");

//打印 logo
async function printLogo() {
  let data = await asyncFiglet('v-cli')
  log(data);
}

program
  .command('create <app-name>')
  .description("创建vue项目")
  .action(async (name) => {
    await printLogo()
    log("准备创建项目...")
     let answer = await inquirer.prompt([
      {
        name:'language',
        type:'list',
        message:'请选择语言版本',
        choices:['JavaScript','TypeScript']
      }
    ])
    if(answer.language == 'JavaScript'){
      //下载框架
      log("您选择了JavaScript版本，即将进入下载模式.")
      init(name);
    }else{
      log("敬请期待...")
    }
  })

//参数解析
program.parse(process.argv)