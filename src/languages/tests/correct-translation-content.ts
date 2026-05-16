import { describe, expect, test } from 'vitest'
import { performance } from 'perf_hooks'

import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

function fix(content: string, code: string, englishContent = '') {
  return correctTranslatedContentStrings(content, englishContent, {
    code,
    relativePath: 'test.md',
    skipOrphanStripping: true,
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

    test('fixes extra Spanish word inserted around "de datos" and "de variables"', () => {
      // `{% WORD de datos variables.` — leading translator word
      expect(fix('{% uso de datos variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      // Unicode-aware: accented words must also match
      expect(fix('{% análisis de datos variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- uso de datos reusables.foo.bar %}', 'es')).toBe(
        '{%- data reusables.foo.bar %}',
      )

      // `{% de datos WORD variables.` — adjective inserted after "de datos"
      expect(fix('{% de datos específico variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )

      // `{% WORD de variables.` — missing "datos" keyword
      expect(fix('{% alerta de variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated comment keyword', () => {
      expect(fix('{% comentario %}', 'es')).toBe('{% comment %}')
      expect(fix('{%- comentario %}', 'es')).toBe('{%- comment %}')
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

    test('fixes otra → else', () => {
      expect(fix('{% otra %}', 'es')).toBe('{% else %}')
      expect(fix('{%- otra %}', 'es')).toBe('{%- else %}')
    })

    test('fixes encabezados de fila → rowheaders', () => {
      expect(fix('{% encabezados de fila %}', 'es')).toBe('{% rowheaders %}')
      expect(fix('{%- encabezados de fila %}', 'es')).toBe('{%- rowheaders %}')
    })

    test('fixes icono → octicon', () => {
      expect(fix('{% icono "copilot" aria-hidden="true" aria-label="Copilot" %}', 'es')).toBe(
        '{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}',
      )
      expect(fix('{%- icono "check" %}', 'es')).toBe('{%- octicon "check" %}')
    })

    test('fixes octicon "bombilla" → octicon "light-bulb"', () => {
      expect(fix('{% octicon "bombilla" aria-label="The light-bulb icon" %}', 'es')).toBe(
        '{% octicon "light-bulb" aria-label="The light-bulb icon" %}',
      )
      expect(fix('{%- octicon "bombilla" aria-label="The light-bulb icon" %}', 'es')).toBe(
        '{%- octicon "light-bulb" aria-label="The light-bulb icon" %}',
      )
    })

    test('fixes capturar → capture', () => {
      expect(fix('{% capturar service_name %}runner{% endcapture %}', 'es')).toBe(
        '{% capture service_name %}runner{% endcapture %}',
      )
    })

    test('fixes para el modelo en → for model in', () => {
      expect(fix('{% para el modelo en tables.copilot.model-comparison %}', 'es')).toBe(
        '{% for model in tables.copilot.model-comparison %}',
      )
    })

    test('fixes multiple or-translations in single ifversion', () => {
      expect(fix('{% ifversion fpt o ghec o ghes %}', 'es')).toBe(
        '{% ifversion fpt or ghec or ghes %}',
      )
    })

    test('fixes datos reutilizables → data reusables', () => {
      expect(fix('{% datos reutilizables.profile.access_org %}', 'es')).toBe(
        '{% data reusables.profile.access_org %}',
      )
    })

    test('fixes siVersion → ifversion', () => {
      expect(fix('{% siVersion productos-ghas %}', 'es')).toBe('{% ifversion productos-ghas %}')
      expect(fix('{%- siVersion productos-ghas %}', 'es')).toBe('{%- ifversion productos-ghas %}')
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
      expect(fix('{%- メモ %}', 'ja')).toBe('{%- note %}')
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

    test('fixes truncated それ以外の → else', () => {
      expect(fix('{% それ以外の %}', 'ja')).toBe('{% else %}')
      expect(fix('{%- それ以外の %}', 'ja')).toBe('{%- else %}')
    })

    test('fixes further-truncated それ以外 → else', () => {
      expect(fix('{% それ以外 %}', 'ja')).toBe('{% else %}')
      expect(fix('{%- それ以外 %}', 'ja')).toBe('{%- else %}')
    })

    test('fixes それ以外の場合 ifversion X → elsif X', () => {
      expect(fix('{% それ以外の場合 ifversion codeql-rust-public-preview %}', 'ja')).toBe(
        '{% elsif codeql-rust-public-preview %}',
      )
      // no space before closing tag
      expect(fix('{% それ以外の場合 ifversion codeql-rust-public-preview%}', 'ja')).toBe(
        '{% elsif codeql-rust-public-preview %}',
      )
    })

    test('fixes 行ヘッダー → rowheaders', () => {
      expect(fix('{% 行ヘッダー %}', 'ja')).toBe('{% rowheaders %}')
      expect(fix('{%- 行ヘッダー %}', 'ja')).toBe('{%- rowheaders %}')
    })

    test('fixes ウィンドウズ → windows', () => {
      expect(fix('{% ウィンドウズ %}', 'ja')).toBe('{% windows %}')
      expect(fix('{%- ウィンドウズ %}', 'ja')).toBe('{%- windows %}')
    })

    test('fixes ウィンドウ (without ズ) → windows', () => {
      expect(fix('{% ウィンドウ %}', 'ja')).toBe('{% windows %}')
      expect(fix('{%- ウィンドウ %}', 'ja')).toBe('{%- windows %}')
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

    test('fixes en-dash in trim modifier', () => {
      // `{%–` — en-dash (U+2013) used instead of hyphen in `{%-` trim modifier
      expect(fix('{%– ifversion projects-v1 %}', 'pt')).toBe('{%- ifversion projects-v1 %}')
      expect(fix('{%– endif %}', 'pt')).toBe('{%- endif %}')
    })

    test('fixes datavariables / dadosvariables (no space)', () => {
      // `{% datavariables` — no space between "data" and "variables" (post-translation)
      expect(fix('{% datavariables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- datavariables.product.github %}', 'pt')).toBe(
        '{%- data variables.product.github %}',
      )
      // `{% dadosvariables` — Portuguese "dados" fused with "variables"
      expect(fix('{% dadosvariables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated else variants', () => {
      expect(fix('{% senão %}', 'pt')).toBe('{% else %}')
      expect(fix('{%- senão %}', 'pt')).toBe('{%- else %}')
      expect(fix('{% mais %}', 'pt')).toBe('{% else %}')
      expect(fix('{%- mais %}', 'pt')).toBe('{%- else %}')
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

    test('fixes ou → or in if tags', () => {
      expect(fix('{% if condition ou other %}', 'pt')).toBe('{% if condition or other %}')
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

    test('fixes variáveis de dados → data variables', () => {
      expect(fix('{% variáveis de dados.release-phases.public_preview %}', 'pt')).toBe(
        '{% data variables.release-phases.public_preview %}',
      )
      expect(fix('{% variáveis de dados product.github %}', 'pt')).toBe(
        '{% data variables product.github %}',
      )
    })

    test('fixes dados variáveis → data variables', () => {
      expect(fix('{% dados variáveis.produto.prodname_pro %}', 'pt')).toBe(
        '{% data variables.produto.prodname_pro %}',
      )
    })

    test('fixes janelas → windows', () => {
      expect(fix('{% janelas %}', 'pt')).toBe('{% windows %}')
      expect(fix('{%- janelas %}', 'pt')).toBe('{%- windows %}')
    })

    test('fixes observação → note', () => {
      expect(fix('{% observação %}', 'pt')).toBe('{% note %}')
      expect(fix('{%- observação %}', 'pt')).toBe('{%- note %}')
    })

    test('fixes comentário → comment', () => {
      expect(fix('{% comentário %}', 'pt')).toBe('{% comment %}')
      expect(fix('{%- comentário %}', 'pt')).toBe('{%- comment %}')
    })

    test('fixes nota de fim → endnote', () => {
      expect(fix('{% nota de fim %}', 'pt')).toBe('{% endnote %}')
      expect(fix('{%- nota de fim %}', 'pt')).toBe('{%- endnote %}')
    })

    test('fixes Dados variables → data variables', () => {
      expect(fix('{% Dados variables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes fully translated audit_log reusable path', () => {
      expect(
        fix(
          '{% dados agrupados por categoria.complemento.audit_log.reference-grouped-by-category %}',
          'pt',
        ),
      ).toBe('{% data reusables.audit_log.reference-grouped-by-category %}')
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
      // No space between `{%` and 数据
      expect(fix('{%数据variables.product.github%}', 'zh')).toBe(
        '{% data variables.product.github%}',
      )
      expect(fix('{%数据 variables.product.github%}', 'zh')).toBe(
        '{% data variables.product.github%}',
      )
    })

    test('fixes translated else and raw', () => {
      expect(fix('{% 其他 %}', 'zh')).toBe('{% else %}')
      expect(fix('{%- 其他 %}', 'zh')).toBe('{%- else %}')
      expect(fix('{% 原始 %}', 'zh')).toBe('{% raw %}')
      expect(fix('{%- 原始 %}', 'zh')).toBe('{%- raw %}')
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

    test('fixes 否则 → else', () => {
      expect(fix('{% 否则 %}', 'zh')).toBe('{% else %}')
      expect(fix('{%- 否则 %}', 'zh')).toBe('{%- else %}')
    })

    test('fixes 行标题 → rowheaders', () => {
      expect(fix('{% 行标题 %}', 'zh')).toBe('{% rowheaders %}')
      expect(fix('{%- 行标题 %}', 'zh')).toBe('{%- rowheaders %}')
    })

    test('fixes 数据变量 → data variables', () => {
      expect(fix('{% 数据变量.product.github %}', 'zh')).toBe('{% data variables.product.github %}')
    })

    test('fixes 数据变量 with no leading space (`{%数据变量.`)', () => {
      expect(fix('{%数据变量.enterprise.management_console%}', 'zh')).toBe(
        '{% data variables.enterprise.management_console%}',
      )
      expect(fix('{%-数据变量.product.github %}', 'zh')).toBe(
        '{%- data variables.product.github %}',
      )
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

    test('fixes Liquid-embedded lowercase autotitle anchor (`[{% autoTITLE](`)', () => {
      expect(fix('[{% autoTITLE](/path/to/article)', 'ru')).toBe('[AUTOTITLE](/path/to/article)')
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
      expect(fix('{%- необработанного %}', 'ru')).toBe('{%- raw %}')
      expect(fix('{% необработанные %}', 'ru')).toBe('{% raw %}')
      expect(fix('{%- необработанные %}', 'ru')).toBe('{%- raw %}')
      expect(fix('{% необработанный %}', 'ru')).toBe('{% raw %}')
      expect(fix('{%- необработанный %}', 'ru')).toBe('{%- raw %}')
      expect(fix('{% сырой %}', 'ru')).toBe('{% raw %}')
      expect(fix('{%- сырой %}', 'ru')).toBe('{%- raw %}')
      expect(fix('{% нарисовать %}', 'ru')).toBe('{% endraw %}')
      expect(fix('{%- нарисовать %}', 'ru')).toBe('{%- endraw %}')
      expect(fix('{% запроса %}', 'ru')).toBe('{% endraw %}')
      expect(fix('{%- запроса %}', 'ru')).toBe('{%- endraw %}')
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
      expect(fix('{%- еще %}', 'ru')).toBe('{%- else %}')
      expect(fix('{% ещё %}', 'ru')).toBe('{% else %}')
      expect(fix('{%- ещё %}', 'ru')).toBe('{%- else %}')
    })

    test('fixes конец as context-aware end tag', () => {
      expect(fix('{% raw %}some content{% конец %}', 'ru')).toBe(
        '{% raw %}some content{% endraw %}',
      )
      expect(fix('{% конец %}', 'ru')).toBe('{% endif %}')
      expect(fix('{%- конец %}', 'ru')).toBe('{%- endif %}')
    })

    test('fixes конец для → endfor', () => {
      expect(fix('{%- конец для %}', 'ru')).toBe('{%- endfor %}')
    })

    test('fixes заголовки строк → rowheaders', () => {
      expect(fix('{% заголовки строк %}', 'ru')).toBe('{% rowheaders %}')
      expect(fix('{%- заголовки строк %}', 'ru')).toBe('{%- rowheaders %}')
    })

    test('fixes windowsTerminal → windowsterminal', () => {
      expect(fix('{% windowsTerminal %}', 'ru')).toBe('{% windowsterminal %}')
      expect(fix('{%- windowsTerminal %}', 'ru')).toBe('{%- windowsterminal %}')
    })

    test('fixes командная палитра ifversion → ifversion command-palette', () => {
      expect(fix('{%- командная палитра ifversion %}', 'ru')).toBe(
        '{%- ifversion command-palette %}',
      )
      expect(fix('{% командная палитра ifversion %}', 'ru')).toBe('{% ifversion command-palette %}')
      expect(fix('{%- командная палитра ifversion -%}', 'ru')).toBe(
        '{%- ifversion command-palette -%}',
      )
    })

    test('fixes translated feature flag names', () => {
      expect(fix('обязательный-2fa-dotcom-участник', 'ru')).toBe(
        'mandatory-2fa-dotcom-contributors',
      )
      expect(fix('обязательный-2fa-участник-2023', 'ru')).toBe('mandatory-2fa-contributors-2023')
    })

    test('fixes other translated keywords', () => {
      expect(fix('{% конечным %}', 'ru')).toBe('{% endif %}')
      expect(fix('{%- конечным %}', 'ru')).toBe('{%- endif %}')
      expect(fix('{% примечание %}', 'ru')).toBe('{% note %}')
      expect(fix('{%- примечание %}', 'ru')).toBe('{%- note %}')
      expect(fix('{% конечных головщиков %}', 'ru')).toBe('{% endrowheaders %}')
      expect(fix('{% эндкёрл %}', 'ru')).toBe('{% endcurl %}')
      expect(fix('{%- эндкёрл %}', 'ru')).toBe('{%- endcurl %}')
      expect(fix('{% Эльсиф %}', 'ru')).toBe('{% else %}')
      expect(fix('{%- Эльсиф %}', 'ru')).toBe('{%- else %}')
    })

    test('fixes translated reusable paths', () => {
      expect(fix('{% повторно используемых данных.foo %}', 'ru')).toBe('{% data reusables.foo %}')
      expect(fix('{% данных для повторного использования.foo %}', 'ru')).toBe(
        '{% data reusables.foo %}',
      )
    })

    test('fixes double quotes in Russian YAML (via generic)', () => {
      expect(fix('href=""https://example.com"', 'ru')).toBe('href="https://example.com"')
    })

    test('fixes empty HTML tags (via generic)', () => {
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

    test('fixes иначе → else', () => {
      expect(fix('{% иначе %}', 'ru')).toBe('{% else %}')
      expect(fix('{%- иначе %}', 'ru')).toBe('{%- else %}')
    })

    test('fixes capitalized Mac → mac platform tag (via generic)', () => {
      expect(fix('{% Mac %}', 'ru')).toBe('{% mac %}')
      expect(fix('{%- Mac %}', 'ru')).toBe('{%- mac %}')
    })

    test('fixes Endwindows → endwindows (via generic)', () => {
      expect(fix('{% Endwindows %}', 'ru')).toBe('{% endwindows %}')
      expect(fix('{%- Endwindows %}', 'ru')).toBe('{%- endwindows %}')
    })

    test('fixes capitalized Elsif → elsif (via generic)', () => {
      expect(fix('{% Elsif ghec %}', 'ru')).toBe('{% elsif ghec %}')
    })

    test('fixes capitalized Linux → linux platform tag', () => {
      expect(fix('{% Linux %}', 'ru')).toBe('{% linux %}')
      expect(fix('{%- Linux %}', 'ru')).toBe('{%- linux %}')
    })

    test('fixes джетмозги → jetbrains', () => {
      expect(fix('{% джетмозги %}', 'ru')).toBe('{% jetbrains %}')
      expect(fix('{%- джетмозги %}', 'ru')).toBe('{%- jetbrains %}')
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
      // `{% de données variables.` — preposition "de" prepended
      expect(fix('{% de données variables.product.github %}', 'fr')).toBe(
        '{% data variables.product.github %}',
      )
      // `{% de data variables.` — partially-corrected form
      expect(fix('{% de data variables.product.github %}', 'fr')).toBe(
        '{% data variables.product.github %}',
      )
      // `{% données.variables.X %}` — dot instead of space after "données"
      expect(fix('{% données.variables.copilot.copilot_chat_short %}', 'fr')).toBe(
        '{% data variables.copilot.copilot_chat_short %}',
      )
      expect(fix('{% données.reusables.foo.bar %}', 'fr')).toBe('{% data reusables.foo.bar %}')
    })

    test('fixes translated else', () => {
      expect(fix('{% autre %}', 'fr')).toBe('{% else %}')
      expect(fix('{%- autre %}', 'fr')).toBe('{%- else %}')
    })

    test('fixes translated raw/endraw', () => {
      expect(fix('{% brut %}', 'fr')).toBe('{% raw %}')
      expect(fix('{%- brut %}', 'fr')).toBe('{%- raw %}')
      expect(fix('{% %brut }', 'fr')).toBe('{% raw %}')
      expect(fix('{% redessiner %}', 'fr')).toBe('{% endraw %}')
      expect(fix('{%- redessiner %}', 'fr')).toBe('{%- endraw %}')
    })

    test('fixes ou → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt ou ghec %}', 'fr')).toBe('{% ifversion fpt or ghec %}')
      expect(fix('{%- elsif fpt ou ghec %}', 'fr')).toBe('{%- elsif fpt or ghec %}')
    })

    test('fixes ou → or in if tags', () => {
      expect(
        fix('{% if query.apiVersion == nil ou "2026-03-10" <= query.apiVersion %}', 'fr'),
      ).toBe('{% if query.apiVersion == nil or "2026-03-10" <= query.apiVersion %}')
    })

    test('fixes et → and in ifversion tags', () => {
      expect(fix('{% ifversion ghes > 3.14 et ghes < 3.20 %}', 'fr')).toBe(
        '{% ifversion ghes > 3.14 and ghes < 3.20 %}',
      )
      expect(fix('{%- ifversion ghes et fpt %}', 'fr')).toBe('{%- ifversion ghes and fpt %}')
    })

    test('fixes French guillemets « » → " in if/ifversion tags', () => {
      expect(
        fix('{% if query.apiVersion == nil ou « 2026-03-10 » <= query.apiVersion %}', 'fr'),
      ).toBe('{% if query.apiVersion == nil or "2026-03-10" <= query.apiVersion %}')
      expect(fix('{% ifversion « ghec » %}', 'fr')).toBe('{% ifversion "ghec" %}')
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
      const fixWithStrip = (s: string) =>
        correctTranslatedContentStrings(s, '', { code: 'fr', relativePath: 'test.md' })
      expect(fixWithStrip('Some content\n{% endif %}\nMore content')).toBe(
        'Some content\n\nMore content',
      )
      expect(fixWithStrip('Line one\n{%- endif %}\nLine two')).toBe('Line one\n\nLine two')
      expect(fixWithStrip('Text {%- endif -%} more')).toBe('Text  more')
    })

    test('preserves endif when matching ifversion opener is present', () => {
      const input = '{% ifversion ghec %}content{% endif %}'
      expect(fix(input, 'fr')).toBe(input)
    })

    test('preserves endif when elsif opener is present', () => {
      const input = '{% ifversion fpt %}a{% elsif ghec %}b{% endif %}'
      expect(fix(input, 'fr')).toBe(input)
    })

    test('fixes sinon → else', () => {
      expect(fix('{% sinon %}', 'fr')).toBe('{% else %}')
      expect(fix('{%- sinon %}', 'fr')).toBe('{%- else %}')
    })

    test('fixes note de fin → endnote', () => {
      expect(fix('{% note de fin %}', 'fr')).toBe('{% endnote %}')
      expect(fix('{%- note de fin %}', 'fr')).toBe('{%- endnote %}')
    })

    test('fixes éclipse → eclipse platform tag', () => {
      expect(fix('{% éclipse %}', 'fr')).toBe('{% eclipse %}')
      expect(fix('{%- éclipse %}', 'fr')).toBe('{%- eclipse %}')
    })

    test('fixes données_reutilisables → data reusables', () => {
      expect(fix('{% données_reutilisables.user-settings.ssh %}', 'fr')).toBe(
        '{% data reusables.user-settings.ssh %}',
      )
      expect(fix('{% données_réutilisables.codespaces.foo %}', 'fr')).toBe(
        '{% data reusables.codespaces.foo %}',
      )
    })

    test('fixes composants réutilisables → data reusables', () => {
      expect(fix('{% composants réutilisables.répertoires.barre-latérale-sujets %}', 'fr')).toBe(
        '{% data reusables.répertoires.barre-latérale-sujets %}',
      )
    })

    test('fixes fully-translated données réutilisables propriétés-personnalisées path', () => {
      expect(
        fix('{% données réutilisables propriétés-personnalisées valeurs-requises %}', 'fr'),
      ).toBe('{% data reusables.organizations.custom-properties-required-values %}')
    })
  })

  // ─── KOREAN (ko) ──────────────────────────────────────────────────

  describe('Korean (ko)', () => {
    test('fixes AUTOTITLE with Korean suffix', () => {
      expect(fix('[AUTOTITLE"을 참조하세요]', 'ko')).toBe('[AUTOTITLE]')
    })

    test('fixes datda → data typo', () => {
      expect(fix('{% datda variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- datda variables.copilot.foo %}', 'ko')).toBe(
        '{%- data variables.copilot.foo %}',
      )
    })

    test('fixes data를 Korean-particle corruption', () => {
      expect(
        fix('{% data를 탐색하고 수락하기 variables.copilot.next_edit_suggestions %}', 'ko'),
      ).toBe('{% data variables.copilot.next_edit_suggestions %}')
      expect(
        fix('{%- data를 탐색하고 수락하기 variables.copilot.next_edit_suggestions -%}', 'ko'),
      ).toBe('{%- data variables.copilot.next_edit_suggestions -%}')
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
    })

    test('fixes extra percent before data (via generic)', () => {
      expect(fix('{% % data variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes dada → data (via generic)', () => {
      expect(fix('{% dada variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes translated keywords', () => {
      expect(fix('{% 기타 %}', 'ko')).toBe('{% else %}')
      expect(fix('{%- 기타 %}', 'ko')).toBe('{%- else %}')
      expect(fix('{% 참고 %}', 'ko')).toBe('{% note %}')
      expect(fix('{%- 참고 %}', 'ko')).toBe('{%- note %}')
      expect(fix('{% 원시 %}', 'ko')).toBe('{% raw %}')
      expect(fix('{%- 원시 %}', 'ko')).toBe('{%- raw %}')
    })

    test('fixes 또는 → or in ifversion tags', () => {
      expect(fix('{% ifversion fpt 또는 ghec %}', 'ko')).toBe('{% ifversion fpt or ghec %}')
    })

    test('fixes Korean glossary template', () => {
      expect(fix('{{ 용어집.term }}', 'ko')).toBe('{{ glossary.term }}')
    })

    test('fixes 그렇지 않으면 → else', () => {
      expect(fix('{% 그렇지 않으면 %}', 'ko')).toBe('{% else %}')
      expect(fix('{%- 그렇지 않으면 %}', 'ko')).toBe('{%- else %}')
    })

    test('fixes 옥티콘 → octicon', () => {
      expect(fix('{% 옥티콘 "check" aria-label="Supported" %}', 'ko')).toBe(
        '{% octicon "check" aria-label="Supported" %}',
      )
      expect(fix('{%- 옥티콘 "check" aria-label="Supported" %}', 'ko')).toBe(
        '{%- octicon "check" aria-label="Supported" %}',
      )
    })

    test('fixes 데이터 재사용 → data reusables', () => {
      expect(fix('{% 데이터 재사용.profile.access_org %}', 'ko')).toBe(
        '{% data reusables.profile.access_org %}',
      )
    })

    test('fixes datavariable → data variables (via generic)', () => {
      expect(fix('{% datavariable.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes 행 머리글 → rowheaders', () => {
      expect(fix('{% 행 머리글 %}', 'ko')).toBe('{% rowheaders %}')
      expect(fix('{%- 행 머리글 %}', 'ko')).toBe('{%- rowheaders %}')
    })

    test('fixes 윈도우즈 → windows', () => {
      expect(fix('{% 윈도우즈 %}', 'ko')).toBe('{% windows %}')
      expect(fix('{%- 윈도우즈 %}', 'ko')).toBe('{%- windows %}')
    })

    test('fixes 엔드맥 → endmac', () => {
      expect(fix('{% 엔드맥 %}', 'ko')).toBe('{% endmac %}')
      expect(fix('{%- 엔드맥 %}', 'ko')).toBe('{%- endmac %}')
    })

    test('fixes 주석 끝 → endnote', () => {
      expect(fix('{% 주석 끝 %}', 'ko')).toBe('{% endnote %}')
      expect(fix('{%- 주석 끝 %}', 'ko')).toBe('{%- endnote %}')
    })

    test('fixes capitalized Variables → data variables', () => {
      expect(fix('{% data Variables.product.github %}', 'ko')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- data Variables.product.github %}', 'ko')).toBe(
        '{%- data variables.product.github %}',
      )
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
      expect(fix('{% Daten reusables.foo %}', 'de')).toBe('{% data reusables.foo %}')
      expect(fix('{%- Daten reusables.foo %}', 'de')).toBe('{%- data reusables.foo %}')
      // `{% Datenseite variables.` — "Datenseite" (data page) compound = data
      expect(fix('{% Datenseite variables.product.prodname_github_app %}', 'de')).toBe(
        '{% data variables.product.prodname_github_app %}',
      )
      expect(fix('{%- Datenseite variables.product.foo %}', 'de')).toBe(
        '{%- data variables.product.foo %}',
      )
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

    test('fixes capitalized Codespaces platform tag', () => {
      expect(fix('{% Codespaces %}', 'de')).toBe('{% codespaces %}')
      expect(fix('{%- Codespaces %}', 'de')).toBe('{%- codespaces %}')
    })

    test('fixes translated prompt/endprompt keywords', () => {
      expect(fix('{% Aufforderung %}', 'de')).toBe('{% prompt %}')
      expect(fix('{%- Aufforderung %}', 'de')).toBe('{%- prompt %}')
      expect(fix('{% Endprompt %}', 'de')).toBe('{% endprompt %}')
      expect(fix('{%- Endprompt %}', 'de')).toBe('{%- endprompt %}')
    })

    test('fixes `{%-DatenXxx variables` no-space compound German "Daten" tags', () => {
      expect(fix('{%-Datenpaket variables.product.github %}', 'de')).toBe(
        '{%- data variables.product.github %}',
      )
      expect(fix('{%-Dateneinstellungen reusables.foo.bar %}', 'de')).toBe(
        '{%- data reusables.foo.bar %}',
      )
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
      expect(fix('{%- Daten wiederverwendbare.audit_log.reference %}', 'de')).toBe(
        '{%- data reusables.audit_log.reference %}',
      )
      // Full real-world example: `{% Data wiederverwendbare.audit_log.referenz-nach-kategorie-gruppiert %}`
      // The `{% Data ` → `{% data ` fix runs before this, so by the time we check:
      expect(
        fix('{% Data wiederverwendbare.audit_log.referenz-nach-kategorie-gruppiert %}', 'de'),
      ).toBe('{% data reusables.audit_log.referenz-nach-kategorie-gruppiert %}')
    })
    test('fixes wiederverwendbar (without trailing e) reusables path', () => {
      expect(fix('{% Daten wiederverwendbar.user-settings.access_settings %}', 'de')).toBe(
        '{% data reusables.user-settings.access_settings %}',
      )
    })

    test('fixes ansonsten → else', () => {
      expect(fix('{% ansonsten %}', 'de')).toBe('{% else %}')
      expect(fix('{%- ansonsten %}', 'de')).toBe('{%- else %}')
    })

    test('fixes andernfalls and sonst → else', () => {
      expect(fix('{% andernfalls %}', 'de')).toBe('{% else %}')
      expect(fix('{%- andernfalls %}', 'de')).toBe('{%- else %}')
      expect(fix('{% sonst %}', 'de')).toBe('{% else %}')
      expect(fix('{%- sonst %}', 'de')).toBe('{%- else %}')
    })

    test('fixes andernfalls/sonst ifversion → elsif', () => {
      expect(fix('{% andernfalls ifversion ghes %}', 'de')).toBe('{% elsif ghes %}')
      expect(fix('{% sonst ifversion ghes %}', 'de')).toBe('{% elsif ghes %}')
    })

    test('fixes Datenvariablen → data variables', () => {
      expect(fix('{% Datenvariablen.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- Datenvariablen.release-phases.public_preview %}', 'de')).toBe(
        '{%- data variables.release-phases.public_preview %}',
      )
    })

    test('fixes daten wiederverwendbars → data reusables', () => {
      expect(fix('{% daten wiederverwendbars.enterprise-accounts.ai-controls-tab %}', 'de')).toBe(
        '{% data reusables.enterprise-accounts.ai-controls-tab %}',
      )
    })

    test('fixes Zeilenkopfzeilen → rowheaders', () => {
      expect(fix('{% Zeilenkopfzeilen %}', 'de')).toBe('{% rowheaders %}')
      expect(fix('{%- Zeilenkopfzeilen %}', 'de')).toBe('{%- rowheaders %}')
    })

    test('fixes Rohdaten → raw', () => {
      expect(fix('{% Rohdaten %}', 'de')).toBe('{% raw %}')
      expect(fix('{%- Rohdaten %}', 'de')).toBe('{%- raw %}')
      expect(fix('{%- Rohdaten -%}', 'de')).toBe('{%- raw -%}')
    })

    test('fixes okticon → octicon (via generic)', () => {
      expect(fix('{% okticon "pencil" %}', 'de')).toBe('{% octicon "pencil" %}')
    })

    test('fixes Endnotiz → endnote', () => {
      expect(fix('{% Endnotiz %}', 'de')).toBe('{% endnote %}')
      expect(fix('{%- Endnotiz %}', 'de')).toBe('{%- endnote %}')
    })

    test('fixes endifen → endif (via generic)', () => {
      expect(fix('{% endifen %}', 'de')).toBe('{% endif %}')
      expect(fix('{%- endifen %}', 'de')).toBe('{%- endif %}')
    })

    test('fixes Dateninstanz → data', () => {
      expect(fix('{% Dateninstanz variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes ifversion-Sicherheitskonfigurationen', () => {
      expect(fix('{% ifversion-Sicherheitskonfigurationen %}', 'de')).toBe(
        '{% ifversion security-configurations %}',
      )
    })

    test('fixes ifversion-Unterprobleme', () => {
      expect(fix('{% ifversion-Unterprobleme %}', 'de')).toBe('{% ifversion sub-issues %}')
    })

    test('fixes ifversion-Sicherheitskampagnen', () => {
      expect(fix('{% ifversion-Sicherheitskampagnen %}', 'de')).toBe(
        '{% ifversion security-campaigns %}',
      )
    })

    test('fixes capitalized Windows → windows platform tag', () => {
      expect(fix('{% Windows %}', 'de')).toBe('{% windows %}')
      expect(fix('{%- Windows %}', 'de')).toBe('{%- windows %}')
    })

    test('fixes capitalized Linux → linux platform tag', () => {
      expect(fix('{% Linux %}', 'de')).toBe('{% linux %}')
      expect(fix('{%- Linux %}', 'de')).toBe('{%- linux %}')
    })

    test('fixes capitalized Eclipse → eclipse platform tag', () => {
      expect(fix('{% Eclipse %}', 'de')).toBe('{% eclipse %}')
      expect(fix('{%- Eclipse %}', 'de')).toBe('{%- eclipse %}')
    })

    test('fixes unformatierte → raw', () => {
      expect(fix('{% unformatierte %}', 'de')).toBe('{% raw %}')
    })

    test('fixes Daten variables → data variables', () => {
      expect(fix('{% Daten variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes daten wiederverwendbar/wiederverwendbare → data reusables', () => {
      expect(fix('{% daten wiederverwendbar.foo.bar %}', 'de')).toBe('{% data reusables.foo.bar %}')
      expect(fix('{% daten wiederverwendbare.foo.bar %}', 'de')).toBe(
        '{% data reusables.foo.bar %}',
      )
    })

    test('fixes Endifen and Endif → endif (via generic)', () => {
      expect(fix('{% Endifen %}', 'de')).toBe('{% endif %}')
      expect(fix('{% Endif %}', 'de')).toBe('{% endif %}')
    })

    test('fixes ifversion-repo-policy-rules (via generic)', () => {
      expect(fix('{% ifversion-repo-policy-rules %}', 'de')).toBe(
        '{% ifversion repo-policy-rules %}',
      )
    })

    test('fixes ifversion-enterprise-installed-apps (via generic)', () => {
      expect(fix('{% ifversion-enterprise-installed-apps %}', 'de')).toBe(
        '{% ifversion enterprise-installed-apps %}',
      )
    })

    test('fixes data-variables (hyphen instead of space)', () => {
      expect(fix('{% data-variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- data-variables.product.github %}', 'de')).toBe(
        '{%- data variables.product.github %}',
      )
    })

    test('fixes Datenworkflow variables → data variables', () => {
      expect(fix('{%- Datenworkflow variables.product.prodname_actions %}', 'de')).toBe(
        '{%- data variables.product.prodname_actions %}',
      )
      expect(fix('{% Datenworkflow variables.product.prodname_actions %}', 'de')).toBe(
        '{% data variables.product.prodname_actions %}',
      )
    })

    test('fixes ifec → ifversion', () => {
      expect(fix('{% ifec ghec %}', 'de')).toBe('{% ifversion ghec %}')
      expect(fix('{%- ifec ghec %}', 'de')).toBe('{%- ifversion ghec %}')
    })

    test('fixes andere → else', () => {
      expect(fix('{% andere %}', 'de')).toBe('{% else %}')
      expect(fix('{%- andere %}', 'de')).toBe('{%- else %}')
    })

    test('fixes Datenauflistung → data', () => {
      // `{% Datenauflistung variables.X %}` — "data listing" compound = data
      expect(fix('{% Datenauflistung variables.product.github %}', 'de')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%- Datenauflistung variables.product.github %}', 'de')).toBe(
        '{%- data variables.product.github %}',
      )
    })
  })

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
      expect(fix('{%- Data variables.product.github %}', 'es')).toBe(
        '{%- data variables.product.github %}',
      )
    })

    test('fixes leading dot in {% data paths', () => {
      // `{% data .variables.X %}` — translator inserted a stray dot
      expect(fix('{% data .variables.product.prodname_ghe_server %}', 'ja')).toBe(
        '{% data variables.product.prodname_ghe_server %}',
      )
      expect(fix('{%- data .variables.product.github %}', 'pt')).toBe(
        '{%- data variables.product.github %}',
      )
      expect(fix('{% data .reusables.foo.bar %}', 'zh')).toBe('{% data reusables.foo.bar %}')
    })

    test('fixes singular variable / reusable in {% data paths', () => {
      // `{% data variable.product.X %}` (singular) → `{% data variables.product.X %}`
      expect(fix('{% data variable.product.prodname_container_registry %}', 'zh')).toBe(
        '{% data variables.product.prodname_container_registry %}',
      )
      expect(fix('{%- data variable.product.github %}', 'es')).toBe(
        '{%- data variables.product.github %}',
      )
      expect(fix('{% data reusable.foo.bar %}', 'fr')).toBe('{% data reusables.foo.bar %}')
    })

    test('fixes capitalized platform tags across all languages', () => {
      expect(fix('{% Windows %}', 'zh')).toBe('{% windows %}')
      expect(fix('{% Eclipse %}', 'zh')).toBe('{% eclipse %}')
      expect(fix('{% Linux %}', 'zh')).toBe('{% linux %}')
      expect(fix('{% Mac %}', 'zh')).toBe('{% mac %}')
      expect(fix('{%- Mac %}', 'zh')).toBe('{%- mac %}')
    })

    test('fixes capitalized Liquid keywords across all languages', () => {
      expect(fix('{% Endwindows %}', 'es')).toBe('{% endwindows %}')
      expect(fix('{%- Endwindows %}', 'ja')).toBe('{%- endwindows %}')
      expect(fix('{% Elsif ghec %}', 'pt')).toBe('{% elsif ghec %}')
      expect(fix('{% Endif %}', 'es')).toBe('{% endif %}')
      expect(fix('{%- Endif %}', 'ja')).toBe('{%- endif %}')
      expect(fix('{%- Endif -%}', 'pt')).toBe('{%- endif -%}')
    })

    test('fixes garbled endif variants across all languages', () => {
      expect(fix('{% endifen %}', 'es')).toBe('{% endif %}')
      expect(fix('{%- endifen %}', 'ja')).toBe('{%- endif %}')
      expect(fix('{% Endifen %}', 'pt')).toBe('{% endif %}')
      expect(fix('{%- Endifen %}', 'zh')).toBe('{%- endif %}')
      expect(fix('{% endif _%}', 'fr')).toBe('{% endif %}')
    })

    test('fixes okticon → octicon across all languages', () => {
      expect(fix('{% okticon "pencil" %}', 'es')).toBe('{% octicon "pencil" %}')
    })

    test('fixes dada → data across all languages', () => {
      expect(fix('{% dada variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes extra percent before data across all languages', () => {
      expect(fix('{% % data variables.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
    })

    test('fixes double-quote corruption in href across all languages', () => {
      expect(fix('href=""https://example.com"', 'es')).toBe('href="https://example.com"')
    })

    test('fixes empty HTML tags across all languages', () => {
      expect(fix('some <b></b> text', 'es')).toBe('some  text')
      expect(fix('some <u></u> text', 'es')).toBe('some  text')
    })

    test('fixes ifversion-FEATURE hyphen-instead-of-space across all languages', () => {
      expect(fix('{% ifversion-repo-policy-rules %}', 'es')).toBe(
        '{% ifversion repo-policy-rules %}',
      )
      expect(fix('{%- ifversion-enterprise-installed-apps %}', 'ja')).toBe(
        '{%- ifversion enterprise-installed-apps %}',
      )
      expect(fix('{% ifversion-some-new-feature %}', 'pt')).toBe('{% ifversion some-new-feature %}')
    })

    test('fixes datavariable (singular) → data variables', () => {
      expect(fix('{% datavariable.product.github %}', 'es')).toBe(
        '{% data variables.product.github %}',
      )
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

    test('does not inject linebreak after data tag that is mid-heading', () => {
      // English: tag is at end of heading line → English has tag+newline.
      // Japanese: tag is mid-heading, followed by Japanese text.
      // The linebreak recovery must NOT replace the space with a newline here,
      // or the heading gets split into `#### TAG` + `Japanese text` paragraph.
      const en = '#### Using {% data variables.copilot.subagents_short %}\n\nSome paragraph.'
      const translated =
        '#### {% data variables.copilot.subagents_short %} の使用\n\nSome paragraph.'
      expect(fix(translated, 'ja', en)).toBe(translated)
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

    test('rejoins broken bullet markers split across lines (all languages)', () => {
      // Lone `*` with content on indented next line → `* content`
      const broken = '* \n              [AUTOTITLE](/orgs/transfer)'
      const expected = '* [AUTOTITLE](/orgs/transfer)'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // No trailing space variant
      expect(fix('*\n  [AUTOTITLE](/path)', 'ko')).toBe('* [AUTOTITLE](/path)')
      // Multiple consecutive broken bullets
      expect(fix('* \n  one\n* \n  two', 'fr')).toBe('* one\n* two')
      // Valid bullets are not modified
      expect(fix('* normal\n* another', 'de')).toBe('* normal\n* another')
    })

    test('rejoins broken table cells split across lines (all languages)', () => {
      const broken = '|\n              **クラウドとサーバー**             | 説明'
      const expected = '| **クラウドとサーバー**             | 説明'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // Pipe with trailing whitespace
      expect(fix('|   \n  cell text', 'zh')).toBe('| cell text')
      // Valid table rows are not modified
      expect(fix('| a | b |\n| c | d |', 'es')).toBe('| a | b |\n| c | d |')
    })

    test('rejoins dangling heading markers (all languages)', () => {
      const broken = '### \n              {% data variables.product.github %} の使用'
      const expected = '### {% data variables.product.github %} の使用'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // All heading levels
      expect(fix('# \n              Title', 'ja')).toBe('# Title')
      expect(fix('###### \n              Title', 'ja')).toBe('###### Title')
      // 0–3 leading spaces are accepted
      expect(fix('   ### \n              Title', 'ja')).toBe('   ### Title')
      // Valid headings are not modified
      expect(fix('### Already correct', 'ja')).toBe('### Already correct')
      // 4-space indented heading-like text is not collapsed (no marker join);
      // but selfStrip still removes the 14-space indentation from the next line.
      expect(fix('    ###\n              code', 'ja')).toBe('    ###\ncode')
      // Shallow next-line indent (<6) is not collapsed
      expect(fix('### \n  Title', 'ja')).toBe('### \n  Title')
    })

    test('rejoins dangling blockquote markers (all languages)', () => {
      const broken = '> \n              {% data variables.product.github %} は preview 中です。'
      const expected = '> {% data variables.product.github %} は preview 中です。'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // 0–3 leading spaces are accepted
      expect(fix('  > \n              Quote', 'ja')).toBe('  > Quote')
      // Valid blockquotes are not modified
      expect(fix('> Already correct', 'ja')).toBe('> Already correct')
      expect(fix('>\n> Continued blockquote', 'ja')).toBe('>\n> Continued blockquote')
    })

    test('rejoins dangling bold-open after a marker (all languages)', () => {
      const broken =
        '* **\n              {% data variables.product.prodname_copilot_short %}へのアクセス**。 More text'
      const expected =
        '* **{% data variables.product.prodname_copilot_short %}へのアクセス**。 More text'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // Numbered list marker
      expect(fix('1. **\n              Important**: text', 'ja')).toBe('1. **Important**: text')
      // Heading marker
      expect(fix('### **\n              Bold heading**', 'ja')).toBe('### **Bold heading**')
      // Blockquote marker
      expect(fix('> **\n              Quoted bold**', 'ja')).toBe('> **Quoted bold**')
      // Table cell
      expect(fix('| **\n              Cell bold** | x', 'ja')).toBe('| **Cell bold** | x')
      // Bare `**` (no preceding marker) is not marker-joined, but selfStrip
      // still removes the 14-space indentation from the next line so it does
      // not render as an indented code block.
      expect(fix('**\n              text', 'ja')).toBe('**\ntext')
    })

    test('rejoins dangling ordered-list markers (all languages)', () => {
      const broken =
        '1. \n              {% data variables.product.prodname_vscode %}では、サイドバーの拡張機能アイコンをクリックします。'
      const expected =
        '1. {% data variables.product.prodname_vscode %}では、サイドバーの拡張機能アイコンをクリックします。'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // Higher numbered items
      expect(fix('2. \n              Content', 'ja')).toBe('2. Content')
      expect(fix('10. \n              Content', 'ja')).toBe('10. Content')
      // 0–3 leading spaces are accepted
      expect(fix('   1. \n              Indented', 'ja')).toBe('   1. Indented')
      // Valid ordered list items are not modified
      expect(fix('1. Already correct', 'ja')).toBe('1. Already correct')
      // Shallow next-line indent (<6 spaces) is not collapsed
      expect(fix('1. \n  Content', 'ja')).toBe('1. \n  Content')
    })

    test('does not modify content inside fenced code blocks', () => {
      // Markdown example inside ```md fence should be preserved verbatim
      const fenced = '```md\n### \n              Heading example\n```'
      expect(fix(fenced, 'ja')).toBe(fenced)
      // Tilde fences are also respected
      const tilde = '~~~md\n> \n              Quote example\n~~~'
      expect(fix(tilde, 'ja')).toBe(tilde)
      // Bold-open inside code fence
      const boldFenced = '```md\n* **\n              bold example**\n```'
      expect(fix(boldFenced, 'ja')).toBe(boldFenced)
    })

    test('does not modify YAML frontmatter', () => {
      // Multiline YAML scalars and indented values must not be joined
      const fm = `---
title: Example
intro: >
              Multiline
              continued
versions:
  fpt: '*'
---

### 
              Real heading after frontmatter`
      const expected = `---
title: Example
intro: >
              Multiline
              continued
versions:
  fpt: '*'
---

### Real heading after frontmatter`
      expect(fix(fm, 'ja')).toBe(expected)
    })

    test('frontmatter containing fence-like characters does not break body fence tracking', () => {
      // A multiline scalar in frontmatter that includes ``` (or ~~~) must
      // NOT toggle the body's fence-tracking state. After frontmatter
      // closes, dangling markers in the body should still be rejoined.
      const fm = `---
title: Example
intro: |
  \`\`\`
  fence-like text inside frontmatter
  \`\`\`
---

### 
              Real heading after frontmatter`
      const expected = `---
title: Example
intro: |
  \`\`\`
  fence-like text inside frontmatter
  \`\`\`
---

### Real heading after frontmatter`
      expect(fix(fm, 'ja')).toBe(expected)
    })

    test('does not collapse nested-list indented code blocks', () => {
      // A list item followed by blank line + 6-space-indented "code" should
      // be left alone because the marker line itself is empty (not a
      // bare `>`/`#`/`* **` form), and the previous content line is not
      // a heading/blockquote/bold-open marker.
      const nested = '1. Run this command:\n\n      gh auth login'
      expect(fix(nested, 'ja')).toBe(nested)
    })

    test('strips standalone deeply-indented paragraph lines (all languages)', () => {
      // The translation pipeline sometimes indents an entire paragraph line
      // with 14 spaces, causing it to render as a code block at the document
      // level.  Such lines should have their leading whitespace stripped.
      const broken =
        '### MCP サーバーの手動での構成\n\n              {% data variables.product.prodname_vscode %}で MCP サーバーを構成するには、...'
      const expected =
        '### MCP サーバーの手動での構成\n\n{% data variables.product.prodname_vscode %}で MCP サーバーを構成するには、...'
      for (const lang of ['ja', 'de', 'es', 'fr', 'ko', 'pt', 'ru', 'zh']) {
        expect(fix(broken, lang)).toBe(expected)
      }
      // 9 spaces is the minimum threshold
      expect(fix('         content', 'ja')).toBe('content')
      // 8 spaces is below threshold and should be preserved
      expect(fix('        content', 'ja')).toBe('        content')
      // Standalone 14-space line mid-document
      expect(fix('Para one.\n\n              Para two.\n\nPara three.', 'ja')).toBe(
        'Para one.\n\nPara two.\n\nPara three.',
      )
    })

    test('does not strip content inside 4-space-indented fences (list code blocks)', () => {
      // A fenced code block that itself lives inside a list item is indented
      // by 4 spaces.  Its content may have 6–25 spaces of leading whitespace
      // but must NOT be stripped.
      const fenced = [
        '1. Add this config:',
        '',
        '    ```json copy',
        '    {',
        '      "key": "value",',
        '      "nested": {',
        '        "deep": true',
        '      }',
        '    }',
        '    ```',
      ].join('\n')
      expect(fix(fenced, 'ja')).toBe(fenced)
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

  // ─── SCRAPE-6548: search-scrape failures ─────────────────────────────
  // Tests for the per-file Liquid corrections added to stop the daily
  // search-scrape failures reported in github/docs-engineering#6548.
  describe('SCRAPE-6548 per-file fixes', () => {
    function fixAt(content: string, code: string, relativePath: string) {
      return correctTranslatedContentStrings(content, '', {
        code,
        relativePath,
        skipOrphanStripping: true,
      })
    }

    test('pt: {%datavariables (no spaces) → {% data variables', () => {
      expect(fix('{%datavariables.product.github %}', 'pt')).toBe(
        '{% data variables.product.github %}',
      )
      expect(fix('{%-datavariables.product.github %}', 'pt')).toBe(
        '{%- data variables.product.github %}',
      )
    })

    test('pt: stray space after {% data variables.product.', () => {
      expect(fix('{% data variables.product. prodname_ghe_cloud %}', 'pt')).toBe(
        '{% data variables.product.prodname_ghe_cloud %}',
      )
      expect(fix('{%- data variables.product. prodname_ghe_server %}', 'pt')).toBe(
        '{%- data variables.product.prodname_ghe_server %}',
      )
    })

    test('pt: leaves correct path alone', () => {
      const ok = '{% data variables.product.prodname_ghe_cloud %}'
      expect(fix(ok, 'pt')).toBe(ok)
    })

    test('fr: missing-% in {% ifversion ghes} / {% elsif ghec or ghes}', () => {
      expect(fix('{% ifversion ghes}', 'fr')).toBe('{% ifversion ghes %}')
      expect(fix('{% elsif ghec or ghes}', 'fr')).toBe('{% elsif ghec or ghes %}')
    })

    test('fr: {% des … variables.X %} → {% data variables.X %}', () => {
      expect(fix('{% des instances de variables.product.prodname_ghe_server %}', 'fr')).toBe(
        '{% data variables.product.prodname_ghe_server %}',
      )
    })

    test('fr: leaves unrelated `des` prose alone', () => {
      const ok = 'Les métriques des données sont utiles.'
      expect(fix(ok, 'fr')).toBe(ok)
    })

    test('ko: username-changes intro orphan-endif fix', () => {
      const broken =
        '인스턴스에서 기본 제공 인증{% endif %}를 사용하는 경우 {% data variables.product.github %} 계정 {% ifversion ghes %}의 사용자 이름을 변경할 수 있습니다.'
      const out = fixAt(broken, 'ko', 'account-and-profile/concepts/username-changes.md')
      expect(out).not.toContain('{% endif %}를')
      expect(out).toContain('{% endif %}')
      expect(out).toContain('{% ifversion ghes %}')
    })

    test('zh: username-changes intro orphan-endif fix', () => {
      const broken =
        '如果实例使用内置身份验证{% endif %}，则可以更改 {% data variables.product.github %} 帐户 {% ifversion ghes %} 的用户名。'
      const out = fixAt(broken, 'zh', 'account-and-profile/concepts/username-changes.md')
      expect(out).not.toContain('{% endif %}，')
      expect(out).toContain('{% endif %}')
    })

    test('zh: security-log-events markdown duplicate ifversion ghes', () => {
      const broken = '> * {% ifversion ghes %} 本文包含最新版本'
      expect(fix(broken, 'zh')).toBe('> * 本文包含最新版本')
    })

    test('de: permissions-of-custom-organization-roles intro append endif', () => {
      const broken =
        'Mit angepassten Organisationsrollen kannst du den Zugriff auf die Einstellungen deiner {% ifversion org-custom-role-with-repo-permissions %}Organisation und die Repositories{% else %}einer Organisation steuern.'
      const out = fixAt(
        broken,
        'de',
        'organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles.md',
      )
      expect(out).toContain('{% endif %} steuern.')
    })

    test('ru: permissions-of-custom-organization-roles intro append endif', () => {
      const broken =
        'Вы можете управлять доступом к параметрам и репозиториям организации {% ifversion org-custom-role-with-repo-permissions %}, а также к параметрам организации {% else %}организации с пользовательскими ролями организации.'
      const out = fixAt(
        broken,
        'ru',
        'organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles.md',
      )
      expect(out).toMatch(/\{% endif %\}$/)
    })

    test('ja: scim/index title rebalances tags', () => {
      const broken =
        'SCIM{% endif %} を使用したエンタープライズ マネージド ユーザー{% else %} 向けのプロビジョニング アカウント{% ifversion ghec %}'
      const out = fix(broken, 'ja')
      // After fix: balanced ifversion/else/endif and starts with ifversion
      expect(out).toMatch(/^\{% ifversion ghec %\}/)
      expect(out).toMatch(/\{% endif %\}$/)
      expect(out.match(/\{% endif %\}/g) || []).toHaveLength(1)
    })

    test('es: deduplication reusable appends endif when scoped by dottedPath', () => {
      const broken = 'tienen prioridad sobre el envío automático de dependencias.\n1. Otra cosa.'
      const out = correctTranslatedContentStrings(broken, '', {
        code: 'es',
        dottedPath: 'reusables.dependency-graph.deduplication',
        skipOrphanStripping: true,
      })
      expect(out).toContain(
        'tienen prioridad sobre el envío automático de dependencias.{% endif %}\n',
      )
    })

    test('es: deduplication reusable also fires when scoped by relativePath', () => {
      const broken = 'tienen prioridad sobre el envío automático de dependencias.\n1. Otra cosa.'
      const out = correctTranslatedContentStrings(broken, '', {
        code: 'es',
        relativePath: 'data/reusables/dependency-graph/deduplication.md',
        skipOrphanStripping: true,
      })
      expect(out).toContain(
        'tienen prioridad sobre el envío automático de dependencias.{% endif %}\n',
      )
    })

    test('es: deduplication fix does NOT fire on unrelated paths', () => {
      const text = 'tienen prioridad sobre el envío automático de dependencias.\n1. Otra.'
      const out = correctTranslatedContentStrings(text, '', {
        code: 'es',
        relativePath: 'some/other/file.md',
        skipOrphanStripping: true,
      })
      expect(out).toBe(text)
    })
  })

  // ─── SCRAPE-6572: search-scrape failures ─────────────────────────────
  // Tests for the per-file Liquid corrections added to stop the daily
  // search-scrape failures reported in github/docs-engineering#6572.
  describe('SCRAPE-6572 per-file fixes', () => {
    test('ko: configuring-access-to-private-registries-for-dependabot intro missing endif', () => {
      const broken =
        '자체 호스팅된 실행기에서 실행 중인 {% data variables.product.prodname_dependabot %}에 대한 액세스를 구성할 수도 있습니다.{% data variables.product.prodname_dependabot %}'
      const out = fix(broken, 'ko')
      expect(out).toContain('{% endif %}')
      expect(out).not.toMatch(
        /구성할 수도 있습니다\.\{% data variables\.product\.prodname_dependabot %\}$/,
      )
    })

    test('ru: viewing-a-projects-contributors intro swapped endif/ifversion', () => {
      const broken =
        'Вы можете увидеть, кто внес{% endif %} коммиты в репозиторий{% ifversion fpt or ghec %} и его зависимости.'
      const out = fix(broken, 'ru')
      expect(out).not.toContain('внес{% endif %}')
      expect(out).toMatch(/\{% ifversion fpt or ghec %\} и его зависимости\{% endif %\}\.$/)
    })
  })
})
