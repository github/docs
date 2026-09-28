import { describe, expect, test } from 'vitest'
import { generatePromptId } from '@/content-render/lib/prompt-id'

describe('generatePromptId', () => {
  test('generates consistent IDs for same content', () => {
    const content = 'example prompt text'
    const id1 = generatePromptId(content)
    const id2 = generatePromptId(content)
    expect(id1).toBe(id2)
  })

  test('generates different IDs for different content', () => {
    const id1 = generatePromptId('prompt one')
    const id2 = generatePromptId('prompt two')
    expect(id1).not.toBe(id2)
  })

  test('generates numeric string IDs', () => {
    const id = generatePromptId('test prompt')
    expect(typeof id).toBe('string')
    expect(Number.isNaN(Number(id))).toBe(false)
  })

  test('handles empty strings', () => {
    const id = generatePromptId('')
    expect(typeof id).toBe('string')
    expect(id.length).toBeGreaterThan(0)
  })

  test('handles special characters', () => {
    const id1 = generatePromptId('prompt with\nnewlines')
    const id2 = generatePromptId('prompt with\ttabs')
    const id3 = generatePromptId('prompt with "quotes"')
    expect(typeof id1).toBe('string')
    expect(typeof id2).toBe('string')
    expect(typeof id3).toBe('string')
    expect(id1).not.toBe(id2)
    expect(id2).not.toBe(id3)
  })

  test('generates deterministic IDs (regression test)', () => {
    // Fixed hash outputs catch unintended murmurhash changes.
    expect(generatePromptId('hello world')).toBe('1730621824')
    expect(generatePromptId('test')).toBe('4180565944')
  })

  test('handles prompts with code context (ref pattern)', () => {
    // ref= prompts include referenced code, a newline, then prompt text.
    const codeContext =
      'function logPersonAge(name, age, revealAge) {\n  if (revealAge) {\n    console.log(name);\n  }\n}'
    const promptText = 'Improve the variable names in this function'
    const combinedPrompt = `${codeContext}\n${promptText}`

    const id = generatePromptId(combinedPrompt)
    expect(typeof id).toBe('string')
    expect(id.length).toBeGreaterThan(0)

    expect(id).not.toBe(generatePromptId(promptText))
  })

  test('handles very long prompts', () => {
    // Real prompts can include code blocks longer than 100 lines.
    const longCode = 'x\n'.repeat(500)
    const id = generatePromptId(longCode)
    expect(typeof id).toBe('string')
    expect(id.length).toBeGreaterThan(0)
  })

  test('handles prompts with backticks and template literals', () => {
    // Prompts can include inline code delimiters.
    const prompt = "In JavaScript I'd write: `The ${numCats === 1 ? 'cat is' : 'cats are'} hungry.`"
    const id = generatePromptId(prompt)
    expect(typeof id).toBe('string')
    expect(id.length).toBeGreaterThan(0)
  })

  test('handles prompts with placeholders', () => {
    // Content uses placeholders like NEW-LANGUAGE and OWNER/REPOSITORY.
    const id1 = generatePromptId('What is NEW-LANGUAGE best suited for?')
    const id2 = generatePromptId('In OWNER/REPOSITORY, create a feature request')
    expect(id1).not.toBe(id2)
    expect(typeof id1).toBe('string')
    expect(typeof id2).toBe('string')
  })

  test('handles unicode and international characters', () => {
    // Prompts can include non-ASCII text.
    const id1 = generatePromptId('Explique-moi le code en français')
    const id2 = generatePromptId('コードを説明してください')
    const id3 = generatePromptId('Объясните этот код')
    expect(typeof id1).toBe('string')
    expect(typeof id2).toBe('string')
    expect(typeof id3).toBe('string')
    expect(id1).not.toBe(id2)
    expect(id2).not.toBe(id3)
  })
})
