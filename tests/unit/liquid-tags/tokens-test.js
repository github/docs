import { expect } from '@jest/globals'
import path from 'path'
import { fileURLToPath } from 'url'

import { getTokensFromFile, Tokens } from '../../../lib/liquid-tags/tokens'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getFixturePath(name) {
  return path.join(__dirname, '../..', 'fixtures', name)
}

describe('getTokensFromFile', () => {
  let fixturePath
  let tokens

  beforeEach(() => {
    fixturePath = getFixturePath('liquid-tags/minimal-conditional.md')
    tokens = getTokensFromFile(fixturePath)
  })

  describe('getTokensFromFile', () => {
    it('returns all the tokens from a template file', () => {
      expect(tokens.length).toEqual(7)
    })
  })

  describe('Tokens', () => {
    describe('.rejectType', () => {
      it('rejects tokens of a particular type', () => {
        const nonHtmlTokens = tokens.rejectType('html')

        expect(nonHtmlTokens.length).toEqual(3)
      })
    })

    describe('.diff', () => {
      let tokens
      let otherTokens

      const addTokens = (collection, elements) => {
        elements.forEach((element) => {
          collection.push({ getText: () => element })
        })
      }

      beforeEach(() => {
        tokens = new Tokens()
        otherTokens = new Tokens()
        addTokens(tokens, ['apples', 'bananas', 'oranges'])
        addTokens(otherTokens, ['apples', 'oranges'])
      })

      it('shows elements that are missing', () => {
        const diff = tokens.diff(otherTokens)

        expect(diff.count).toEqual(1)
        expect(diff.missing).toEqual(['bananas'])
      })

      it('shows elements that are exceeding', () => {
        const diff = otherTokens.diff(tokens)

        expect(diff.count).toEqual(1)
        expect(diff.exceeding).toEqual(['bananas'])
      })

      it('shows no difference when collections are the same', () => {
        const diff = tokens.diff(tokens)

        expect(diff.count).toEqual(0)
      })
    })
  })
})
