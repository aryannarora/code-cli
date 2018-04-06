#!/usr/bin/env node
const program = require('commander')
const { prompt} = require('inquirer')
const saveHandle = require('./util').saveHandle
const initialScrape = require('./lib/initial_scraper')

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
        if (cmd.codechef) {
            handle = saveHandle(userHandle,'cc')
            initialScrape(userHandle,'cc')
        }
        else if (cmd.codeforces) {
            handle = saveHandle(userHandle,'cf')
            initialScrape(userHandle,'cf')
        }
        else if (cmd.spoj) {
            handle = saveHandle(userHandle,'sp')
            initialScrape(userHandle,'sp')
        }
        else console.error('Missing options! See handle --help')
               
    })

program.parse(process.argv)