import chalk from 'chalk'
import stripAnsi from 'strip-ansi'
import { groupBy } from 'lodash-es'

// we don't want to print all the stack traces
const stackTraceRegExp = /^\s+at\s.+/gim

class TranslationReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }

  onRunComplete(contexts, results) {
    const failures = results.testResults.reduce((fails, { testResults: assertionResults }) => {
      const formattedFails = assertionResults
        .filter((result) => result.status === 'failed')
        .map(({ ancestorTitles, failureMessages, title }) => {
          return {
            fileName: ancestorTitles[1],
            failedTests: title,
            failureMessage: failureMessages.map((message) => {
              return message
                .split('\n')
                .filter((line) => !stackTraceRegExp.test(stripAnsi(line)))
                .join('\n')
            }),
          }
        })
      return [...fails, ...formattedFails]
    }, [])

    const failuresByFile = groupBy(failures, 'fileName')

    for (const fileName in failuresByFile) {
      console.group(chalk.red.bold(`\n${fileName}`))
      failuresByFile[fileName].forEach(({ failureMessage }, index) => {
        console.log(chalk.bold(`\n(${index + 1})`))
        failureMessage.forEach((msg) => console.log(msg))
      })
      console.groupEnd()
    }
  }
}

export default TranslationReporter
