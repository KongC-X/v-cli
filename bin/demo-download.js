let download = require("download-git-repo");

download('git地址','Demo',{clone:true},function (err) {
  console.log(err ? 'Error' : 'Success');
})