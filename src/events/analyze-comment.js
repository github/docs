import fs from 'fs'
import yaml from 'js-yaml'
import { cuss } from 'cuss'
import { cuss as cussPt } from 'cuss/pt'
import { cuss as cussFr } from 'cuss/fr'
import { cuss as cussEs } from 'cuss/es'
import { Language } from '@horizon-rs/language-guesser'

const language = new Language()

// Exported for the debugging CLI script
export const SIGNAL_RATINGS = [
  {
    reduction: 1.0,
    name: 'email-only',
    validator: (comment) => isEmailOnly(comment),
  },
  {
    reduction: 0.2,
    name: 'contains-email',
    validator: (comment) => isContainingEmail(comment),
  },
  {
    reduction: 1.0,
    name: 'url-only',
    validator: (comment) => isURL(comment),
  },
  {
    reduction: 1.0,
    name: 'numbers-only',
    validator: (comment) => isNumbersOnly(comment),
  },
  {
    reduction: 0.1,
    name: 'all-uppercase',
    validator: (comment) => isAllUppercase(comment),
  },
  {
    reduction: 0.5,
    name: 'single-word',
    validator: (comment) => isSingleWord(comment),
  },
  {
    reduction: 0.2,
    name: 'too-short',
    validator: (comment) => isTooShort(comment),
  },
  {
    reduction: 0.2,
    name: 'not-language',
    validator: (comment, language) => isNotLanguage(comment, language),
  },
  {
    reduction: 0.3,
    name: 'cuss-words-likely',
    validator: (comment, language) => isLikelyCussWords(comment, language),
  },
  {
    reduction: 0.1,
    name: 'cuss-words-maybe',
    validator: (comment, language) => isMaybeCussWords(comment, language),
  },
  {
    reduction: 0.2,
    name: 'mostly-emoji',
    validator: (comment) => isMostlyEmoji(comment),
  },
  {
    reduction: 1.0,
    name: 'spammy-words',
    validator: (comment) => isSpammyWordList(comment),
  },
]

export async function getGuessedLanguage(comment) {
  if (!comment || !comment.trim()) {
    return
  }

  const bestGuess = language.guessBest(comment.trim())
  if (!bestGuess) return // Can happen if the text is just whitespace
  // // @horizon-rs/language-guesser is based on tri-grams and can lead
  // // to false positives. For example, it thinks that 'Thamk you ❤️🙏' is
  // // Haitian! And that 'I wanne robux 1000' is Polish!
  // // But that's because they are short and there's not enough clues to
  // // guess what language it is. You and I might know those are actually
  // // attempts to be English, despite the spelling.
  // // But are they useful comments? Given that this is just a signal,
  // // and not a hard blocker, it's more of a clue than a fact.

  return bestGuess.alpha2
}

export async function analyzeComment(text, language = 'en') {
  const signals = []
  let rating = 1.0
  for (const { reduction, name, validator } of SIGNAL_RATINGS) {
    if (validator(text, language)) {
      signals.push(name)
      rating -= reduction
    }
    if (rating <= 0) break
  }

  return { signals, rating }
}

function isEmailOnly(text) {
  if (text.includes('@') && !/\s/.test(text.trim()) && !text.includes('://')) {
    const atSigns = text.split('@').length
    if (atSigns === 2) {
      return true
    }
  }
}

function isContainingEmail(text) {
  if (text.includes('@') && !isEmailOnly(text)) {
    // Don't use splitWords() here because `foo@example.com` will be
    // split up into ['foo', 'example.com'].
    return text.split(/\s+/g).some((word) => isEmailOnly(word))
  }
  return false
}

function isURL(text) {
  if (!text.trim().includes(' ')) {
    if (URL.canParse(text.trim())) return true
  }
}

function isNumbersOnly(text) {
  return /^\d+$/.test(text.replace(/\s/g, ''))
}

function isAllUppercase(text) {
  return /[A-Z]/.test(text) && text === text.toUpperCase()
}

function isTooShort(text) {
  const split = text.trim().split(/\s+/)
  if (split.length <= 3) {
    return true
  }
}

function isSingleWord(text) {
  const whitespaceSplit = text.trim().split(/\s+/)
  // E.g. `this-has-no-whitespace` or `snap/hooks/install`
  return whitespaceSplit.length === 1
}

function isNotLanguage(text, language_) {
  const bestGuess = language.guessBest(text.trim())
  if (!bestGuess) return true // Can happen if the text is just whitespace
  // @horizon-rs/language-guesser is based on tri-grams and can lead
  // to false positives. For example, it thinks that 'Thamk you ❤️🙏' is
  // Haitian! And that 'I wanne robux 1000' is Polish!
  // But that's because they are short and there's not enough clues to
  // guess what language it is. You and I might know those are actually
  // attempts to be English, despite the spelling.
  // But are they useful comments? Given that this is just a signal,
  // and not a hard blocker, it's more of a clue than a fact.

  // We don't want to reduce the score for English comments. English
  // comments, when evaluated by language, are always valid.
  return bestGuess.alpha2 !== language_ && bestGuess.alpha2 !== 'en'
}

function isMostlyEmoji(text) {
  text = text.replace(/\s/g, '')
  const emojiRegex = /\p{Emoji}/gu
  const emojiMatches = text.match(emojiRegex)
  if (!emojiMatches) return false
  const emojiRatio = emojiMatches.length / text.length
  return emojiRatio > 0.25
}

function getCussWords(lang) {
  switch (lang) {
    case 'pt':
      return cussPt
    case 'fr':
      return cussFr
    case 'es':
      return cussEs
    default:
      return cuss
  }
}

function isLikelyCussWords(text, language_, rating = 2) {
  const cussWords = getCussWords(language_)
  const words = splitWords(text, language_ || 'en').map((word) => word.toLowerCase())
  for (const word of words) {
    if (cussWords[word] && cussWords[word] === rating) {
      return true
    }
  }
  return false
}

function isMaybeCussWords(text, language_) {
  return isLikelyCussWords(text, language_, 1)
}

const segmenter = new Intl.Segmenter([], { granularity: 'word' })

function splitWords(text) {
  const segmentedText = segmenter.segment(text)
  return [...segmentedText].filter((s) => s.isWordLike).map((s) => s.segment)
}

const surveyYaml = yaml.load(fs.readFileSync('data/survey-words.yml', 'utf8'))
const surveyWords = surveyYaml.words.map((word) => word.toLowerCase())

function isSpammyWordList(text) {
  const words = text.toLowerCase().split(/(\s+|\\n+)/g)
  // Currently, we're intentionally not checking for
  // survey words that are substrings of a comment word.
  return Boolean(words.some((word) => surveyWords.includes(word)))
}
