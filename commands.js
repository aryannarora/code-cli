#!/usr/bin/env node
const program = require('commander')
const { prompt} = require('inquirer')
const saveHandle = require('./util').saveHandle
const initialScrape = require('./lib/initial_scraper')
const problemScraper = require('./lib/problem_scraper')

const userHandle = {
    type: 'input',
    name: 'handle',
    message: 'user handle'
}


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
            saveHandle(userHandle,'cc')
            initialScrape(userHandle,'cc')
        }
        else if (cmd.codeforces) {
            saveHandle(userHandle,'cf')
            initialScrape(userHandle,'cf')
        }
        else if (cmd.spoj) {
            saveHandle(userHandle,'sp')
            initialScrape(userHandle,'sp')
        }
        else console.error('Missing options! See handle --help')
               
    })


program
    .command('predict')
    .alias('get')
    .description('Predicts the problem')
    .option('--warmup','Warmup')
    .option('--daily','Daily_Practice')
    .option('-e, --easy','Easy')
    .option('-m, --medium','Medium')
    .option('-h, --hard','Hard')
    .option('-dp, --dynamic','Dynamic_Programming')
    .option('-g, --greedy',"Greedy")
    .option('-i, --implementation',"Implementation")
    .option('--icpc',"ICPC")
    .option('--adhoc','ADHOC')
    .option('-m, --minicontest','Mini_Contest')
    .option('--st', 'Strong_Topics')
    .option('--bs', 'Binary_search')
    .option('--bf', 'Brute_Force')
    .option('--ds','Data_Structures')
    .option('--dnc', 'Divide___Conquer')
    .option('--bm', 'Bitmasks')
    .option('--fft', 'FFT')
    .option('--combinatorics', 'Combinatorics')
    .option('--fnm', 'Flows___Matching')
    .option('--games', 'Games')
    .option('--geometry', 'Geometry')
    .option('--gnt', 'Graphs___Trees')
    .option('--hash', 'Hashing')
    .option('--math', 'Math')
    .option('--mat', 'Matrices')
    .option('--nt', 'Number_Theory')
    .option('--probability', 'Probabilities')
    .option('--str', 'String')
    .option('--random', 'Random')
    .action( cmd => {
        if (cmd.warmup) problemScraper('Warmup')
        else if (cmd.daily) problemScraper('Daily_Practice')
        else if (cmd.easy) problemScraper('Easy')
        else if (cmd.medium) problemScraper('Medium')
        else if (cmd.hard) problemScraper('Hard')
        else if (cmd.dynamic) problemScraper('Dynamic_Programming')
        else if (cmd.greedy) problemScraper('Greedy')
        else if (cmd.implementation) problemScraper('Implementation')
        else if (cmd.icpc) problemScraper('ICPC')
        else if (cmd.adhoc) problemScraper('ADHOC')
        else if(cmd.minicontest) problemScraper('Mini_Contest')
        else if (cmd.st) problemScraper('Strong_Topics')
        else if (cmd.bs) problemScraper('Binary_search')
        else if (cmd.bf) problemScraper('Brute_Force')
        else if (cmd.ds) problemScraper('Data_Structures')
        else if (cmd.dnc) problemScraper('Divide___Conquer')
        else if (cmd.bm) problemScraper('Bitmasks')
        else if (cmd.fft) problemScraper('FFT')
        else if (cmd.combinatorics) problemScraper('Combinatorics')
        else if (cmd.fnm) problemScraper('Flows___Matching')
        else if (cmd.games) problemScraper('Games')
        else if (cmd.geometry) problemScraper('Geometry')
        else if (cmd.gnt) problemScraper('Graphs___Trees')
        else if (cmd.hash) problemScraper('Hashing')
        else if (cmd.math) problemScraper('Math')
        else if (cmd.mat) problemScraper('Matrices')
        else if (cmd.nt) problemScraper('Number_Theory')
        else if (cmd.probability) problemScraper('Probabilities')
        else if (cmd.str) problemScraper('Strings')
        else if (cmd.random) problemScraper('Random')
    })

   program.parse(process.argv)
