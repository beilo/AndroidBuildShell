# AndroidBuildShell
android package shell and 360加固

##### 由于自己比较懒得原因,打包+加固一步步操作嫌累,于是用nodejs写了个脚本,用于一句命令执行build apk+ 360加固.不用360加固的可以跳过了.

##### 重点:现只支持360加固的签名和加固功能,暂不支持多渠道,后面可能考虑增加

1. 去nodejs官网下载最新的安装包安装
2. 配置gradle的全局环境,具体是哪个版本根据你的项目来
3. 配置bin目录下面的MyModel.js和android.js文件,具体操作看文件备注
4. jks 存放位置为 项目/app,的同级目录,/jks/test.jks,像这样
4. 通过命令行 cd 进入本项目的bin目录,执行npm i
5. 通过命令行 cd 进入本项目的bin目录,执行node android
6. 全局模式:通过命令行进行到testjs中,执行npm link,成功后在控制台执行hello即可

- [x] 支持全局模式,不再用进入bin再执行
- [ ] 支持多渠道
- [ ] 增加demo
- [ ] 支持liux系统 (已经支持win和mac系统)
- [ ] emmm...


