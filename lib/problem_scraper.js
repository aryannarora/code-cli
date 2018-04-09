const cheerio = require('cheerio')
const rp = require('request-promise')
const chalk = require('chalk')
const fs = require('fs')

//cli text colors
const blue = chalk.blue
const red = chalk.red
const green = chalk.green
let handle, options

function problemScraper(id) {
    try {
         handle = fs.readFileSync('info.txt','utf-8')
    } catch (e){
        console.log(red.bold('Error reading file...'))
    }

    if (handle) {
         options = {
            uri: `https://code-drills.com/profile?handles=${handle}`, // https://code-drills.com/profile?handles=sp%2Faryann
            transform: function (body) {
                try {
                    return cheerio.load(body);
                } catch (e){
                    console.log('Error loading response. Did you forget to set the handle? Use sethandle --help')
                }
            }
        }
    }


    rp(options)
    .then(function ($) {
        console.log((`\t\t\t\t(${green.underline(id)})\t\t\t\t\n`))
        const x = $(`#${id} table tbody tr`).each( function () {
            const element = $(this).children().children()
            console.log(chalk.bgRedBright(element.text()),':', chalk.underline(element.children().attr('href')))
            console.log('\n')
        })

    })
}

module.exports = problemScraper
