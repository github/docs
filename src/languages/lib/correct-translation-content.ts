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
    content = content.replaceAll('{% vulnerables variables.', '{% data variables.')
    content = content.replaceAll('{% datos variables', '{% data variables')
    content = content.replaceAll('{% de datos variables', '{% data variables')
    content = content.replaceAll('{% datos reusables', '{% data reusables')
    content = content.replaceAll('{%- ifversion fpt o ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt o ghec %}', '{% ifversion fpt or ghec %}')
  }

  if (context.code === 'ja') {
    content = content.replaceAll('{% データ variables', '{% data variables')
    content = content.replaceAll('{% データvariables', '{% data variables')
    content = content.replaceAll('{% データ reusables', '{% data reusables')

    // Fix trailing quote on YAML value
    content = content.replace(/^(\s*asked_too_many_times:\s*.+)"\s*$/m, '$1')

    // Fix Japanese nested Markdown links where the translation text
    // inside parentheses confuses the Markdown parser. Inject a hair
    // space (\u200A) between `]` and `(` so the parser treats them as
    // separate tokens.
    content = content.replace(/\[(\[.*?\])(\(\S+\)\]\()/g, '[$1\u200A$2')
  }

  if (context.code === 'pt') {
    content = content.replaceAll('{% dados variables', '{% data variables')
    content = content.replaceAll('{% de dados variables', '{% data variables')
    content = content.replaceAll('{% dados reusables', '{% data reusables')
    content = content.replaceAll('{{% dados ', '{% data ')
    content = content.replaceAll('{{% datas ', '{% data ')
  }

  if (context.code === 'zh') {
    content = content.replaceAll('{% 数据variables', '{% data variables')
    content = content.replaceAll('{% 数据 variables', '{% data variables')
    content = content.replaceAll('{% 数据可重用', '{% data reusables')
  }

  if (context.code === 'ru') {
    content = content.replaceAll('[«AUTOTITLE»](', '[AUTOTITLE](')
    content = content.replaceAll('{% данных variables', '{% data variables')
    content = content.replaceAll('{% данными variables', '{% data variables')
    content = content.replaceAll('{% данных организации variables', '{% data variables')
    content = content.replaceAll('{% данным variables.', '{% data variables.')
    content = content.replaceAll('{% данные variables.', '{% data variables.')
    content = content.replaceAll('{% данных reusables', '{% data reusables')
    content = content.replaceAll('{% данные reusables', '{% data reusables')
    content = content.replaceAll('{% необработанного %}', '{% raw %}')
    content = content.replaceAll('{%- ifversion fpt или ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt или ghec %}', '{% ifversion fpt or ghec %}')
    content = content.replaceAll('{% endif _%}', '{% endif %}')
    content = content.replaceAll('{% конечным %}', '{% endif %}')
    content = content.replaceAll('{% конец %}', '{% endif %}')
    content = content.replaceAll('{% переменных данных.', '{% data variables.')
    content = content.replaceAll('{% повторно используемых данных.', '{% data reusables.')
    content = content.replaceAll('{% примечание %}', '{% note %}')
    content = content.replaceAll('{% конечных головщиков %}', '{% endrowheaders %}')
    content = content.replaceAll('{% данных для повторного использования.', '{% data reusables.')
    content = content.replaceAll('{% еще %}', '{% else %}')
    content = content.replaceAll('{% необработанные %}', '{% raw %}')

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
  }

  if (context.code === 'fr') {
    content = content.replaceAll('{% données variables', '{% data variables')
    content = content.replaceAll('{% données réutilisables.', '{% data reusables.')
    content = content.replaceAll('{% variables de données.', '{% data variables.')
    content = content.replaceAll('{%- ifversion fpt ou ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt ou ghec %}', '{% ifversion fpt or ghec %}')
  }

  if (context.code === 'ko') {
    content = content.replaceAll('[AUTOTITLE"을 참조하세요]', '[AUTOTITLE]')
    content = content.replaceAll('{% 데이터 variables', '{% data variables')
    content = content.replaceAll('{% 데이터 reusables.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 변수.', '{% data variables.')
    content = content.replaceAll('{% 데이터 변숫값.', '{% data variables.')
    content = content.replaceAll('{% dada variables', '{% data variables')

    // Korean translation of github-glossary.md
    content = content.replaceAll('{{ 용어집.term }}', '{{ glossary.term }}')
  }

  if (context.code === 'de') {
    content = content.replaceAll('{% Daten variables', '{% data variables')
    content = content.replaceAll('{% daten variables', '{% data variables')
    content = content.replaceAll('{%-Daten variables', '{%- data variables')
    content = content.replaceAll('{%- ifversion fpt oder ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt oder ghec %}', '{% ifversion fpt or ghec %}')
  }

  // --- Generic fixes (all languages) ---
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
  content = content.replaceAll('{{% vscode %}}', '{% vscode %}')
  content = content.replaceAll('{{% endvscode %}}', '{% endvscode %}')
  content = content.replaceAll('{{% endvisualstudio %}}', '{% endvisualstudio %}')

  // Common Latin-script typos across multiple languages.
  content = content.replaceAll('{% variables.', '{% data variables.')
  content = content.replaceAll('{% datavariables', '{% data variables')

  // Recover linebreaks that translations lose after Liquid closing tags.
  // Compares each `{% ... %} ` in the translation against the English
  // to see if it should be `{% ... %}\n` instead.
  content = content.replace(/\{%(.+?)%\} /g, (match) => {
    if (match.lastIndexOf('{%') > 0) return match
    const withLinebreak = `${match.slice(0, -1)}\n`
    if (englishContent.includes(withLinebreak) && !englishContent.includes(match)) {
      return withLinebreak
    }
    return match
  })
  // Special case: `{% endif %} | ` → `{% endif %}\n| ` when English has it.
  content = content.replace(/\{% endif %\} \| /g, (match) => {
    const potentiallyBetter = '{% endif %}\n| '
    if (englishContent.includes(potentiallyBetter)) {
      return potentiallyBetter
    }
    return match
  })

  // Collapsed Markdown table rows — restore linebreaks between `|` cells.
  content = content.replaceAll(' | | ', ' |\n| ')

  return content
}
