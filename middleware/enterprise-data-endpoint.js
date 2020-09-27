// This middleware serves an endpoint that's used by https://github.com/docs/scheduled-tasks
module.exports = async (req, res, next) => {
  if (req.path !== '/enterprise.json') return next()

  return res.json({
    enterpriseDates: require('../lib/enterprise-dates'),
    enterpriseVersions: require('../lib/enterprise-server-releases')
  })
}
