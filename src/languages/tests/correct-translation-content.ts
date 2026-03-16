import { describe, expect, test } from 'vitest'

import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

function fix(content: string, code: string, englishContent = '') {
  return correctTranslatedContentStrings(content, englishContent, {
    code,
    relativePath: 'test.md',
  })
}

describe('correctTranslatedContentStrings', () => {
  describe('Spanish (es)', () => {
    test('fixes colon-prefix tags', () => {
      expect(fix('{%: ifversion ghec %}', 'es')).toBe('{% ifversion ghec %}')
    })

    test('translates cuando → when in case statements', () => {
      expect(fix('{%- cuando "supported" %}', 'es')).toBe('{%- when "supported" %}')
    })
  })

  describe('Japanese (ja)', () => {
    test('fixes translated endcase', () => {
      expect(fix('{%- エンドケース -%}', 'ja')).toBe('{%- endcase -%}')
    })

    test('adds missing when keyword for English strings', () => {
      expect(fix('{%- "supported" %}', 'ja')).toBe('{%- when "supported" %}')
    })

    test('adds missing when keyword for Japanese strings', () => {
      expect(fix('{%- "サポートされている" %}', 'ja')).toBe('{%- when "supported" %}')
    })

    test('preserves trim syntax when adding when keyword', () => {
      expect(fix('{% "supported" %}', 'ja')).toBe('{% when "supported" %}')
      expect(fix('{%- "supported" %}', 'ja')).toBe('{%- when "supported" %}')
    })

    test('fixes empty trim tag before C', () => {
      expect(fix('{%- %}C', 'ja')).toBe('{%- when "closing-down" %}C')
    })

    test('fixes translated for-loops', () => {
      const input = '{%- tables.copilot.ides の version -%}'
      const output = fix(input, 'ja')
      expect(output).toBe('{%- for version in tables.copilot.ides -%}')
    })

    test('fixes translated else', () => {
      expect(fix('{% それ以外の場合 %}', 'ja')).toBe('{% else %}')
    })
  })

  describe('Russian (ru)', () => {
    test('fixes translated data tags', () => {
      expect(fix('{% данных variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated else', () => {
      expect(fix('{% ещё %}', 'ru')).toBe('{% else %}')
      expect(fix('{% еще %}', 'ru')).toBe('{% else %}')
    })

    test('fixes translated or in ifversion', () => {
      expect(fix('{% ifversion fpt или ghec %}', 'ru')).toBe('{% ifversion fpt or ghec %}')
    })

    test('fixes translated not in ifversion', () => {
      expect(fix('{% ifversion не ghes %}', 'ru')).toBe('{% ifversion not ghes %}')
    })

    test('fixes translated raw/endraw', () => {
      expect(fix('{% необработанный %}', 'ru')).toBe('{% raw %}')
      expect(fix('{% нарисовать %}', 'ru')).toBe('{% endraw %}')
    })

    test('handles конец after raw as endraw', () => {
      const input = '{% raw %}some content{% конец %}'
      expect(fix(input, 'ru')).toBe('{% raw %}some content{% endraw %}')
    })

    test('handles конец without raw as endif', () => {
      expect(fix('{% конец %}', 'ru')).toBe('{% endif %}')
    })

    test('fixes translated feature flags', () => {
      expect(fix('обязательный-2fa-dotcom-участник', 'ru')).toBe(
        'mandatory-2fa-dotcom-contributors',
      )
    })
  })

  describe('Chinese (zh)', () => {
    test('fixes translated if', () => {
      expect(fix('{ 如果 ghec %}', 'zh')).toBe('{% if ghec %}')
    })

    test('fixes stray Chinese then merged with HTML', () => {
      expect(fix('，则为 {%<div>', 'zh')).toBe('<div>')
    })
  })

  describe('Generic fixes', () => {
    test('fixes double braces', () => {
      expect(fix('{{% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes double percent in opening', () => {
      expect(fix('{%% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes missing percent after brace', () => {
      expect(fix('{else %}', 'es')).toBe('{% else %}')
      expect(fix('{endif %}', 'es')).toBe('{% endif %}')
    })

    test('fixes missing space after {%', () => {
      expect(fix('{%else %}', 'es')).toBe('{% else %}')
    })

    test('fixes empty tag as else', () => {
      expect(fix('{%}test', 'es')).toBe('{% else %}test')
    })

    test('fixes empty tag with space as endif', () => {
      expect(fix('{% }', 'es')).toBe('{% endif %}')
    })

    test('fixes bold markup injected in closing', () => {
      expect(fix('%**}', 'es')).toBe('%}**')
    })

    test('fixes {%** as else with bold', () => {
      expect(fix('{%**text**{% endif %}', 'es')).toBe('{% else %}**text**{% endif %}')
    })

    test('strips stray {% before non-ASCII text', () => {
      expect(fix('{% Привет мир', 'ru')).toBe('Привет мир')
    })

    test('recovers linebreaks from English', () => {
      const en = '{% endif %}\nSome text'
      const translated = '{% endif %} Some text'
      expect(fix(translated, 'es', en)).toBe('{% endif %}\nSome text')
    })
  })
})
