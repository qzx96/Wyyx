//怎么知道我要打包生成环境还是开发环境
//需要知道的执行命令
//nodejs中有个全局对象 process进程对象
//console.log(process)//{...}
//console.log(process.argv)//[...]
//console.log(process.argv[2])//dev  build
//console.log(process)
let mode = process.argv[2]

switch(mode){
    case 'dev':
    require('./gulpfile-dev.js')
    break
    case 'build':
    require('./gulpfile-build.js')
    break
}



//console.log('gulpfile配置任务执行')

// let gulp = require('gulp')//引入gulp
//解构赋值
//let {task,src,dest,watch,series,parallel} = require('gulp')


