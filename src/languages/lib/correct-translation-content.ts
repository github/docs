/**
 * A lot of translations have minor corruptions that will lead to rendering
 * failing (and having to rely on English fallback). Many of these are
 * easy to manually correct for.
 *
 * This function is a temporary solution to correct for these corruptions.
 * It looks for easy "low hanging fruit" that we can correct for.
 *
 */

interface CorrectionContext {
  code?: string
  dottedPath?: string
  relativePath?: string
  [key: string]: any
}

export function correctTranslatedContentStrings(
  content: string,
  englishContent: string,
  context: CorrectionContext = {},
): string {
  // --- Per-language fixes (es, ja, pt, zh, ru, fr, ko, de) ---

  if (context.code === 'es') {
    // Remove colon prefix on Liquid tags: `{%:` → `{%`
    content = content.replace(/\{%:/g, '{%')

    content = content.replaceAll('{% vulnerables variables.', '{% data variables.')
    content = content.replaceAll('{% datos variables', '{% data variables')
    content = content.replaceAll('{% de datos variables', '{% data variables')
    content = content.replaceAll('{% datos reusables', '{% data reusables')
    content = content.replaceAll('{% data reutilizables.', '{% data reusables.')
    // Translated Liquid keywords
    content = content.replaceAll('{% comentario %}', '{% comment %}')
    content = content.replaceAll('{% si ', '{% if ')
    content = content.replaceAll('{% sin procesar %}', '{% raw %}')
    content = content.replaceAll('{% %} sin procesar', '{% raw %}')
    // "sin formato" is another translation of "raw"
    content = content.replace(/\{%\s*%?sin formato\s*\}/g, '{% raw %}')
    content = content.replaceAll(
      '{% para glosario en glosarios %}',
      '{% for glossary in glossaries %}',
    )
    content = content.replaceAll('{{ glosario.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{{ glosario.description }}', '{{ glossary.description }}')
    // Catch "o" and "y/o" between any plan names in ifversion/elsif/if tags
    content = content.replace(
      /\{%-? (?:ifversion|elsif|if) [^%]*?(?:\by\/o\b|\bo\b)[^%]*?%\}/g,
      (match) => {
        return match.replace(/ y\/o /g, ' or ').replace(/ o /g, ' or ')
      },
    )
    // Spanish "no" for "not" in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\bno\b[^%]*?%\}/g, (match) => {
      return match.replace(/ no /g, ' not ')
    })
    // Translated for-loop keywords
    content = content.replace(/\{%-? para (?:la )?entrada en /g, (match) => {
      return match.replace(/para (?:la )?entrada en/, 'for entry in')
    })
    content = content.replace(/\{%-? cuando /g, (match) => {
      return match.replace('cuando', 'when')
    })
    // Translated block tags
    content = content.replaceAll('{% nota %}', '{% note %}')
    content = content.replaceAll('{%- nota %}', '{%- note %}')
    content = content.replaceAll('{%- nota -%}', '{%- note -%}')
    // `{% otra %}` / `{%- otra %}` — "another/other" = else
    content = content.replaceAll('{% otra %}', '{% else %}')
    content = content.replaceAll('{%- otra %}', '{%- else %}')
    // `{% encabezados de fila %}` — "row headers" = rowheaders
    content = content.replaceAll('{% encabezados de fila %}', '{% rowheaders %}')
    content = content.replaceAll('{%- encabezados de fila %}', '{%- rowheaders %}')
  }

  if (context.code === 'ja') {
    content = content.replaceAll('{% データ variables', '{% data variables')
    content = content.replaceAll('{% データvariables', '{% data variables')
    content = content.replaceAll('{% データ reusables', '{% data reusables')
    content = content.replaceAll('{% データ変数.', '{% data variables.')
    content = content.replaceAll('{% データ再利用可能な.', '{% data reusables.')
    content = content.replaceAll('{% データ再利用可能.', '{% data reusables.')
    content = content.replaceAll('{% データ再利用.', '{% data reusables.')
    content = content.replaceAll('{% メモ %}', '{% note %}')
    // Double-brace corruption of `{% data`: `{% {{データ}} variables.` → `{% data variables.`
    content = content.replaceAll('{{データ}} variables.', 'data variables.')
    // Catch "または" between any plan names in ifversion/elsif tags
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?または[^%]*?%\}/g, (match) => {
      return match.replace(/ または /g, ' or ')
    })

    // Fix trailing quote on YAML value
    content = content.replace(/^(\s*asked_too_many_times:\s*.+)"\s*$/m, '$1')

    // Fix Japanese nested Markdown links where the translation text
    // inside parentheses confuses the Markdown parser. Inject a hair
    // space (\u200A) between `]` and `(` so the parser treats them as
    // separate tokens.
    content = content.replace(/\[(\[.*?\])(\(\S+\)\]\()/g, '[$1\u200A$2')

    // Translated Liquid keywords in case/when/comment/endcomment statements
    content = content.replaceAll('{%- それ以外の場合 %}', '{%- else %}')
    content = content.replaceAll('{% それ以外の場合 %}', '{% else %}')
    content = content.replaceAll('{%- エンドケース -%}', '{%- endcase -%}')
    content = content.replaceAll('{% エンドケース %}', '{% endcase %}')
    content = content.replaceAll('{%- コメント %}', '{%- comment %}')
    content = content.replaceAll('{% コメント %}', '{% comment %}')
    content = content.replaceAll('{%- 終了コメント %}', '{%- endcomment %}')
    content = content.replaceAll('{% 終了コメント %}', '{% endcomment %}')
    content = content.replaceAll('{% エンドビジュアルスタジオ %}', '{% endvisualstudio %}')
    content = content.replaceAll('{% エクリプス %}', '{% eclipse %}')
    // `{% それ以外の %}` — truncated form of "in the other case" = else
    content = content.replaceAll('{% それ以外の %}', '{% else %}')
    content = content.replaceAll('{%- それ以外の %}', '{%- else %}')
    // `{% それ以外の場合 ifversion X %}` → `{% elsif X %}` (confused elsif + ifversion)
    content = content.replace(/\{% それ以外の場合 ifversion\s+(.+?)\s*%\}/g, '{% elsif $1 %}')
    // `{%- "supported" %}` → `{%- when "supported" %}` (missing `when`)
    // Preserves original trim syntax (`{%-` vs `{%`)
    content = content.replace(/\{%-?\s*"(supported|not_supported|preview)"\s*%\}/g, (match) => {
      return match.replace(/(%-?)\s*"/, '$1 when "')
    })
    content = content.replace(
      /\{%-?\s*"(サポートされている|サポートされていません|プレビュー)"\s*%\}/g,
      (match) => {
        return match
          .replace('サポートされている', 'supported')
          .replace('サポートされていません', 'not_supported')
          .replace('プレビュー', 'preview')
          .replace(/(%-?)\s*"/, '$1 when "')
      },
    )

    // Empty trim tag `{%- %}C` → `{%- when "closing-down" %}C` (translation stripped `when "closing-down"`)
    content = content.replaceAll('{%- %}C', '{%- when "closing-down" %}C')

    // Deeply translated Liquid for-loops in table-generation templates.
    // `{%- COLLECTION の VARNAME -%}` → `{%- for VARNAME in COLLECTION -%}`
    // Covers `tables.X`, `groupVersions`, `ideEntry.features`, etc.
    content = content.replace(
      /\{%-?\s*([\w.]+(?:\[[\w"']+\])?)\s+の\s+(\w+)\s*-?%\}/g,
      (match, collectionPath, varName) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        const closeDash = match.endsWith('-%}') ? '-%}' : '%}'
        return `${dash} for ${varName} in ${collectionPath} ${closeDash}`
      },
    )
    // `{%- COLLECTION %} の VARNAME の場合` → `{%- for VARNAME in COLLECTION %}`
    // Variant where の and variable name appear OUTSIDE the tag close
    content = content.replace(
      /\{%-?\s*([\w.]+(?:\[[\w"']+\])?)\s*-?%\}\s+の(\w+)の場合/g,
      (match, collectionPath, varName) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        return `${dash} for ${varName} in ${collectionPath} %}`
      },
    )
    // `{{ バージョン }}` → `{{ version }}`
    content = content.replaceAll('{{ バージョン }}', '{{ version }}')
    content = content.replaceAll('{{ 言語 }}', '{{ language }}')
    // `{%- 言語を割り当てる = X %}` → `{%- assign language = X %}`
    content = content.replace(/\{%-?\s*言語を割り当てる\s*=\s*/g, (match) =>
      match.startsWith('{%-') ? '{%- assign language = ' : '{% assign language = ',
    )
    // `{%- featureData = X %} を割り当てる` → `{%- assign featureData = X %}`
    // and similar `= X %} を割り当てる` patterns
    content = content.replace(
      /\{%-?\s*(\w+)\s*=\s*([^%]+?)%\}\s*を割り当てる/g,
      (match, varName, value) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        return `${dash} assign ${varName} = ${value.trim()} %}`
      },
    )
    // `{%- ... -%} の割り当て` (stray "assignment of" after a tag) → strip it
    content = content.replaceAll(' の割り当て', '')
    // `{%- ... -%} の場合` ("in the case of" = if) → strip, the `if` is already in the tag
    content = content.replaceAll(' の場合', '')

    // Missing `if` in condition checks: `{%- featureData.X %}` → `{%- if featureData.X %}`
    content = content.replace(
      /\{%-?\s*((?:featureData|supportLevel|languageData|entry)\.\w+)\s*-?%\}/g,
      (match, condition) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        const closeDash = match.endsWith('-%}') ? '-%}' : '%}'
        return `${dash} if ${condition} ${closeDash}`
      },
    )
    // Missing `assign` in assignments: `{%- varName = value %}` (no trailing keyword)
    content = content.replace(
      /\{%-?\s*(featureKey|featureData|supportLevel|languageData|groupName|groupVersions)\s*=\s*([^%]+?)-?%\}/g,
      (match, varName, value) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        const closeDash = match.endsWith('-%}') ? '-%}' : '%}'
        return `${dash} assign ${varName} = ${value.trim()} ${closeDash}`
      },
    )
  }

  if (context.code === 'pt') {
    content = content.replaceAll('{% dados variables', '{% data variables')
    content = content.replaceAll('{% de dados variables', '{% data variables')
    content = content.replaceAll('{% dados reusables', '{% data reusables')
    // Fully translated reusables path: `{% dados reutilizáveis.X.Y %}` → `{% data reusables.X.Y %}`
    content = content.replaceAll('{% dados reutilizáveis.', '{% data reusables.')
    // Translated path segment inside reusables path: `repositórios` → `repositories`
    content = content.replaceAll(
      '{% data reusables.repositórios.',
      '{% data reusables.repositories.',
    )
    content = content.replaceAll('{{% dados ', '{% data ')
    content = content.replaceAll('{{% datas ', '{% data ')
    content = content.replaceAll('{% senão %}', '{% else %}')
    content = content.replaceAll('{% mais %}', '{% else %}')
    content = content.replaceAll('{% se ', '{% if ')
    content = content.replaceAll('{% atribuir ', '{% assign ')
    content = content.replaceAll('{% %} bruto', '{% raw %}')
    content = content.replaceAll('{% %de dados reusables.', '{% data reusables.')
    content = content.replaceAll('{% %de dados variables.', '{% data variables.')
    content = content.replaceAll('{% %móvel }', '{% mobile %}')
    // Catch "ou" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?ou [^%]*?%\}/g, (match) => {
      return match.replace(/ ou /g, ' or ')
    })
  }

  if (context.code === 'zh') {
    content = content.replaceAll('{% 数据variables', '{% data variables')
    content = content.replaceAll('{% 数据 variables', '{% data variables')
    // Order matters: the more specific `s.` variant must run first to
    // avoid the broader rule producing a double-s (`reusabless`).
    content = content.replaceAll('{% 数据可重用s.', '{% data reusables.')
    content = content.replaceAll('{% 数据可重用', '{% data reusables')
    content = content.replaceAll('{% 其他 %}', '{% else %}')
    content = content.replaceAll('{% 原始 %}', '{% raw %}')
    // `{% 否则 %}` — "otherwise" = else (different Chinese word than 其他)
    content = content.replaceAll('{% 否则 %}', '{% else %}')
    content = content.replaceAll('{%- 否则 %}', '{%- else %}')
    // Chinese `如果` = "if": `{ 如果 X %}` → `{% if X %}`
    content = content.replace(/\{ 如果 /g, '{% if ')
    // Stray Chinese `，则为` ("then") merged with `{%` before HTML: `，则为 {%<tag>` → `<tag>`
    // The regex consumes the `<` to avoid producing a double `<<`.
    content = content.replace(/，则为 \{%</g, '<')
    // Catch "或" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?或[^%]*?%\}/g, (match) => {
      return match.replace(/ 或 /g, ' or ')
    })
  }

  if (context.code === 'ru') {
    content = content.replaceAll('[«AUTOTITLE»](', '[AUTOTITLE](')
    content = content.replaceAll('[АВТОЗАГОЛОВОК](', '[AUTOTITLE](')
    content = content.replaceAll('{% данных variables', '{% data variables')
    content = content.replaceAll('{% данных, variables', '{% data variables')
    content = content.replaceAll('{% данными variables', '{% data variables')
    content = content.replaceAll('{% данных организации variables', '{% data variables')
    content = content.replaceAll('{% данным variables.', '{% data variables.')
    content = content.replaceAll('{% данные variables.', '{% data variables.')
    content = content.replaceAll('{% данных reusables', '{% data reusables')
    content = content.replaceAll('{% данные reusables', '{% data reusables')
    content = content.replaceAll('{% данных переменных.', '{% data variables.')
    // Broaden `{% данных.X` → `{% data variables.X` (covers .product., .dependency-review., .code-scanning., etc.)
    content = content.replaceAll('{% данных.', '{% data variables.')
    content = content.replaceAll('{% data переменных.', '{% data variables.')
    content = content.replaceAll('{% переменным данных.', '{% data variables.')
    // Broader "переменных данных" pattern — covers .dependency-review, .code-scanning, etc.
    content = content.replaceAll('{% переменных данных.', '{% data variables.')
    // Dot-prefix paths where `data variables` was entirely dropped
    content = content.replaceAll('{% .dependency-review.', '{% data variables.dependency-review.')
    content = content.replaceAll('{% .code-scanning.', '{% data variables.code-scanning.')
    // Same without space after `{%`
    content = content.replaceAll('{%.dependency-review.', '{% data variables.dependency-review.')
    content = content.replaceAll('{%.code-scanning.', '{% data variables.code-scanning.')
    content = content.replaceAll('{%.copilot.', '{% data variables.copilot.')
    // Stray `"` between `данных` and `variables`
    content = content.replaceAll('{% данных" variables', '{% data variables')
    content = content.replaceAll('{%" variables.', '{% data variables.')
    // Stray `,` replacing `data`
    content = content.replaceAll('{%, variables.', '{% data variables.')
    content = content.replaceAll('{% необработанного %}', '{% raw %}')
    content = content.replaceAll('{%- ifversion fpt или ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt или ghec %}', '{% ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion ghec или fpt %}', '{% ifversion ghec or fpt %}')
    content = content.replaceAll('{% ghes или ghec %}', '{% ifversion ghes or ghec %}')
    content = content.replaceAll('{% elsif ghec или ghes %}', '{% elsif ghec or ghes %}')
    // Catch remaining "или" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?или[^%]*?%\}/g, (match) => {
      return match.replace(/ или /g, ' or ')
    })
    content = content.replaceAll('{% endif _%}', '{% endif %}')
    content = content.replaceAll('{% конечным %}', '{% endif %}')
    // `{% конец %}` after `{% raw %}` means `{% endraw %}`, not `{% endif %}`.
    // Handle this BEFORE the generic `{% конец %}` → `{% endif %}` fallback.
    // We use a split-based approach instead of `[^]*?` regex to avoid
    // catastrophic backtracking on large content (~20s on 150KB inputs).
    if (content.includes('{% конец %}') && content.includes('{% raw %}')) {
      const parts = content.split('{% raw %}')
      for (let i = 1; i < parts.length; i++) {
        parts[i] = parts[i].replace('{% конец %}', '{% endraw %}')
      }
      content = parts.join('{% raw %}')
    }
    content = content.replaceAll('{% конец %}', '{% endif %}')
    // Cyrillic transliteration of `elsif` (lossy → else, since version param is lost)
    content = content.replaceAll('{% Эльсиф %}', '{% else %}')
    // Translated feature flag names
    content = content.replaceAll(
      'обязательный-2fa-dotcom-участник',
      'mandatory-2fa-dotcom-contributors',
    )
    content = content.replaceAll(
      'обязательный-2fa-участник-2023',
      'mandatory-2fa-contributors-2023',
    )
    // `не` = "not" in ifversion tags
    content = content.replaceAll('{% ifversion не ', '{% ifversion not ')
    content = content.replaceAll('{% переменных данных.', '{% data variables.')
    content = content.replaceAll('{% повторно используемых данных.', '{% data reusables.')
    content = content.replaceAll('{% примечание %}', '{% note %}')
    content = content.replaceAll('{% конечных головщиков %}', '{% endrowheaders %}')
    content = content.replaceAll('{% данных для повторного использования.', '{% data reusables.')
    content = content.replaceAll('{% еще %}', '{% else %}')
    content = content.replaceAll('{% ещё %}', '{% else %}')
    // `{% иначе %}` — "otherwise" = else
    content = content.replaceAll('{% иначе %}', '{% else %}')
    content = content.replaceAll('{%- иначе %}', '{%- else %}')
    content = content.replaceAll('{% необработанные %}', '{% raw %}')
    content = content.replaceAll('{% необработанный %}', '{% raw %}')
    content = content.replaceAll('{% сырой %}', '{% raw %}')
    content = content.replaceAll('{% нарисовать %}', '{% endraw %}')
    content = content.replaceAll('{% эндкёрл %}', '{% endcurl %}')
    content = content.replaceAll('{% запроса %}', '{% endraw %}')
    // `{% Mac %}` — capitalized mac platform tag
    content = content.replaceAll('{% Mac %}', '{% mac %}')
    // Fix double quotes in Russian YAML files that cause parsing errors
    content = content.replace(/href=""https:\/\//g, 'href="https://')

    // Fix empty HTML tags that cause YAML parsing issues
    content = content.replaceAll('<b></b>', '')
    content = content.replaceAll('<u></u>', '')
    content = content.replace(/early_access:\s*"([^"]*)<b><\/b>([^"]*)"/, 'early_access: "$1$2"')
    content = content.replace(/(privacy_disclaimer:[^<]*)<u><\/u>/g, '$1')

    // Russian translation of github-glossary.md
    content = content.replaceAll(
      '{% для глоссария в глоссариях %}',
      '{% for glossary in glossaries %}',
    )
    content = content.replaceAll('{{ глоссарий.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{{ глоссарий.description }}', '{{ glossary.description }}')

    // Rearranged `{% data VARIABLE_PATH %}` → `VARIABLE_PATH %данн... {% }`
    // The translation moved `data` (as `данных`/`данными`/`данные`) after the path
    // and split `%}` into `{% }` or `{%  }`. Reconstruct the original tag.
    // Guard: these regexes start with [\w.-]+ which backtracks O(n²) on large word-char strings.
    if (content.includes('%данн')) {
      content = content.replace(
        /([\w.-]+\.[\w.-]+\.[\w_]+) %данн\w*[^{]*\{%\s+\}/g,
        '{% data $1 %}',
      )
      content = content.replace(
        /([\w.-]+\.[\w.-]+\.[\w_]+) %\}данн\w*\s*\{%\s*\./g,
        '{% data $1 %}.',
      )
    }
    if (content.includes('%{% data')) {
      // Variant where path precedes `%{% data  }`: `PATH %{% data  }.`
      content = content.replace(/([\w.-]+\.[\w.-]+\.[\w_]+) %\{% data\s+\}/g, '{% data $1 %}')
    }

    // Translated octicon names
    content = content.replaceAll(
      '{% octicon "организация" aria-hidden="true" aria-label="organization" %}',
      '{% octicon "organization" aria-hidden="true" aria-label="organization" %}',
    )
  }

  if (context.code === 'fr') {
    content = content.replaceAll('{% données variables', '{% data variables')
    content = content.replaceAll('{% données réutilisables.', '{% data reusables.')
    content = content.replaceAll('{% variables de données.', '{% data variables.')
    content = content.replaceAll('{% autre %}', '{% else %}')
    content = content.replaceAll('{% brut %}', '{% raw %}')
    content = content.replaceAll('{% %brut }', '{% raw %}')
    content = content.replaceAll('{% redessiner %}', '{% endraw %}')
    content = content.replaceAll('{% données ', '{% data ')
    // Catch remaining "ou" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?ou [^%]*?%\}/g, (match) => {
      return match.replace(/ ou /g, ' or ')
    })
    // French guillemets «/» → " inside if/ifversion/elsif tags
    content = content.replace(/\{%-?\s*(?:if|ifversion|elsif)\s[^%]*?[«»][^%]*?%\}/g, (match) => {
      return match.replace(/«\s*/g, '"').replace(/\s*»/g, '"')
    })
    // French decimal comma in version numbers: `3,16` → `3.16`
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?%\}/g, (match) => {
      return match.replace(/(\d),(\d)/g, '$1.$2')
    })
    // Translated block tags
    content = content.replaceAll('{% remarque %}', '{% note %}')
    content = content.replaceAll('{%- remarque %}', '{%- note %}')
    content = content.replaceAll('{%- remarque -%}', '{%- note -%}')
    content = content.replaceAll('{% avertissement %}', '{% warning %}')
    content = content.replaceAll('{%- avertissement %}', '{%- warning %}')
    content = content.replaceAll('{%- avertissement -%}', '{%- warning -%}')
    content = content.replaceAll('{% conseil %}', '{% tip %}')
    content = content.replaceAll('{%- conseil %}', '{%- tip %}')
    content = content.replaceAll('{%- conseil -%}', '{%- tip -%}')
    // `{% sinon %}` / `{%- sinon %}` — French "otherwise" = else
    content = content.replaceAll('{% sinon %}', '{% else %}')
    content = content.replaceAll('{%- sinon %}', '{%- else %}')
    // Remove orphaned {% endif %} tags when no ifversion/elsif opener exists in the content.
    // Caused by translations where only the closing tag survived (e.g. user-api.md reusable).
    if (
      !content.includes('{% ifversion ') &&
      !content.includes('{%- ifversion ') &&
      !content.includes('{% elsif ') &&
      !content.includes('{%- elsif ')
    ) {
      content = content.replaceAll('{% endif %}', '')
      content = content.replaceAll('{%- endif %}', '')
      content = content.replaceAll('{%- endif -%}', '')
    }
  }

  if (context.code === 'ko') {
    content = content.replaceAll('[AUTOTITLE"을 참조하세요]', '[AUTOTITLE]')
    content = content.replaceAll('{% 데이터 variables', '{% data variables')
    content = content.replaceAll('{% 데이터 reusables.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 변수.', '{% data variables.')
    content = content.replaceAll('{% 데이터 변숫값.', '{% data variables.')
    content = content.replaceAll('{% dada variables', '{% data variables')
    // Extra `%` before data: `{% % data` → `{% data`
    content = content.replaceAll('{% % data', '{% data')
    content = content.replaceAll('{% 기타 %}', '{% else %}')
    content = content.replaceAll('{% 참고 %}', '{% note %}')
    content = content.replaceAll('{% 원시 %}', '{% raw %}')
    // Catch "또는" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?또는[^%]*?%\}/g, (match) => {
      return match.replace(/ 또는 /g, ' or ')
    })
    // `{% 그렇지 않으면 %}` — "otherwise" = else
    content = content.replaceAll('{% 그렇지 않으면 %}', '{% else %}')
    content = content.replaceAll('{%- 그렇지 않으면 %}', '{%- else %}')
    // `{% 옥티콘` — Korean transliteration of "octicon"
    content = content.replaceAll('{% 옥티콘 ', '{% octicon ')

    // Korean translation of github-glossary.md
    content = content.replaceAll('{{ 용어집.term }}', '{{ glossary.term }}')
  }

  if (context.code === 'de') {
    content = content.replaceAll('{% Daten variables', '{% data variables')
    content = content.replaceAll('{% daten variables', '{% data variables')
    content = content.replaceAll('{% Data variables', '{% data variables')
    content = content.replaceAll('{% Daten reusables', '{% data reusables')
    content = content.replaceAll('{% Data reusables', '{% data reusables')
    // `wiederverwendbare` is German for "reusables" — fix translated reusables paths
    content = content.replaceAll('{% data wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{% Daten wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{% Data wiederverwendbare.', '{% data reusables.')
    // `wiederverwendbar.` (without trailing 'e') — alternate German form
    content = content.replaceAll('{% Daten wiederverwendbar.', '{% data reusables.')
    content = content.replaceAll('{%-Daten variables', '{%- data variables')
    content = content.replaceAll('{%-Daten-variables', '{%- data variables')
    content = content.replaceAll('{%- ifversion fpt oder ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt oder ghec %}', '{% ifversion fpt or ghec %}')
    // Catch remaining "oder" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?oder [^%]*?%\}/g, (match) => {
      return match.replace(/ oder /g, ' or ')
    })
    // Translated block tags
    content = content.replaceAll('{% Hinweis %}', '{% note %}')
    content = content.replaceAll('{%- Hinweis %}', '{%- note %}')
    content = content.replaceAll('{%- Hinweis -%}', '{%- note -%}')
    content = content.replaceAll('{% Warnung %}', '{% warning %}')
    content = content.replaceAll('{%- Warnung %}', '{%- warning %}')
    content = content.replaceAll('{%- Warnung -%}', '{%- warning -%}')
    content = content.replaceAll('{% Tipp %}', '{% tip %}')
    content = content.replaceAll('{%- Tipp %}', '{%- tip %}')
    content = content.replaceAll('{%- Tipp -%}', '{%- tip -%}')
    // Translated for-loop keywords: `für VARNAME in COLLECTION`
    content = content.replace(/\{%-? für (\w+) in /g, (match) => {
      return match.replace('für', 'for')
    })
    // `{% ansonsten %}` / `{%- ansonsten %}` — "otherwise" = else
    content = content.replaceAll('{% ansonsten %}', '{% else %}')
    content = content.replaceAll('{%- ansonsten %}', '{%- else %}')
    // `{% Zeilenkopfzeilen %}` — "row headers" = rowheaders
    content = content.replaceAll('{% Zeilenkopfzeilen %}', '{% rowheaders %}')
    content = content.replaceAll('{%- Zeilenkopfzeilen %}', '{%- rowheaders %}')
  }

  // --- Generic fixes (all languages) ---

  // Strip leaked LLM sentinel markers (e.g. `<|endoftext|>`) that
  // occasionally survive the translation pipeline. Replace the marker
  // and any surrounding whitespace with a single space so adjacent
  // words don't concatenate.
  content = content.replace(/\s*<\|endoftext\|>\s*/g, ' ')

  // Capitalized Liquid keyword: `{% Data ` → `{% data `
  content = content.replaceAll('{% Data ', '{% data ')

  // These run after per-language fixes so that e.g. `{{% данных variables`
  // first becomes `{{% data variables` and then gets caught here.

  // AUTOTITLE link corruptions. See internal issue #2762
  content = content.replaceAll('["AUTOTITLE]', '"[AUTOTITLE]')
  content = content.replaceAll('[ AUTOTITLE](', '[AUTOTITLE](')
  content = content.replaceAll('[ "AUTOTITLE](', '[AUTOTITLE](')

  // Double-brace Liquid tag corruptions.
  content = content.replaceAll('{{% octicon', '{% octicon')
  content = content.replaceAll('{{% endif %}}', '{% endif %}')
  content = content.replaceAll('{{% endif %}', '{% endif %}')
  content = content.replaceAll('{{%endif %}', '{% endif %}')
  content = content.replaceAll('{{% data variables.', '{% data variables.')
  content = content.replaceAll('{{% data reusables.', '{% data reusables.')
  content = content.replaceAll('{{% ifversion ', '{% ifversion ')
  content = content.replaceAll('{{% else %}}', '{% else %}')
  content = content.replaceAll('{{% elsif ', '{% elsif ')
  content = content.replaceAll('{{% vscode %}}', '{% vscode %}')
  content = content.replaceAll('{{% endvscode %}}', '{% endvscode %}')
  content = content.replaceAll('{{% endvisualstudio %}}', '{% endvisualstudio %}')

  // Double `{% {% ` or `{%{% ` where the tag opener was duplicated.
  content = content.replaceAll('{% {% ', '{% ')
  content = content.replaceAll('{%{% ', '{% ')

  // Multiple-percent corruptions: `{%%...` → `{%` and `%%}` → `%}`.
  content = content.replace(/\{%{2,}/g, '{%')
  content = content.replaceAll('%%}', '%}')

  // Stray `%` before tag open: `%{% data` → `{% data`
  content = content.replaceAll('%{% data', '{% data')
  content = content.replaceAll('%{% ifversion', '{% ifversion')

  // Corrupted `{ endif %}%` → `{% endif %}` (delimiters shuffled)
  content = content.replaceAll('{ endif %}%', '{% endif %}')
  // Corrupted `{ endif% %}` → `{% endif %}` (percent placed after keyword instead of after brace)
  content = content.replaceAll('{ endif% %}', '{% endif %}')
  // Empty tag `{%}` (no space, no name) — typically `{% else %}`
  content = content.replace(/\{%\}(?!})/g, '{% else %}')
  // `{% }` or `{%  }` (tag with just `}` or spaces as name) — almost always `{% endif %}`
  content = content.replace(/\{%\s+\}/g, '{% endif %}')

  // Missing `%` after opening `{`: `{else %}` → `{% else %}`
  content = content.replaceAll('{else %}', '{% else %}')
  content = content.replaceAll('{endif %}', '{% endif %}')
  // Missing space after `{%`: `{%else %}` → `{% else %}`
  content = content.replaceAll('{%else %}', '{% else %}')

  // `{%` immediately followed by Markdown bold `**` (missing `else %}`): `{%**` → `{% else %}**`
  content = content.replaceAll('{%**', '{% else %}**')

  // Markdown bold `**` injected inside Liquid tag closing: `%**}` → `%}**`
  content = content.replaceAll('%**}', '%}**')

  // Double-brace with missing `data`: `{{% variables.` → `{% data variables.`
  content = content.replaceAll('{{% variables.', '{% data variables.')

  // Extra closing brace: `%}}` → `%}` (common in Portuguese and other languages)
  content = content.replaceAll('%}}', '%}')

  // Common Latin-script typos across multiple languages.
  content = content.replaceAll('{% variables.', '{% data variables.')
  content = content.replaceAll('{% reusables.', '{% data reusables.')
  content = content.replaceAll('{% datavariables', '{% data variables')

  // Empty `{% %}` corruptions where the tag name was removed.
  content = content.replaceAll('{% %} de dados reusables.', '{% data reusables.')
  content = content.replaceAll('{% %} de dados variables.', '{% data variables.')

  // Fix `{% %}` used as `{% endraw %}` (follows raw content with Liquid expressions).
  // We use a split-based approach instead of `[^]*?` regex to avoid
  // catastrophic backtracking on large content (~20s on 150KB inputs).
  if (content.includes('{% %}') && content.includes('{% raw %}')) {
    const parts = content.split('{% raw %}')
    for (let i = 1; i < parts.length; i++) {
      parts[i] = parts[i].replace('{% %}', '{% endraw %}')
    }
    content = parts.join('{% raw %}')
  }

  // Fix `{% %}` used as `{% else %}` when it appears between ifversion and
  // endif on the same line: `{% ifversion X %}A{% %}B{% endif %}`.
  content = content.replace(
    /(\{% ifversion [^%]*?%\}[^{]*?)\{% %\}([^{]*?\{% endif %\})/g,
    '$1{% else %}$2',
  )

  // Remaining `{% %}` is almost always `{% endif %}`.
  content = content.replaceAll('{% %}', '{% endif %}')

  // Fix spaces inside Liquid tag delimiters, e.g. `{ % endif % }` or `{ % endif %}`
  content = content.replace(/\{ +%([^%]+?)% *\}/g, '{%$1%}')

  // Strip stray `{% ` openers that precede non-ASCII text (Cyrillic, CJK, etc.)
  // after all per-language keyword translations have run. Any remaining
  // `{% ` followed by a non-ASCII character is never a valid Liquid tag.
  // eslint-disable-next-line no-control-regex
  content = content.replace(/\{% (?=[^\x00-\x7F])/g, '')

  // Strip stray `{% .` (dot as tag name) — deeply corrupted data tag remnant.
  content = content.replace(/\{% \. /g, '')

  // Fix unclosed `{% data ... %}` tags where translated text was injected
  // between `%` and `}`: e.g. `{% data variables.product.github %las herramientas}`
  // Insert the missing `}` right after `%` to properly close the tag.
  content = content.replace(/({% data [\w.-]+ %)(?!})/g, '$1}')

  // Fix unclosed `{% data PATH` where `%}` was completely dropped and
  // non-ASCII translated text follows directly after the variable path.
  // eslint-disable-next-line no-control-regex
  content = content.replace(/({% data [\w.-]+) (?=[^\x00-\x7F])/g, '$1 %} ')

  // Recover linebreaks that translations lose after Liquid closing tags.
  // Compares each `{% ... %} ` in the translation against the English
  // to see if it should be `{% ... %}\n` instead.
  // Pre-build a Set of English Liquid-tag-with-linebreak strings so we
  // avoid O(tags × contentLength) repeated `String.includes()` scans.
  if (englishContent) {
    const englishLinebreaks = new Set<string>()
    const englishSpaces = new Set<string>()
    for (const m of englishContent.matchAll(/\{%.+?%\}[\n ]/g)) {
      if (m[0].endsWith('\n')) englishLinebreaks.add(m[0])
      else englishSpaces.add(m[0])
    }
    if (englishLinebreaks.size > 0) {
      content = content.replace(/\{%(.+?)%\} /g, (match) => {
        if (match.lastIndexOf('{%') > 0) return match
        const withLinebreak = `${match.slice(0, -1)}\n`
        if (englishLinebreaks.has(withLinebreak) && !englishSpaces.has(match)) {
          return withLinebreak
        }
        return match
      })
      // Special case: `{% endif %} | ` → `{% endif %}\n| ` when English has it.
      if (englishContent.includes('{% endif %}\n| ')) {
        content = content.replace(/\{% endif %\} \| /g, '{% endif %}\n| ')
      }
    }
  }

  // Collapsed Markdown table rows — restore linebreaks between `|` cells.
  content = content.replaceAll(' | | ', ' |\n| ')

  // Final catch-all: earlier normalizations (e.g. space-in-braces regex) can
  // recreate `{{% KEYWORD` patterns after the per-keyword fixes already ran.
  // Strip the extra `{` for known Liquid tag names.
  // Note: keywords without a trailing space (e.g. `raw`, `endif`) need `\b`
  // to ensure a space is not required, while still matching correctly.
  content = content.replace(
    /\{\{(%\s*(?:data |ifversion |elsif |endif\b|else\b|octicon |note\b|endnote\b|tip\b|endtip\b|raw\b|endraw\b|comment\b|endcomment\b|for |endfor\b|assign |vscode\b|endvscode\b|visualstudio\b|endvisualstudio\b|rowheaders\b|endrowheaders\b))/g,
    '{$1',
  )

  // After the catch-all, `{%raw` (no space) can appear. Normalize to `{% raw`.
  content = content.replaceAll('{%raw %}', '{% raw %}')
  content = content.replaceAll('{%raw -%}', '{% raw -%}')
  content = content.replaceAll('{%endraw %}', '{% endraw %}')
  content = content.replaceAll('{%endraw -%}', '{% endraw -%}')

  return content
}
