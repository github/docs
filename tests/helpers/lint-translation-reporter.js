const chalk = require('chalk')
const { groupBy } = require('lodash')

// we don't want to print all the stack traces
const stackTrackRegExp = /^\s+at\s.+/i

class TranslationReporter {
  constructor (globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }

  onRunComplete (contexts, results) {
    const failures = results.testResults.reduce((fails, { testResults: assertionResults }) => {
      const formattedFails = assertionResults
        .filter(result => result.status === 'failed')
        .map(({ ancestorTitles, failureMessages, title }) => {
          return {
            fileName: ancestorTitles[1],
            failedTests: title,
            failureMessage: failureMessages.map((message) => message.split('\n').filter(line => !stackTrackRegExp.test(line)).join('\n'))
          }
        })
      return [...fails, ...formattedFails]
    }, [])

    const failuresByFile = groupBy(failures, 'fileName')

    for (const fileName in failuresByFile) {
      console.group(chalk.red.bold(`\n${fileName}`))
      failuresByFile[fileName].forEach(({ failureMessage }, index) => {
        console.log(chalk.bold(`\n(${index + 1})`))
        failureMessage.forEach(msg => console.log(msg))
      })
      console.groupEnd()
    }

    console.log(chalk.bold('\nthese files should not be included: '))
    console.dir(Object.keys(failuresByFile), { maxArrayLength: null })
  }
}

module.exports = TranslationReporter
