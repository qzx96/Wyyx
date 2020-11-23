//console.log('构建生产环境的包')
let {task,src,dest,watch,series,parallel} = require('gulp')
let load = require('gulp-load-plugins')()
let del = require('del')
//删除dist目录
async function delDist(){
    await del('./dist')
}

//处理图片
async function img(){
    src('./img/*.*')
    .pipe(dest('./dist/img'))
 
}

//处理js
async function script(){
    src('./js/*.js')
    .pipe(loade.babel({presets:['@babel/env']}))//ES6转ES5
    .pipe(load.uglify())//压缩js
    .pipe(load.rev())//给文件添加哈希值
    .pipe(dest('./dist/js'))
    .pipe(load.rev.mainfest())//生成记录哈希值的json文件
    .pipe(dest('.rev/js'))//保存
 
}
//处理sass
async function sass(){
    src('./sass/*.scss')
    .pipe(load.asssChina())
    .pipe(load.minifyCss())//压缩css
    .pipe(load.rev())//给文件添加哈希值
    .pipe(dest('./dist/css'))
    .pipe(load.rev.mainfest())//生成记录哈希值的json文件
    .pipe(dest('.rev/css'))//保存
}
    //处理html
    async function html(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{//延迟执行Html任务
            resolve()
            src(['.rev/**/*.json','.pages/*.html'])
        .pipe(loade.revCollector({
            replaceReved:true//根据之前生成的json配置哈希值替换
        }))
        .pipe(load.minfyHtml())//压缩
        .pipe(dest('./dist'))
        },2000)
     })
    }

//打包任务
    task('build',async ()=>{
        await delDist()
        await img()
        await script()
        await sass()
        await html()
    })
 
