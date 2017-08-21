/**
 * Created by xianing on 2017/4/24.
 */

const exec = require('child_process').exec;
const chalk = require('chalk');
const shell = require('shelljs');
const os = require('os');

// module.exports = (cmdStr, dir) => {
//     return new Promise((resolve, reject) => {
//         exec(cmdStr, {cwd: dir}, (error, stdout, stderr) => {
//             if (error) {
//                 console.log(chalk.red(stderr));
//                 reject();
//             } else {
//                 console.log(chalk.green(stdout));
//                 resolve();
//             }
//         });
//     });
// };


let type = os.type();


var iconv = require('iconv-lite');
var encoding = 'cp936';
var binaryEncoding = 'binary';

module.exports = (cmdStr, dir) => {
    if (type === 'Windows_NT') {
        return new Promise((resolve, reject) => {
            shell.exec(cmdStr, {
                cwd: dir,
                encoding: binaryEncoding,
                async: false,
                silent: false
            }, (code, stdout, stderr) => {
                if (code) {
                    console.log(chalk.red(iconv.decode(new Buffer(stderr, binaryEncoding), encoding),
                        iconv.decode(new Buffer(stderr, binaryEncoding), encoding)));
                    shell.exit(code);
                } else {
                    console.log(chalk.green(iconv.decode(new Buffer(stdout, binaryEncoding), encoding),
                        iconv.decode(new Buffer(stderr, binaryEncoding), encoding)));
                    resolve();
                }
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            shell.exec(cmdStr, {
                cwd: dir,
                async: false,
                silent: false
            }, (code, stdout, stderr) => {
                if (code) {
                    shell.exit(code);
                } else {
                    resolve();
                }
            });
        });
    }


};
