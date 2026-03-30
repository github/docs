import { describe, expect, test } from 'vitest'
import { performance } from 'perf_hooks'

import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

function fix(content: string, code: string, englishContent = '') {
  return correctTranslatedContentStrings(content, englishContent, {
    code,
    relativePath: 'test.md',
  })
}

describe('correctTranslatedContentStrings', () => {
  // ─── SPANISH (es) ───────────────────────────────────────────────────

  describe('Spanish (es)', () => {
    test('fixes colon-prefix tags', () => {
      expect(fix('{%: ifversion ghec %}', 'es')).toBe('{% ifversion ghec %}')
    })

    test('fixes translated data tag variants', () => {
      expect(fix('{% vulnerables variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% datos variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% de datos variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% datos reusables.foo.bar %}', 'es')).toBe('{% data reusables.foo.bar %}')
      expect(fix('{% data reutilizables.foo.bar %}', 'es')).toBe('{% data reusables.foo.bar %}')
    })

    test('fixes translated comment keyword', () => {
      expect(fix('{% comentario %}', 'es')).toBe('{% comment %}')
    })

    test('fixes translated if keyword', () => {
      expect(fix('{% si ghec %}', 'es')).toBe('{% if ghec %}')
    })

    test('fixes translated raw keyword variants', () => {
      expect(fix('{% sin procesar %}', 'es')).toBe('{% raw %}')
      expect(fix('{% %} sin procesar', 'es')).toBe('{% raw %}')
      expect(fix('{% sin formato }', 'es')).toBe('{% raw %}')
      expect(fix('{%sin formato}', 'es')).toBe('{% raw %}')
      expect(fix('{%  %sin formato }', 'es')).toBe('{% raw %}')
    })

    test('fixes translated glossary template', () => {
      expect(fix('{% para glosario en glosarios %}', 'es')).toBe('{% for glossary in glossaries %}')
      expect(fix('{{ glosario.term }}', 'es')).toBe('{{ glossary.term }}')
      expect(fix('{{ glosario.description }}', 'es')).toBe('{{ glossary.description }}')
    })

    test('fixes o and y/o → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt o ghec %}', 'es')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{% ifversion fpt y/o ghec %}', 'es')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{%- ifversion fpt o ghec %}', 'es')).toBe('{%- ifversion fpt or ghec %}')
      expect(fix('{% elsif fpt o ghec %}', 'es')).toBe('{% elsif fpt or ghec %}')
    })

    test('fixes no → not in ifversion tags', () => {
      expect(fix('{% ifversion no ghes %}', 'es')).toBe('{% ifversion not ghes %}')
      expect(fix('{%- ifversion no ghes %}', 'es')).toBe('{%- ifversion not ghes %}')
    })

    test('fixes translated for-loop keywords', () => {
      expect(fix('{%- para entrada en list %}', 'es')).toBe('{%- for entry in list %}')
      expect(fix('{%- para la entrada en list %}', 'es')).toBe('{%- for entry in list %}')
    })

    test('translates cuando → when in case statements', () => {
      expect(fix('{%- cuando "supported" %}', 'es')).toBe('{%- when "supported" %}')
    })

    test('fixes translated note block tags', () => {
      expect(fix('{% nota %}', 'es')).toBe('{% note %}')
      expect(fix('{%- nota %}', 'es')).toBe('{%- note %}')
      expect(fix('{%- nota -%}', 'es')).toBe('{%- note -%}')
    })

    test('fixes multiple or-translations in single ifversion', () => {
      expect(fix('{% ifversion fpt o ghec o ghes %}', 'es')).toBe(
        '{% ifversion fpt or ghec or ghes %}',
      )
    })
  })

  // ─── JAPANESE (ja) ──────────────────────────────────────────────────

  describe('Japanese (ja)', () => {
    test('fixes translated data tags', () => {
      expect(fix('{% データ variables.product.github %}', 'ja')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% データvariables.product.github %}', 'ja')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% データ reusables.foo %}', 'ja')).toBe('{% data reusables.foo %}')
      expect(fix('{% データ変数.product.github %}', 'ja')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% データ再利用可能な.foo %}', 'ja')).toBe('{% data reusables.foo %}')
      expect(fix('{% データ再利用可能.foo %}', 'ja')).toBe('{% data reusables.foo %}')
      expect(fix('{% データ再利用.foo %}', 'ja')).toBe('{% data reusables.foo %}')
    })

    test('fixes double-brace data corruption', () => {
      expect(fix('{% {{データ}} variables.product.github %}', 'ja')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes note keyword', () => {
      expect(fix('{% メモ %}', 'ja')).toBe('{% note %}')
    })

    test('fixes Japanese or (または) in ifversion tags', () => {
      expect(fix('{% ifversion fpt または ghec %}', 'ja')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{%- ifversion fpt または ghec %}', 'ja')).toBe('{%- ifversion fpt or ghec %}')
    })

    test('fixes trailing quote on YAML value', () => {
      expect(fix('  asked_too_many_times: some value"  ', 'ja')).toBe(
        '  asked_too_many_times: some value',
      )
    })

    test('fixes translated endcase', () => {
      expect(fix('{%- エンドケース -%}', 'ja')).toBe('{%- endcase -%}')
      expect(fix('{% エンドケース %}', 'ja')).toBe('{% endcase %}')
    })

    test('fixes translated else', () => {
      expect(fix('{%- それ以外の場合 %}', 'ja')).toBe('{%- else %}')
      expect(fix('{% それ以外の場合 %}', 'ja')).toBe('{% else %}')
    })

    test('fixes translated comment/endcomment', () => {
      expect(fix('{%- コメント %}', 'ja')).toBe('{%- comment %}')
      expect(fix('{% コメント %}', 'ja')).toBe('{% comment %}')
      expect(fix('{%- 終了コメント %}', 'ja')).toBe('{%- endcomment %}')
      expect(fix('{% 終了コメント %}', 'ja')).toBe('{% endcomment %}')
    })

    test('adds missing when keyword for English strings', () => {
      expect(fix('{%- "supported" %}', 'ja')).toBe('{%- when "supported" %}')
      expect(fix('{% "not_supported" %}', 'ja')).toBe('{% when "not_supported" %}')
      expect(fix('{%- "preview" %}', 'ja')).toBe('{%- when "preview" %}')
    })

    test('adds missing when keyword for Japanese strings', () => {
      expect(fix('{%- "サポートされている" %}', 'ja')).toBe('{%- when "supported" %}')
      expect(fix('{%- "サポートされていません" %}', 'ja')).toBe('{%- when "not_supported" %}')
      expect(fix('{%- "プレビュー" %}', 'ja')).toBe('{%- when "preview" %}')
    })

    test('preserves trim syntax when adding when keyword', () => {
      expect(fix('{% "supported" %}', 'ja')).toBe('{% when "supported" %}')
      expect(fix('{%- "supported" %}', 'ja')).toBe('{%- when "supported" %}')
    })

    test('fixes empty trim tag before C', () => {
      expect(fix('{%- %}C', 'ja')).toBe('{%- when "closing-down" %}C')
    })

    test('fixes translated for-loops with の', () => {
      expect(fix('{%- tables.copilot.ides の version -%}', 'ja')).toBe(
        '{%- for version in tables.copilot.ides -%}',
      )
      expect(fix('{% groupVersions の ver %}', 'ja')).toBe('{% for ver in groupVersions %}')
    })

    test('fixes for-loop variant with の outside tag', () => {
      expect(fix('{%- tables.copilot.ides %} のversionの場合', 'ja')).toBe(
        '{%- for version in tables.copilot.ides %}',
      )
    })

    test('fixes translated variable names', () => {
      expect(fix('{{ バージョン }}', 'ja')).toBe('{{ version }}')
      expect(fix('{{ 言語 }}', 'ja')).toBe('{{ language }}')
    })

    test('fixes translated assign keyword', () => {
      expect(fix('{%- 言語を割り当てる = "ja" %}', 'ja')).toBe('{%- assign language = "ja" %}')
    })

    test('fixes rearranged assign with を割り当てる', () => {
      expect(fix('{%- featureData = entry.features %} を割り当てる', 'ja')).toBe(
        '{%- assign featureData = entry.features %}',
      )
    })

    test('strips stray の割り当て and の場合', () => {
      expect(fix('{%- assign x = y -%} の割り当て', 'ja')).toBe('{%- assign x = y -%}')
    })

    test('adds missing if keyword', () => {
      expect(fix('{%- featureData.overview %}', 'ja')).toBe('{%- if featureData.overview %}')
      expect(fix('{% entry.hasNote %}', 'ja')).toBe('{% if entry.hasNote %}')
    })

    test('adds missing assign keyword', () => {
      expect(fix('{%- featureKey = "copilot" %}', 'ja')).toBe(
        '{%- assign featureKey = "copilot" %}',
      )
      expect(fix('{%- supportLevel = entry.support -%}', 'ja')).toBe(
        '{%- assign supportLevel = entry.support -%}',
      )
    })

    test('fixes garbled endif with percent placed after keyword', () => {
      // `{ endif% %}` — percent appears after "endif" instead of after the opening brace
      expect(fix('some content\n{ endif% %}\nmore', 'ja')).toBe('some content\n{% endif %}\nmore')
    })
  })

  // ─── PORTUGUESE (pt) ───────────────────────────────────────────────

  describe('Portuguese (pt)', () => {
    test('fixes translated data tags', () => {
      expect(fix('{% dados variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% de dados variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% dados reusables.foo %}', 'pt')).toBe('{% data reusables.foo %}')
      expect(fix('{{% dados variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{{% datas variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated else variants', () => {
      expect(fix('{% senão %}', 'pt')).toBe('{% else %}')
      expect(fix('{% mais %}', 'pt')).toBe('{% else %}')
    })

    test('fixes translated if keyword', () => {
      expect(fix('{% se ghec %}', 'pt')).toBe('{% if ghec %}')
    })

    test('fixes translated assign keyword', () => {
      expect(fix('{% atribuir x = y %}', 'pt')).toBe('{% assign x = y %}')
    })

    test('fixes translated raw keyword', () => {
      expect(fix('{% %} bruto', 'pt')).toBe('{% raw %}')
    })

    test('fixes %de dados patterns', () => {
      expect(fix('{% %de dados reusables.foo %}', 'pt')).toBe('{% data reusables.foo %}')
      expect(fix('{% %de dados variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes móvel keyword', () => {
      expect(fix('{% %móvel }', 'pt')).toBe('{% mobile %}')
    })

    test('fixes ou → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt ou ghec %}', 'pt')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{%- elsif fpt ou ghec %}', 'pt')).toBe('{%- elsif fpt or ghec %}')
    })

    test('fixes fully translated reutilizáveis reusables path', () => {
      // `reutilizáveis` is Portuguese for "reusables"
      expect(fix('{% dados reutilizáveis.repositórios.reaction_list %}', 'pt')).toBe(
        '{% data reusables.repositories.reaction_list %}',
      )
      expect(fix('{% dados reutilizáveis.foo.bar %}', 'pt')).toBe('{% data reusables.foo.bar %}')
    })

    test('fixes translated repositórios path segment', () => {
      // `repositórios` is Portuguese for "repositories"
      expect(fix('{% data reusables.repositórios.reaction_list %}', 'pt')).toBe(
        '{% data reusables.repositories.reaction_list %}',
      )
    })
  })

  // ─── CHINESE (zh) ──────────────────────────────────────────────────

  describe('Chinese (zh)', () => {
    test('fixes translated data tags', () => {
      expect(fix('{% 数据variables.product.github %}', 'zh')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% 数据 variables.product.github %}', 'zh')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% 数据可重用s.foo %}', 'zh')).toBe('{% data reusables.foo %}')
    })

    test('fixes translated else and raw', () => {
      expect(fix('{% 其他 %}', 'zh')).toBe('{% else %}')
      expect(fix('{% 原始 %}', 'zh')).toBe('{% raw %}')
    })

    test('fixes Chinese if keyword', () => {
      expect(fix('{ 如果 ghec %}', 'zh')).toBe('{% if ghec %}')
    })

    test('fixes stray Chinese then merged with HTML', () => {
      expect(fix('，则为 {%<div>', 'zh')).toBe('<div>')
    })

    test('fixes 或 → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt 或 ghec %}', 'zh')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{%- elsif fpt 或 ghec %}', 'zh')).toBe('{%- elsif fpt or ghec %}')
    })
  })

  // ─── RUSSIAN (ru) ──────────────────────────────────────────────────

  describe('Russian (ru)', () => {
    test('fixes AUTOTITLE with guillemets', () => {
      expect(fix('[«AUTOTITLE»](/path)', 'ru')).toBe('[AUTOTITLE](/path)')
    })

    test('fixes АВТОЗАГОЛОВОК (translated AUTOTITLE)', () => {
      expect(fix('[АВТОЗАГОЛОВОК](/path/to/article)', 'ru')).toBe('[AUTOTITLE](/path/to/article)')
    })

    test('fixes translated data tag variants', () => {
      expect(fix('{% данных variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% данных, variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% данными variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% данных организации variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% данным variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% данные variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% данных reusables.foo %}', 'ru')).toBe('{% data reusables.foo %}')
      expect(fix('{% данные reusables.foo %}', 'ru')).toBe('{% data reusables.foo %}')
    })

    test('fixes broadened данных. pattern', () => {
      expect(fix('{% данных.product.github %}', 'ru')).toBe('{% data variables.product.github %}')
    })

    test('fixes переменных данных pattern', () => {
      expect(fix('{% переменных данных.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% data переменных.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes dot-prefix paths', () => {
      expect(fix('{% .dependency-review.foo %}', 'ru')).toBe(
        '{% data variables.dependency-review.foo %}',
      )
      expect(fix('{% .code-scanning.foo %}', 'ru')).toBe('{% data variables.code-scanning.foo %}')
      expect(fix('{%.dependency-review.foo %}', 'ru')).toBe(
        '{% data variables.dependency-review.foo %}',
      )
      expect(fix('{%.copilot.foo %}', 'ru')).toBe('{% data variables.copilot.foo %}')
    })

    test('fixes stray punctuation in data tags', () => {
      expect(fix('{% данных" variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%" variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%, variables.product.github %}', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated raw/endraw', () => {
      expect(fix('{% необработанного %}', 'ru')).toBe('{% raw %}')
      expect(fix('{% необработанные %}', 'ru')).toBe('{% raw %}')
      expect(fix('{% необработанный %}', 'ru')).toBe('{% raw %}')
      expect(fix('{% сырой %}', 'ru')).toBe('{% raw %}')
      expect(fix('{% нарисовать %}', 'ru')).toBe('{% endraw %}')
      expect(fix('{% запроса %}', 'ru')).toBe('{% endraw %}')
    })

    test('fixes translated or (или) in ifversion tags', () => {
      expect(fix('{%- ifversion fpt или ghec %}', 'ru')).toBe('{%- ifversion fpt or ghec %}')
      expect(fix('{% ifversion fpt или ghec %}', 'ru')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{% ifversion ghec или fpt %}', 'ru')).toBe('{% ifversion ghec or fpt %}')
      expect(fix('{% elsif ghec или ghes %}', 'ru')).toBe('{% elsif ghec or ghes %}')
      expect(fix('{% ghes или ghec %}', 'ru')).toBe('{% ifversion ghes or ghec %}')
    })

    test('fixes translated not (не)', () => {
      expect(fix('{% ifversion не ghes %}', 'ru')).toBe('{% ifversion not ghes %}')
    })

    test('fixes translated else variants', () => {
      expect(fix('{% еще %}', 'ru')).toBe('{% else %}')
      expect(fix('{% ещё %}', 'ru')).toBe('{% else %}')
    })

    test('fixes конец as context-aware end tag', () => {
      expect(fix('{% raw %}some content{% конец %}', 'ru')).toBe(
        '{% raw %}some content{% endraw %}',
      )
      expect(fix('{% конец %}', 'ru')).toBe('{% endif %}')
    })

    test('fixes translated feature flag names', () => {
      expect(fix('обязательный-2fa-dotcom-участник', 'ru')).toBe(
        'mandatory-2fa-dotcom-contributors',
      )
      expect(fix('обязательный-2fa-участник-2023', 'ru')).toBe('mandatory-2fa-contributors-2023')
    })

    test('fixes other translated keywords', () => {
      expect(fix('{% конечным %}', 'ru')).toBe('{% endif %}')
      expect(fix('{% endif _%}', 'ru')).toBe('{% endif %}')
      expect(fix('{% примечание %}', 'ru')).toBe('{% note %}')
      expect(fix('{% конечных головщиков %}', 'ru')).toBe('{% endrowheaders %}')
      expect(fix('{% эндкёрл %}', 'ru')).toBe('{% endcurl %}')
      expect(fix('{% Эльсиф %}', 'ru')).toBe('{% else %}')
    })

    test('fixes translated reusable paths', () => {
      expect(fix('{% повторно используемых данных.foo %}', 'ru')).toBe('{% data reusables.foo %}')
      expect(fix('{% данных для повторного использования.foo %}', 'ru')).toBe(
        '{% data reusables.foo %}',
      )
    })

    test('fixes double quotes in Russian YAML', () => {
      expect(fix('href=""https://example.com"', 'ru')).toBe('href="https://example.com"')
    })

    test('fixes empty HTML tags', () => {
      expect(fix('some <b></b> text', 'ru')).toBe('some  text')
      expect(fix('some <u></u> text', 'ru')).toBe('some  text')
    })

    test('fixes Russian glossary template', () => {
      expect(fix('{% для глоссария в глоссариях %}', 'ru')).toBe('{% for glossary in glossaries %}')
      expect(fix('{{ глоссарий.term }}', 'ru')).toBe('{{ glossary.term }}')
      expect(fix('{{ глоссарий.description }}', 'ru')).toBe('{{ glossary.description }}')
    })

    test('fixes rearranged data tag patterns', () => {
      expect(fix('variables.product.github %данных {% }', 'ru')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated octicon names', () => {
      expect(
        fix('{% octicon "организация" aria-hidden="true" aria-label="organization" %}', 'ru'),
      ).toBe('{% octicon "organization" aria-hidden="true" aria-label="organization" %}')
    })
  })

  // ─── FRENCH (fr) ───────────────────────────────────────────────────

  describe('French (fr)', () => {
    test('fixes translated data tags', () => {
      expect(fix('{% données variables.product.github %}', 'fr')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% données réutilisables.foo %}', 'fr')).toBe('{% data reusables.foo %}')
      expect(fix('{% variables de données.product.github %}', 'fr')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% données reusables.foo %}', 'fr')).toBe('{% data reusables.foo %}')
    })

    test('fixes translated else', () => {
      expect(fix('{% autre %}', 'fr')).toBe('{% else %}')
    })

    test('fixes translated raw/endraw', () => {
      expect(fix('{% brut %}', 'fr')).toBe('{% raw %}')
      expect(fix('{% %brut }', 'fr')).toBe('{% raw %}')
      expect(fix('{% redessiner %}', 'fr')).toBe('{% endraw %}')
    })

    test('fixes ou → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt ou ghec %}', 'fr')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{%- elsif fpt ou ghec %}', 'fr')).toBe('{%- elsif fpt or ghec %}')
    })

    test('fixes translated block tags', () => {
      expect(fix('{% remarque %}', 'fr')).toBe('{% note %}')
      expect(fix('{%- remarque %}', 'fr')).toBe('{%- note %}')
      expect(fix('{%- remarque -%}', 'fr')).toBe('{%- note -%}')
      expect(fix('{% avertissement %}', 'fr')).toBe('{% warning %}')
      expect(fix('{%- avertissement %}', 'fr')).toBe('{%- warning %}')
      expect(fix('{%- avertissement -%}', 'fr')).toBe('{%- warning -%}')
      expect(fix('{% conseil %}', 'fr')).toBe('{% tip %}')
      expect(fix('{%- conseil %}', 'fr')).toBe('{%- tip %}')
      expect(fix('{%- conseil -%}', 'fr')).toBe('{%- tip -%}')
    })

    test('removes orphaned endif when no matching ifversion/elsif opener exists', () => {
      // Caused by translations where only the closing tag survived (e.g. user-api.md reusable)
      expect(fix('Some content\n{% endif %}\nMore content', 'fr')).toBe(
        'Some content\n\nMore content',
      )
      expect(fix('Line one\n{%- endif %}\nLine two', 'fr')).toBe('Line one\n\nLine two')
      expect(fix('Text {%- endif -%} more', 'fr')).toBe('Text  more')
    })

    test('preserves endif when matching ifversion opener is present', () => {
      const input = '{% ifversion ghec %}content{% endif %}'
      expect(fix(input, 'fr')).toBe(input)
    })

    test('preserves endif when elsif opener is present', () => {
      const input = '{% ifversion fpt %}a{% elsif ghec %}b{% endif %}'
      expect(fix(input, 'fr')).toBe(input)
    })
  })

  // ─── KOREAN (ko) ──────────────────────────────────────────────────

  describe('Korean (ko)', () => {
    test('fixes AUTOTITLE with Korean suffix', () => {
      expect(fix('[AUTOTITLE"을 참조하세요]', 'ko')).toBe('[AUTOTITLE]')
    })

    test('fixes translated data tags', () => {
      expect(fix('{% 데이터 variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% 데이터 reusables.foo %}', 'ko')).toBe('{% data reusables.foo %}')
      expect(fix('{% 데이터 변수.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% 데이터 변숫값.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% dada variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes extra percent before data', () => {
      expect(fix('{% % data variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated keywords', () => {
      expect(fix('{% 기타 %}', 'ko')).toBe('{% else %}')
      expect(fix('{% 참고 %}', 'ko')).toBe('{% note %}')
      expect(fix('{% 원시 %}', 'ko')).toBe('{% raw %}')
    })

    test('fixes 또는 → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt 또는 ghec %}', 'ko')).toBe('{% ifversion fpt or ghec %}')
    })

    test('fixes Korean glossary template', () => {
      expect(fix('{{ 용어집.term }}', 'ko')).toBe('{{ glossary.term }}')
    })
  })

  // ─── GERMAN (de) ──────────────────────────────────────────────────

  describe('German (de)', () => {
    test('fixes translated data tags', () => {
      expect(fix('{% Daten variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% daten variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% Data variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% Daten reusables.foo %}', 'de')).toBe('{% data reusables.foo %}')
    })

    test('fixes hyphenated data tags without space', () => {
      expect(fix('{%-Daten variables.product.github %}', 'de')).toBe(
        '{%- data variables.product.github %}',
      )
      expect(fix('{%-Daten-variables.product.github %}', 'de')).toBe(
        '{%- data variables.product.github %}',
      )
    })

    test('fixes oder → or in ifversion tags', () => {
      expect(fix('{%- ifversion fpt oder ghec %}', 'de')).toBe('{%- ifversion fpt or ghec %}')
      expect(fix('{% ifversion fpt oder ghec %}', 'de')).toBe('{% ifversion fpt or ghec %}')
    })

    test('fixes translated block tags', () => {
      expect(fix('{% Hinweis %}', 'de')).toBe('{% note %}')
      expect(fix('{%- Hinweis %}', 'de')).toBe('{%- note %}')
      expect(fix('{%- Hinweis -%}', 'de')).toBe('{%- note -%}')
      expect(fix('{% Warnung %}', 'de')).toBe('{% warning %}')
      expect(fix('{%- Warnung %}', 'de')).toBe('{%- warning %}')
      expect(fix('{%- Warnung -%}', 'de')).toBe('{%- warning -%}')
      expect(fix('{% Tipp %}', 'de')).toBe('{% tip %}')
      expect(fix('{%- Tipp %}', 'de')).toBe('{%- tip %}')
      expect(fix('{%- Tipp -%}', 'de')).toBe('{%- tip -%}')
    })

    test('fixes für → for in for-loops', () => {
      expect(fix('{%- für version in tables.copilot.ides -%}', 'de')).toBe(
        '{%- for version in tables.copilot.ides -%}',
      )
      expect(fix('{% für entry in list %}', 'de')).toBe('{% for entry in list %}')
    })

    test('fixes wiederverwendbare reusables path', () => {
      // `wiederverwendbare` is German for "reusables"
      expect(fix('{% data wiederverwendbare.audit_log.reference %}', 'de')).toBe(
        '{% data reusables.audit_log.reference %}',
      )
      expect(fix('{% Daten wiederverwendbare.audit_log.reference %}', 'de')).toBe(
        '{% data reusables.audit_log.reference %}',
      )
      // Full real-world example: `{% Data wiederverwendbare.audit_log.referenz-nach-kategorie-gruppiert %}`
      // The `{% Data ` → `{% data ` fix runs before this, so by the time we check:
      expect(
        fix('{% Data wiederverwendbare.audit_log.referenz-nach-kategorie-gruppiert %}', 'de'),
      ).toBe('{% data reusables.audit_log.referenz-nach-kategorie-gruppiert %}')
    })
  })

  // ─── GENERIC FIXES ────────────────────────────────────────────────

  describe('Generic fixes (all languages)', () => {
    test('strips LLM sentinel markers and preserves word boundaries', () => {
      expect(fix('Hello<|endoftext|>World', 'es')).toBe('Hello World')
      expect(fix('Hello <|endoftext|> World', 'es')).toBe('Hello World')
      expect(fix('end of sentence.<|endoftext|>Start', 'es')).toBe('end of sentence. Start')
    })

    test('fixes capitalized Data Liquid keyword', () => {
      expect(fix('{% Data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% Data reusables.foo %}', 'es')).toBe('{% data reusables.foo %}')
      expect(fix('{% Data ifversion ghec %}', 'es')).toBe('{% data ifversion ghec %}')
    })

    test('fixes AUTOTITLE corruption patterns', () => {
      expect(fix('["AUTOTITLE](/path)', 'es')).toBe('"[AUTOTITLE](/path)')
      expect(fix('[ AUTOTITLE](/path)', 'es')).toBe('[AUTOTITLE](/path)')
      expect(fix('[ "AUTOTITLE](/path)', 'es')).toBe('[AUTOTITLE](/path)')
    })

    test('fixes double-brace Liquid tag corruptions', () => {
      expect(fix('{{% octicon "gear" %}', 'es')).toBe('{% octicon "gear" %}')
      expect(fix('{{% endif %}}', 'es')).toBe('{% endif %}')
      expect(fix('{{% endif %}', 'es')).toBe('{% endif %}')
      expect(fix('{{%endif %}', 'es')).toBe('{% endif %}')
      expect(fix('{{% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{{% data reusables.foo %}', 'es')).toBe('{% data reusables.foo %}')
      expect(fix('{{% ifversion ghec %}', 'es')).toBe('{% ifversion ghec %}')
      expect(fix('{{% else %}}', 'es')).toBe('{% else %}')
      expect(fix('{{% elsif ghes %}', 'es')).toBe('{% elsif ghes %}')
      expect(fix('{{% vscode %}}', 'es')).toBe('{% vscode %}')
      expect(fix('{{% endvscode %}}', 'es')).toBe('{% endvscode %}')
      expect(fix('{{% endvisualstudio %}}', 'es')).toBe('{% endvisualstudio %}')
    })

    test('fixes duplicated tag openers', () => {
      expect(fix('{% {% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%{% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes multiple-percent corruptions', () => {
      expect(fix('{%% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%%% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% data variables.product.github %%}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes stray percent before tag open', () => {
      expect(fix('%{% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('%{% ifversion ghec %}', 'es')).toBe('{% ifversion ghec %}')
    })

    test('fixes corrupted endif delimiter', () => {
      expect(fix('{ endif %}%', 'es')).toBe('{% endif %}')
    })

    test('fixes empty tag as else', () => {
      expect(fix('{%}test', 'es')).toBe('{% else %}test')
    })

    test('fixes empty tag with space as endif', () => {
      expect(fix('{% }', 'es')).toBe('{% endif %}')
      expect(fix('{%  }', 'es')).toBe('{% endif %}')
    })

    test('fixes missing percent after brace', () => {
      expect(fix('{else %}', 'es')).toBe('{% else %}')
      expect(fix('{endif %}', 'es')).toBe('{% endif %}')
    })

    test('fixes missing space after {%', () => {
      expect(fix('{%else %}', 'es')).toBe('{% else %}')
    })

    test('fixes bold markup injected in tag', () => {
      expect(fix('%**}', 'es')).toBe('%}**')
      expect(fix('{%**text**{% endif %}', 'es')).toBe('{% else %}**text**{% endif %}')
    })

    test('fixes double-brace with missing data', () => {
      expect(fix('{{% variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes extra closing brace', () => {
      expect(fix('{% data variables.product.github %}}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes common Latin-script typos', () => {
      expect(fix('{% variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{% datavariables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes empty tag corruptions with Portuguese remnants', () => {
      expect(fix('{% %} de dados reusables.foo %}', 'pt')).toBe('{% data reusables.foo %}')
      expect(fix('{% %} de dados variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes {% %} as endraw when following raw', () => {
      expect(fix('{% raw %}some content{% %}', 'es')).toBe('{% raw %}some content{% endraw %}')
    })

    test('fixes {% %} as else between ifversion and endif', () => {
      expect(fix('{% ifversion ghec %}A{% %}B{% endif %}', 'es')).toBe(
        '{% ifversion ghec %}A{% else %}B{% endif %}',
      )
    })

    test('fixes remaining {% %} as endif', () => {
      expect(fix('{% %}', 'es')).toBe('{% endif %}')
    })

    test('fixes spaces inside Liquid tag delimiters', () => {
      expect(fix('{ % endif % }', 'es')).toBe('{% endif %}')
      expect(fix('{ % data variables.product.github % }', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('strips stray {% before non-ASCII text', () => {
      expect(fix('{% Привет мир', 'ru')).toBe('Привет мир')
      expect(fix('{% 你好世界', 'zh')).toBe('你好世界')
      expect(fix('{% こんにちは', 'ja')).toBe('こんにちは')
    })

    test('strips stray {% . pattern', () => {
      expect(fix('{% . product.github %}', 'es')).toBe('product.github %}')
    })

    test('fixes unclosed data tags with translated text', () => {
      expect(fix('{% data variables.product.github %las herramientas}', 'es')).toBe(
        '{% data variables.product.github %}las herramientas}',
      )
    })

    test('fixes unclosed data tags with non-ASCII following', () => {
      expect(fix('{% data variables.product.github Привет', 'ru')).toBe(
        '{% data variables.product.github %} Привет',
      )
    })

    test('recovers linebreaks from English', () => {
      const en = '{% endif %}\nSome text'
      const translated = '{% endif %} Some text'
      expect(fix(translated, 'es', en)).toBe('{% endif %}\nSome text')
    })

    test('does not change linebreaks when English has same pattern', () => {
      const en = '{% endif %} Some text'
      const translated = '{% endif %} Some text'
      expect(fix(translated, 'es', en)).toBe('{% endif %} Some text')
    })

    test('recovers linebreaks for endif-pipe table patterns', () => {
      const en = '{% endif %}\n| Column |'
      const translated = '{% endif %} | Column |'
      expect(fix(translated, 'es', en)).toBe('{% endif %}\n| Column |')
    })

    test('fixes collapsed Markdown table rows', () => {
      expect(fix('Cell1 | | Cell2', 'es')).toBe('Cell1 |\n| Cell2')
    })

    test('fixes final catch-all double-brace patterns', () => {
      expect(fix('{{% data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{{% ifversion ghec %}', 'es')).toBe('{% ifversion ghec %}')
      expect(fix('{{%endif %}', 'es')).toBe('{% endif %}')
      expect(fix('{{%else %}', 'es')).toBe('{% else %}')
      expect(fix('{{%raw %}', 'es')).toBe('{% raw %}')
      expect(fix('{{% raw %}', 'es')).toBe('{% raw %}')
    })
  })

  // ─── EDGE CASES ────────────────────────────────────────────────────

  describe('Edge cases', () => {
    test('handles empty string', () => {
      expect(fix('', 'es')).toBe('')
      expect(fix('', 'ja')).toBe('')
      expect(fix('', 'ru')).toBe('')
    })

    test('handles content with no Liquid tags', () => {
      const plain = 'This is plain text with no Liquid tags at all.'
      expect(fix(plain, 'es')).toBe(plain)
      expect(fix(plain, 'ja')).toBe(plain)
    })

    test('handles content with only valid Liquid tags', () => {
      const valid =
        '{% data variables.product.github %} is great. {% ifversion ghec %}Yes{% endif %}'
      expect(fix(valid, 'es')).toBe(valid)
    })

    test('handles multiple corruptions in same line', () => {
      const input = '{{% данных variables.product.github %}} и {{% данных reusables.foo %}}'
      const result = fix(input, 'ru')
      expect(result).toContain('{% data variables.product.github %}')
      expect(result).toContain('{% data reusables.foo %}')
    })

    test('handles unknown language code gracefully', () => {
      const input = '{% data variables.product.github %}'
      expect(fix(input, 'xx')).toBe(input)
    })

    test('handles missing context gracefully', () => {
      const result = correctTranslatedContentStrings('{% data variables.product.github %}', '', {})
      expect(result).toBe('{% data variables.product.github %}')
    })

    test('preserves valid HTML within content', () => {
      const input = '<div class="ghd-tool"><p>{% data variables.product.github %}</p></div>'
      expect(fix(input, 'es')).toBe(input)
    })

    test('handles very long single lines', () => {
      const longLine = '{% data variables.product.github %} '.repeat(500)
      const result = fix(longLine, 'es')
      expect(result).not.toBe('')
      expect(result).toContain('{% data variables.product.github %}')
    })

    test('combined corruptions chain correctly', () => {
      const input = '{{% данных variables.product.github %}}'
      const result = fix(input, 'ru')
      expect(result).toBe('{% data variables.product.github %}')
    })

    test('Russian rearranged elsif', () => {
      const input = '{% ifversion ghec %}content{% Эльсиф %}other{% endif %}'
      const result = fix(input, 'ru')
      expect(result).toContain('{% else %}')
    })
  })

  // ─── PERFORMANCE REGRESSION ────────────────────────────────────────

  describe('Performance regression', () => {
    test('linebreak recovery does not degrade quadratically on large content', () => {
      const tagCount = 500
      const content = Array(tagCount).fill('{% endif %} ').join('some text ')
      const english = content.replace(/\} /g, '}\n')

      const start = performance.now()
      fix(content, 'es', english)
      const elapsed = performance.now() - start

      // Generous threshold to avoid CI flakiness; the real concern is
      // O(n²) regression which would push this into multi-second territory.
      expect(elapsed).toBeLessThan(500)
    })

    test('handles large real-world page content efficiently', () => {
      const block = `
{% ifversion ghec %}
{% data variables.product.prodname_copilot %} está disponible.
{% else %}
Solo para enterprise.
{% endif %}

Para más información, consulta "[AUTOTITLE](/path)".

| Columna | Descripción |
|---|---|
| {% data variables.product.prodname_copilot_short %} | Herramienta de IA |
`
      const largeContent = block.repeat(100)
      const largeEnglish = largeContent
        .replace(/está disponible/g, 'is available')
        .replace(/Solo para enterprise/g, 'Enterprise only')

      const start = performance.now()
      for (let i = 0; i < 10; i++) {
        fix(largeContent, 'es', largeEnglish)
      }
      const elapsed = performance.now() - start

      // 10 iterations of ~50KB content; generous threshold to avoid CI flakiness.
      // O(n²) regression would push this into multi-second territory.
      expect(elapsed).toBeLessThan(2000)
    })

    test('split-based raw→endraw does not backtrack on large content', () => {
      // Before the fix, `[^]*?` regex caused ~20s backtracking on this.
      // Split-based approach is O(n) — should be <50ms.
      const prefix = `{% raw %}${'a'.repeat(50000)}`
      const suffix = `{% конец %}{% raw %}${'b'.repeat(25000)}`
      const content = prefix + suffix

      const start = performance.now()
      const result = fix(content, 'ru')
      const elapsed = performance.now() - start

      expect(result).toContain('{% endraw %}')
      // Before the fix this took ~20s. Generous threshold for CI; the real
      // concern is catastrophic backtracking, not marginal speed.
      expect(elapsed).toBeLessThan(2000)
    })

    test('large content without raw tags is not penalized', () => {
      // 75KB of content with no {% raw %} should be fast
      const content = '{% ifversion ghec %}hello{% endif %}\n'.repeat(2000)

      const start = performance.now()
      fix(content, 'ru')
      const elapsed = performance.now() - start

      // Generous threshold; regression would be multi-second.
      expect(elapsed).toBeLessThan(2000)
    })
  })
})
