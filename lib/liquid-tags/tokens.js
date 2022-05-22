import walk from 'walk-sync'
import { Tokenizer } from 'liquidjs'
import { readFileSync } from 'fs'
import gitDiff from 'git-diff'
import _ from 'lodash'

function getGitDiff(a, b) {
  return gitDiff(a, b, { flags: '--ignore-all-space' })
}

function getMissingLines(diff) {
  return diff
    .split('\n')
    .filter((line) => line.startsWith('-'))
    .map((line) => line.replace('-', ''))
}

function getExceedingLines(diff) {
  return diff
    .split('\n')
    .filter((line) => line.startsWith('+'))
    .map((line) => line.replace('+', ''))
}

export function languageFiles(language, folder = 'content') {
  const englishFiles = walk(folder, { directories: false })
  const languageFiles = walk(`${language.dir}/${folder}`, { directories: false })
  return _.intersection(englishFiles, languageFiles).map((file) => `${folder}/${file}`)
}

export function compareLiquidTags(file, language) {
  const translation = `${language.dir}/${file}`
  const sourceTokens = getTokensFromFile(file).rejectType('html')
  const otherFileTokens = getTokensFromFile(translation).rejectType('html')
  const diff = sourceTokens.diff(otherFileTokens)

  return {
    file,
    translation,
    diff,
  }
}

function getTokens(contents) {
  const tokenizer = new Tokenizer(contents)
  return new Tokens(...tokenizer.readTopLevelTokens())
}

export function getTokensFromFile(filePath) {
  const contents = readFileSync(filePath, 'utf8')
  try {
    return new Tokens(...getTokens(contents))
  } catch (e) {
    const error = new Error(`Error parsing ${filePath}: ${e.message}`)
    error.filePath = filePath
    throw error
  }
}

export class Tokens extends Array {
  rejectType(tagType) {
    return this.filter(
      (token) => token.constructor.name.toUpperCase() !== `${tagType}Token`.toUpperCase()
    )
  }

  onlyText() {
    return this.map((token) => token.getText())
  }

  diff(otherTokens) {
    const a = this.onlyText()
    const b = otherTokens.onlyText()

    const diff = getGitDiff(a.join('\n'), b.join('\n'))

    if (!diff) {
      return { count: 0, missing: [], exceeding: [], output: '' }
    }

    const missing = getMissingLines(diff)
    const exceeding = getExceedingLines(diff)
    const count = exceeding.length + missing.length

    return { count, missing, exceeding, output: diff }
  }
}
