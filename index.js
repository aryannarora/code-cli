function setHandle(userHandle, platform) {
    console.info(`Handle set to be: ${platform}/${userHandle}`)
    return `${platform}/${userHandle}`
}

module.exports = setHandle