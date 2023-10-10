import chalk from 'chalk'

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value)
}

function shorten(text, length = 70) {
  if (text.length <= length) return text
  return `${text.slice(0, length - 3)}…`
}

export function prettyPrintResults(results, { fixed = false } = {}) {
  const PREFIX_PADDING = ' '.repeat(4)
  const columnPadding = 'Description'.length // The longest column header word

  function label(text, padding = columnPadding) {
    if (padding < text.length) throw new Error('Padding must be greater than text length')
    return `${PREFIX_PADDING}${chalk.dim(text.padEnd(padding))}`
  }

  for (const [file, flaws] of Object.entries(results)) {
    console.log(chalk.bold(file))
    console.log('') // blank line

    // It's very possible that a the same file has multiple flaws of the
    // same rule but on different line numbers.
    const sorted = [...flaws]
      .sort((a, b) => a.lineNumber - b.lineNumber)
      .sort((a, b) => a.ruleDescription.localeCompare(b.ruleDescription))
      .sort((a, b) => {
        if (a.severity === b.severity) return 0
        if (a.severity === 'error') return -1
        if (b.severity === 'error') return 1
        return 0
      })
    let ruleDescription = ''

    const errorDetailsByDescription = new Map()
    for (const { errorDetail, ruleDescription } of sorted) {
      const details = errorDetailsByDescription.get(ruleDescription) || new Set()
      details.add(errorDetail)
      errorDetailsByDescription.set(ruleDescription, details)
    }

    for (const result of sorted) {
      const distinctDetails = errorDetailsByDescription.get(result.ruleDescription).size > 1

      if (ruleDescription !== result.ruleDescription) {
        if (ruleDescription) {
          console.log('')
        }
        if (result.fixable && fixed) {
          console.log(
            `${PREFIX_PADDING}${chalkFunColors('✨ FIXED!')} (was ${
              result.severity === 'error' ? 'an error' : 'a warning'
            })`,
          )
        } else {
          console.log(
            `${PREFIX_PADDING}${
              result.severity === 'error'
                ? chalk.bold(chalk.red('ERROR'))
                : result.severity === 'warning'
                ? chalk.yellow('WARNING')
                : chalk.blue(result.severity)
            }`,
          )
        }
        if (result.fixable && !fixed) {
          console.log(`${PREFIX_PADDING}${chalk.green('Fixable!')}`)
        }
        console.log(
          label('Rule'),
          result.ruleNames.map((name) => chalk.bold(name)).join(', '),
          chalk.dim(result.ruleDescription),
        )
        if (!distinctDetails) {
          console.log(label('Detail'), result.errorDetail)
        }
      }
      let position = chalk.yellow(result.lineNumber)
      if (isNumber(result.columnNumber) && result.columnNumber !== 1) {
        position += ` (col ${chalk.yellow(result.columnNumber)})`
      }
      if (distinctDetails) {
        console.log(label('Detail'), result.errorDetail)
      }
      console.log(
        label('Line'),
        position.padEnd(6),
        result.errorContext ? chalk.dim(shorten(result.errorContext.trim(), 80)) : '',
      )

      ruleDescription = result.ruleDescription
    }
    console.log('\n')
  }
}

function chalkFunColors(text) {
  const colors = [
    'red',
    'yellow',
    'green',
    'magenta',
    'cyan',
    'redBright',
    'yellowBright',
    'greenBright',
    'magentaBright',
    'cyanBright',
  ].sort(() => Math.random() - 0.5)
  let colorIndex = 0
  return text
    .split('')
    .map((char) => {
      const color = colors[colorIndex]
      colorIndex = (colorIndex + 1) % colors.length
      return chalk[color](char)
    })
    .join('')
}
