import { describe, expect, test } from 'vitest'

import { analyzeComment } from '../analyze-comment.js'

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

    // No
    {
      const { signals } = await analyzeComment('A\nB')
      expect(signals.includes('too-short')).toBeFalsy()
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
    {
      const { signals } = await analyzeComment('Garçon des la voituré', 'fr')
      expect(signals.includes('not-language')).toBeFalsy()
    }
  })

  test('cuss-words-likely', async () => {
    const { signals, rating } = await analyzeComment('f*ck you'.replace('*', 'u'))
    expect(signals.includes('cuss-words-likely')).toBeTruthy()
    expect(rating).toBeLessThan(1.0)
  })

  test('cuss-words-maybe', async () => {
    const { signals, rating } = await analyzeComment('oh s**t'.replace('**', 'hi'))
    expect(signals.includes('cuss-words-maybe')).toBeTruthy()
    expect(rating).toBeLessThan(1.0)
  })
})
