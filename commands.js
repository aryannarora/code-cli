#!/usr/bin/env node
const program = require('commander')
const { prompt} = require('inquirer')
const setHandle = require('./index')

const userHandle = {
    type: 'input',
    name: 'handle',
    message: 'user handle'

}

let handle

program
    .version('1.0.0')
    .description('A Cli tool for Code-drill website')

program
    .command('sethandle <userHandle>')
    .alias('h')
    .option('-c, --codechef', 'For codechef account')
    .option('-s, --spoj','For SPOJ account')
    .option('-f, --codeforces','for codeforces account')
    .description('Takes the handle from user for further queries')
    .action( (userHandle, cmd) => {
        if (cmd.codechef) handle = setHandle(userHandle,'cc')
        else if (cmd.codeforces) handle = setHandle(userHandle,'cf')
        else if (cmd.spoj) handle = setHandle(userHandle,'sp')
        else console.error('Missing options! See handle --help')
               
    })

program.parse(process.argv)