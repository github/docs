module.exports = {
  launch: process.env.GITHUB_ACTIONS
    ? { executablePath: 'google-chrome-stable' }
    : {}
}
