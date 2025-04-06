import { describe, expect, test } from 'vitest'

import { analyzeComment, getGuessedLanguage } from '../analyze-comment.js'

describe('analyzeComment', () => {
  test('email only', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment(' foo@example.com \n')
      expect(signals.includes('email-only')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('one@example.com\ntwo@example.com')
      expect(signals.includes('email-only')).toBeFalsy()
    }
    {
      const { signals } = await analyzeComment('one@two@thee')
      expect(signals.includes('email-only')).toBeFalsy()
    }
  })

  test('contains email', async () => {
    const { signals, rating } = await analyzeComment(' foo@example.com and more words here\n')
    expect(signals.includes('contains-email')).toBeTruthy()
    expect(rating).toBeLessThan(1.0)
  })

  test('url only', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment(' https://github.com ')
      expect(signals.includes('url-only')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment(
        ' http://user:pass@github.com/path?query=string#hash',
      )
      expect(signals.includes('url-only')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('https://example.com but more text')
      expect(signals.includes('url-only')).toBeFalsy()
    }
    {
      const { signals } = await analyzeComment('foo.bar.com')
      expect(signals.includes('url-only')).toBeFalsy()
    }
  })

  test('numbers only', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment(' 1234 ')
      expect(signals.includes('numbers-only')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('123 456')
      expect(signals.includes('numbers-only')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('123 fake street')
      expect(signals.includes('numbers-only')).toBeFalsy()
    }
    {
      const { signals } = await analyzeComment('00000-11111')
      expect(signals.includes('numbers-only')).toBeFalsy()
    }
  })

  test('all uppercase', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment(' SHOUTING ')
      expect(signals.includes('all-uppercase')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('ALS0 SHOUTING!')
      expect(signals.includes('all-uppercase')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('Not All Uppercase')
      expect(signals.includes('all-uppercase')).toBeFalsy()
    }
  })

  test('too-short', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment('Oneword ')
      expect(signals.includes('too-short')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('.!?')
      expect(signals.includes('too-short')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment(' Oneword two words')
      expect(signals.includes('too-short')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('A\nB')
      expect(signals.includes('too-short')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('A\nB\nC\nD')
      expect(signals.includes('too-short')).toBeFalsy()
    }
    {
      const { signals } = await analyzeComment('One two three four ')
      expect(signals.includes('too-short')).toBeFalsy()
    }
  })

  test('single-word', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment('  Word ')
      expect(signals.includes('single-word')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('.!?')
      expect(signals.includes('single-word')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('www.example.com/some/path')
      expect(signals.includes('single-word')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('One two')
      expect(signals.includes('single-word')).toBeFalsy()
    }
    {
      const { signals } = await analyzeComment('  one   two\tthree ')
      expect(signals.includes('single-word')).toBeFalsy()
    }
  })

  test('not-language', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment('Garçon')
      expect(signals.includes('not-language')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      // example of a false positive
      const { signals, rating } = await analyzeComment('english word')
      expect(signals.includes('not-language')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('english words longer sentence this time')
      expect(signals.includes('not-language')).toBeFalsy()
    }
    // Always allow English comments even when the page language is non-English
    {
      const { signals } = await analyzeComment('english words longer sentence this time', 'fr')
      expect(signals.includes('not-language')).toBeFalsy()
    }
    {
      const { signals } = await analyzeComment('Garçon des la voituré', 'fr')
      expect(signals.includes('not-language')).toBeFalsy()
    }
  })

  test('cuss-words-likely', async () => {
    // The "CK" makes the final word a mix or lower and upper case.
    const { signals, rating } = await analyzeComment('f*CK you'.replace('*', 'u'))
    expect(signals.includes('cuss-words-likely')).toBeTruthy()
    expect(rating).toBeLessThan(1.0)
  })

  test('cuss-words-maybe', async () => {
    const { signals, rating } = await analyzeComment('oh s**t'.replace('**', 'hi'))
    expect(signals.includes('cuss-words-maybe')).toBeTruthy()
    expect(rating).toBeLessThan(1.0)
  })

  test('mostly-emoji', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment('Hello World\n 😆 😆 😆 😆 😆 😆\n')
      expect(signals.includes('mostly-emoji')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('🌈 🌈 🌧️\n')
      expect(signals.includes('mostly-emoji')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('Great 👍')
      expect(signals.includes('mostly-emoji')).toBeFalsy()
    }
  })

  test('spammy-words', async () => {
    // Yes
    {
      const { signals, rating } = await analyzeComment('Roblox free roblux')
      expect(signals.includes('spammy-words')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }
    {
      const { signals, rating } = await analyzeComment('GOOGLE \n\nGAME')
      expect(signals.includes('spammy-words')).toBeTruthy()
      expect(rating).toBeLessThan(1.0)
    }

    // No
    {
      const { signals } = await analyzeComment('GitHub is great!')
      expect(signals.includes('spammy-words')).toBeFalsy()
    }
    // No sub-string matches allowed
    {
      const { signals } = await analyzeComment('MinecraftFacebook')
      expect(signals.includes('spammy-words')).toBeFalsy()
    }
  })

  test('guessed-language', async () => {
    // Yes
    {
      const guessedLanguage = await getGuessedLanguage('Garçon des la voituré')
      expect(guessedLanguage).toBe('fr')
    }
    {
      const guessedLanguage = await getGuessedLanguage('english words longer sentence this time')
      expect(guessedLanguage).toBe('en')
    }

    // False positives due to short text
    {
      const guessedLanguage = await analyzeComment('Hello')
      expect(guessedLanguage).not.toBe('en')
    }
    {
      const guessedLanguage = await analyzeComment('Garçon')
      expect(guessedLanguage).not.toBe('fr')
    }
  })
})
