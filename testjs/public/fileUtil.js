/**
 * Created by xianing on 2017/4/24.
 */

const fs = require('fs');
const chalk = require('chalk');
const shell = require('shelljs');

module.exports.makeDir = (url) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(url, (err) => {
            if (err) {
                console.log(chalk.red(err));
                reject();
            } else {
                resolve();
            }
        });
    });
};

module.exports.createFile = (url, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                console.log(chalk.red(err));
                reject();
            } else {
                resolve();
            }
        });
    });
};

module.exports.copyFile = (filename1, filename2) => {
    return new Promise((resolve, reject) => {
        let input = fs.createReadStream(filename1);
        let output = fs.createWriteStream(filename2);

        input.on('data', (d) => {
            output.write(d);
        });
        input.on('error', (err) => {
            console.log(chalk.red(err));
            reject();
        });
        input.on('end', () => {
            output.end();
            resolve();
        });
    });
};

module.exports.shellMakeDir = (url) => {
    return new Promise((resolve, reject) => {
        shell.mkdir('-p', url,);
        resolve();
    })
};

module.exports.shellCopy = (startUrl,outUrl) => {
    return new Promise((resolve, reject) => {
        shell.cp('-R', startUrl, outUrl)
        resolve();
    })
};

module.exports.shellRemove = (url) => {
    return new Promise((resolve, reject) => {
        shell.rm('-f',url);
        resolve();
    })
};




