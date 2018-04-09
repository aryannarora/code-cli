const cheerio = require('cheerio')
const rp = require('request-promise')
const chalk = require('chalk')

//cli text colors
const blue = chalk.blue
const red = chalk.red
const green = chalk.green



function initialScrape(handle, platform) {


const options = {
    uri: `https://code-drills.com/profile?handles=${platform}%2F${handle}`, // https://code-drills.com/profile?handles=sp%2Faryann
    transform: function (body) {
        return cheerio.load(body);
    }
}

    rp(options)
    .then(function ($) {
        let strongAreas =  $('.list-inline .text-success').children().text().split('\n').reduce( (str, area) => {
            const trimmed = area.trim()
            if (trimmed.length) {
                if (str) return `${str}, ${trimmed}`
                return trimmed
            }
            return str
        })

        let weakAreas =  $('.list-inline .text-danger').children().text().split('\n').reduce( (str, area) => {
            const trimmed = area.trim()
            if (trimmed.length) {
                if (str) return `${str}, ${trimmed}`
                return trimmed
            }
            return str
        })
        if (!weakAreas) weakAreas = `Not known` 
        if (!strongAreas) strongAreas = `Not known` 
        console.log(`\t\t\t\t(${green.underline('User Info')})\t\t\t\t\n`)
        console.log(blue('User name:'),green(handle))
        console.log(blue('User Rating:'), green($('.site-icon').siblings('b').html()))
        console.log(blue('Strong Areas:'),green(strongAreas))
        console.log(blue('Weak Areas:'),green(weakAreas),'\n')
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
        console.log(err)
    });    
}

module.exports = initialScrape
