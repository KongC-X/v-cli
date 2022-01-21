/**
 * 项目克隆
 */

let { promisify } = require('util')
const ora = require('ora')
const download = require('download-git-repo')
const shell = require('shelljs')
let chalk = require("chalk")

//日志打印函数
const log = content => console.log(chalk.yellow(content))

module.exports = async (appname) => {
  log(`🚀 创建项目 ${appname}`)
  shell.rm('-rf',appname);
  const spinner = ora("下载中...").start();
  try {
    await download('',appname,{clone:true})
    spinner.succeed("下载完成")
    log(
      `
      下载完成，请执行下面命令启动项目:
      ==============================
      cd ${appname}
      npm init 或者 yarn
      npm run dev 或者 yarn dev
      `
    )
  } catch (error) {
    log('下载失败',error)
    spinner.stop();
  }
}