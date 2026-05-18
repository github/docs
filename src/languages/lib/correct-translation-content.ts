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
  // --- Universal pre-fixes (run before per-language rules) ---

  // Translators sometimes inserted spaces inside Liquid delimiters,
  // breaking the tags (e.g. `{ % endif %}`, `{% endif % }`). Collapse
  // these — but only when the tag has actual non-whitespace content
  // inside, so we don't disturb the special `{% }` → `{% endif %}`
  // recovery handled later. The English source never contains these
  // patterns, so this is safe globally.
  content = content.replace(/\{\s*%(-?)(\s*\S[^%]*?\s*)(-?)%\s*\}/g, '{%$1$2$3%}')

  // Translators sometimes dropped the `data` keyword in front of a
  // `variables.X.Y` / `reusables.X.Y` / `product.X` path. The English
  // source never starts a Liquid tag with these prefixes; they always
  // come inside `{% data variables.X %}` or similar. Restore the keyword.
  content = content.replace(
    /\{%(-?)\s+(variables|reusables)\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data $2.$3$4',
  )
  // `{% product.prodname_X %}` → `{% data variables.product.prodname_X %}`
  content = content.replace(
    /\{%(-?)\s+(product\.[A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data variables.$2$3',
  )

  // Translators sometimes wrote `{% data.variables.X %}` (period instead
  // of space) or `{% data.reusables.X %}` / `{% data.product.X %}`,
  // which Liquid parses as a single variable lookup whose name starts
  // with `.variables` / `.reusables`. Restore the space.
  content = content.replace(
    /\{%(-?)\s*data\.(variables|reusables)\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data $2.$3$4',
  )
  content = content.replace(
    /\{%(-?)\s*data\.(product\.[A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data variables.$2$3',
  )

  // The translation pipeline frequently splits Markdown bullet markers
  // (`*`) and table-cell pipes (`|`) onto their own line, with the
  // actual content pushed to the next line as deeply indented text.
  // This breaks list and table rendering and leaves `[AUTOTITLE]` links
  // unexpanded. Rejoin the marker with its content. This corruption
  // affects every translated language (~47k bullets and ~11k cells in
  // total), so it lives in the universal pre-fixes block.
  content = content.replace(/^([ \t]*)\* ?\n[ \t]+/gm, '$1* ')
  content = content.replace(/^\|[ \t]*\n[ \t]+/gm, '| ')

  // The same translator wrapping habit also strands heading markers
  // (`#`/`##`/...), blockquote markers (`>`), and the opening `**` of a
  // bold span on their own line, with the actual content pushed to the
  // next line as deeply indented text. This breaks heading/blockquote/
  // bold rendering and leaves Liquid tags and `[AUTOTITLE]` links
  // unexpanded. Rejoin them. Fence- and frontmatter-aware so we don't
  // disturb fenced markdown examples or YAML frontmatter.
  // ~3k headings, ~1.6k blockquotes, ~3.5k bold-after-marker cases
  // measured across all eight translated languages.
  content = joinDanglingMarkers(content)

  // YAML `|2-` block-scalar artifacts: some translated frontmatter fields
  // (typically `intro`) arrive with a spurious leading newline followed by
  // deep indentation when the translator wrote `field: |2-\n\n    content`.
  // The YAML parser preserves the leading blank line and extra indentation
  // in the parsed string. Strip that leading whitespace when the English
  // source has no such prefix.
  if (content.startsWith('\n') && !englishContent.startsWith('\n')) {
    content = content.replace(/^\n[ \t]*/, '')
  }

  // --- Per-language fixes (es, ja, pt, zh, ru, fr, ko, de) ---

  if (context.code === 'es') {
    // Remove colon prefix on Liquid tags: `{%:` → `{%`
    content = content.replace(/\{%:/g, '{%')

    // `{% siVersion X %}` — Spanish "si" (if) fused with "Version" = ifversion
    content = content.replaceAll('{% siVersion ', '{% ifversion ')
    content = content.replaceAll('{%- siVersion ', '{%- ifversion ')

    content = content.replaceAll('{% vulnerables variables.', '{% data variables.')
    content = content.replaceAll('{% datos variables', '{% data variables')
    content = content.replaceAll('{% de datos variables', '{% data variables')
    content = content.replaceAll('{% datos reusables', '{% data reusables')
    // `{% WORD de datos variables.` — extra Spanish word before "de datos variables"
    // e.g. `{% uso de datos variables.` ("use of data variables") or
    // `{% análisis de datos variables.` ("data analysis variables").
    // Unicode-aware character class so accented translator words match.
    content = content.replace(
      /\{%(-?)\s*[\p{L}\p{M}]+\s+de datos (variables|reusables)\./gu,
      '{%$1 data $2.',
    )
    // `{% de datos WORD variables.` — adjective inserted between "de datos" and path
    // e.g. `{% de datos específico variables.` ("specific data variables")
    content = content.replace(
      /\{%(-?)\s*de datos [\p{L}\p{M}]+ (variables|reusables)\./gu,
      '{%$1 data $2.',
    )
    // `{% WORD de variables.` — word + "de variables" (missing "datos" keyword)
    // e.g. `{% alerta de variables.product.X %}` (alert of variables)
    content = content.replace(
      /\{%(-?)\s*[\p{L}\p{M}]+\s+de\s+(variables|reusables)\./gu,
      '{%$1 data $2.',
    )
    content = content.replaceAll('{% data reutilizables.', '{% data reusables.')
    // `{% datos reutilizables.` — fully translated "data reusables" path
    content = content.replaceAll('{% datos reutilizables.', '{% data reusables.')
    // `{% datos repositorios.` — translated "repositories" path segment
    content = content.replaceAll('{% datos repositorios.', '{% data reusables.repositories.')
    // `{% datos de variables.` — reversed word order with extra "de"
    content = content.replaceAll('{% datos de variables.', '{% data variables.')
    // `{% variables de datos.` — reversed word order "variables of data"
    content = content.replaceAll('{% variables de datos.', '{% data variables.')
    // `{% Datos ` — capitalized "datos" = data
    content = content.replaceAll('{% Datos variables', '{% data variables')
    // `{% dato ` — singular form of "datos" = data
    content = content.replaceAll('{% dato variables', '{% data variables')
    // Translated Liquid keywords
    content = content.replaceAll('{% comentario %}', '{% comment %}')
    content = content.replaceAll('{%- comentario %}', '{%- comment %}')
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
    // `{% para el modelo en X %}` — "for the model in" = for model in
    content = content.replace(/\{%-? para el modelo en /g, (match) => {
      return match.replace('para el modelo en', 'for model in')
    })
    content = content.replace(/\{%-? cuando /g, (match) => {
      return match.replace('cuando', 'when')
    })
    // `{% icono "X" ... %}` — "icono" = "icon" = octicon
    content = content.replaceAll('{% icono ', '{% octicon ')
    content = content.replaceAll('{%- icono ', '{%- octicon ')
    // `{% octicon "bombilla" %}` — Spanish "bombilla" = "light-bulb" (translated octicon name)
    content = content.replaceAll('{% octicon "bombilla"', '{% octicon "light-bulb"')
    content = content.replaceAll('{%- octicon "bombilla"', '{%- octicon "light-bulb"')
    // `{% capturar X %}` — "capturar" = "to capture" = capture
    content = content.replaceAll('{% capturar ', '{% capture ')
    content = content.replaceAll('{%- capturar ', '{%- capture ')
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
    // Spanish `o` = "or", `y` = "and" inside ifversion/elsif/if
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\so\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\so\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sy\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sy\s/g, ' and '),
    )
    // `{% ifversion ghes}` (missing `%` before `}`) — translator dropped the
    // closing percent. Match plan name (fpt|ghec|ghes|ghae) followed by `}`
    // not `%}`, immediately followed by content (so we don't over-match).
    content = content.replace(
      /\{%-?(\s+(?:ifversion|elsif|if)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae)(?:\s+(?:or|and)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae))*)\}/g,
      '{%$1 %}',
    )

    // [SCRAPE-6548] Per-file fix for the Spanish reusable
    // `data/reusables/dependency-graph/deduplication.md`. The translation
    // dropped the `{% endif %}` after the Dependabot graph jobs item (the
    // English source has it, scoped to fpt/ghec). Restore it so the outer
    // `{% ifversion fpt or ghec %}` block balances. Scoped by both
    // `dottedPath` (production reusable rendering via get-data.ts) and
    // `relativePath` (count-translation-corruptions.ts validation path).
    if (
      context.dottedPath === 'reusables.dependency-graph.deduplication' ||
      context.relativePath?.endsWith('data/reusables/dependency-graph/deduplication.md')
    ) {
      content = content.replace(
        'tienen prioridad sobre el envío automático de dependencias.\n',
        'tienen prioridad sobre el envío automático de dependencias.{% endif %}\n',
      )
    }
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
    content = content.replaceAll('{%- メモ %}', '{%- note %}')
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
    // `{%- それ以外 %}` — further-truncated form (missing の/場合) = else
    content = content.replaceAll('{% それ以外 %}', '{% else %}')
    content = content.replaceAll('{%- それ以外 %}', '{%- else %}')
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
    // `{% 行ヘッダー %}` — "row headers" = rowheaders
    content = content.replaceAll('{% 行ヘッダー %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行ヘッダー %}', '{%- rowheaders %}')
    // `{% ウィンドウズ %}` — "Windows" = windows (platform tag)
    content = content.replaceAll('{% ウィンドウズ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウズ %}', '{%- windows %}')
    // `{% ウィンドウ %}` — "Window" (without ズ suffix) = windows (alternate transliteration)
    content = content.replaceAll('{% ウィンドウ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウ %}', '{%- windows %}')
    // `{% デスクトップ %}` — "desktop" (Japanese transliteration) = desktop platform tag
    content = content.replaceAll('{% デスクトップ %}', '{% desktop %}')
    content = content.replaceAll('{%- デスクトップ %}', '{%- desktop %}')
    // `{%データ` (no space after `{%`) — also catches `{%データvariables`
    content = content.replaceAll('{%データvariables', '{% data variables')
    content = content.replaceAll('{%データ variables', '{% data variables')
    content = content.replaceAll('{%- データvariables', '{%- data variables')
    content = content.replaceAll('{%- データ variables', '{%- data variables')
    content = content.replaceAll('{%- データ reusables', '{%- data reusables')
    // `{% データ` followed by `.` (path operator) — translator dropped `variables`/`reusables`
    content = content.replaceAll('{% データ.variables.', '{% data variables.')
    content = content.replaceAll('{% データ.reusables.', '{% data reusables.')
    // Generic Japanese `データ` data-tag normalizer.
    // Matches `{%[-]?[ ]?データ[ ]?[再利用可能|再利用|変数|reusables|variables|...].PATH %}`
    // and rewrites to `{%[-]? data <variables|reusables>.PATH %}` based on the keyword.
    content = content.replace(
      /\{%(-?)\s*データ\s*(再利用可能な?|再利用|reusables)\.([^\s%]+)\s*(-?)%\}/g,
      (_m, dashOpen, _kw, path, dashClose) => `{%${dashOpen} data reusables.${path} ${dashClose}%}`,
    )
    content = content.replace(
      /\{%(-?)\s*データ\s*(変数|variables)\.([^\s%]+)\s*(-?)%\}/g,
      (_m, dashOpen, _kw, path, dashClose) => `{%${dashOpen} data variables.${path} ${dashClose}%}`,
    )
    // Bare `{%データ` / `{%- データ` followed by space + (variables|reusables)
    content = content.replace(
      /\{%(-?)\s*データ\s+(variables|reusables)\.([^\s%]+)\s*(-?)%\}/g,
      (_m, dashOpen, kw, path, dashClose) => `{%${dashOpen} data ${kw}.${path} ${dashClose}%}`,
    )
    // `{% メモ` capitalized variant
    content = content.replaceAll('{% メモ -%}', '{%- note -%}')
    content = content.replaceAll('{%- メモ -%}', '{%- note -%}')
    // `{% ノート %}` — alternate Japanese for "note"
    content = content.replaceAll('{% ノート %}', '{% note %}')
    content = content.replaceAll('{%- ノート %}', '{%- note %}')
    // `{% 終わり %}` / `{% 終了 %}` — Japanese "end" used as endif
    content = content.replaceAll('{% 終わり %}', '{% endif %}')
    content = content.replaceAll('{%- 終わり %}', '{%- endif %}')
    content = content.replaceAll('{% 終了 %}', '{% endif %}')
    content = content.replaceAll('{%- 終了 %}', '{%- endif %}')
    // `{% 終了for %}` / `{% endforの場合 %}` — endfor variants
    content = content.replaceAll('{% 終了for %}', '{% endfor %}')
    content = content.replaceAll('{%- 終了for %}', '{%- endfor %}')
    // Japanese `または` = "or", `かつ` / `および` = "and" inside ifversion/elsif/if
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?または[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*または\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?かつ[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*かつ\s*/g, ' and '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?および[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*および\s*/g, ' and '),
    )
    // `{% 行ヘッダー %}` — "row headers" = rowheaders
    content = content.replaceAll('{% 行ヘッダー %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行ヘッダー %}', '{%- rowheaders %}')
    // `{% 終了行ヘッダー %}` — "end row headers" = endrowheaders
    content = content.replaceAll('{% 終了行ヘッダー %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 終了行ヘッダー %}', '{%- endrowheaders %}')
    // `{% ウィンドウ %}` / `{% ウィンドウズ %}` — "window/windows" = windows
    content = content.replaceAll('{% ウィンドウ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウ %}', '{%- windows %}')
    content = content.replaceAll('{% ウィンドウズ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウズ %}', '{%- windows %}')
    // `{% Windowsターミナル %}` / `{% Windows ターミナル %}` — Windows terminal
    content = content.replaceAll('{% Windowsターミナル %}', '{% windows %}')
    content = content.replaceAll('{% Windows ターミナル %}', '{% windows %}')
    // `{% indented_data_reference 再利用可能.X.Y spaces=N %}` — translated path
    content = content.replace(/(\{%-?\s*indented_data_reference\s+)再利用可能\./g, '$1reusables.')

    // [SCRAPE-6548] Per-file fixes for ja pages whose intro/title/shortTitle
    // Liquid was structurally scrambled (orphan endif, swapped tag order,
    // unclosed ifversion). Each replacement is scoped by the unique broken
    // substring in the source field and rewrites only the broken Liquid; the
    // Japanese prose is preserved exactly. These run only when context.code is
    // 'ja' so they cannot affect other languages.

    // admin/managing-iam/iam-configuration-reference/index.md (intro): orphan
    // `{% endif %}` injected before `{% ifversion ghec %}` — drop it.
    content = content.replaceAll(
      '{% data variables.location.product_location %}{% endif %} の認証 {% ifversion ghec %} および Enterprise {% elsif ghes %} のプロビジョニングの構成についての参照情報を表示できます。',
      '{% data variables.location.product_location %} の認証 {% ifversion ghec %} および Enterprise {% elsif ghes %} のプロビジョニングの構成{% endif %} についての参照情報を表示できます。',
    )

    // admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users.md
    // (intro): `{% ifversion ghec %}` opens but never closes. Append `{% endif %}`.
    content = content.replaceAll(
      '{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %} または {% data variables.enterprise.data_residency_site %} で、{% data variables.product.prodname_emus %} の Okta を構成する方法を説明します。',
      '{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %} または {% data variables.enterprise.data_residency_site %} で、{% data variables.product.prodname_emus %} の Okta を構成する方法を説明します。{% endif %}',
    )

    // admin/managing-iam/provisioning-user-accounts-with-scim/index.md
    // (title, shortTitle, intro): all three fields have endif/else/elsif/ifversion
    // tags reordered so they don't parse. Replace each with a clean version.
    content = content.replaceAll(
      'SCIM{% endif %} を使用したエンタープライズ マネージド ユーザー{% else %} 向けのプロビジョニング アカウント{% ifversion ghec %}',
      '{% ifversion ghec %} SCIM を使用したエンタープライズ マネージド ユーザー{% else %} SCIM 向けのプロビジョニング アカウント{% endif %}',
    )
    content = content.replaceAll(
      'SCIM{% endif %} を使用して{% ifversion ghec %} マネージド ユーザー アカウント{% else %} アカウントをプロビジョニングする',
      '{% ifversion ghec %} SCIM を使用して マネージド ユーザー アカウント{% else %} SCIM アカウントをプロビジョニングする{% endif %}',
    )
    content = content.replaceAll(
      '{% data variables.location.product_location %}{% endif %} の {% data variables.enterprise.prodname_emu_enterprise %}{% elsif ghes %} のユーザー{% ifversion ghec %} に対してアカウントをプロビジョニングし、組織とチームのメンバーシップを管理する方法について説明します。',
      '{% ifversion ghec %} {% data variables.enterprise.prodname_emu_enterprise %}{% elsif ghes %} {% data variables.location.product_location %} のユーザー{% endif %} に対してアカウントをプロビジョニングし、組織とチームのメンバーシップを管理する方法について説明します。',
    )

    // admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users.md
    // (title): tags reordered. Rewrite to a clean structure.
    content = content.replaceAll(
      'ユーザー{% endif %} を管理するためのエンタープライズ マネージド ユーザー{% else %} の SCIM プロビジョニング {% ifversion ghec %} の構成',
      '{% ifversion ghec %} エンタープライズ マネージド ユーザー{% else %} ユーザー{% endif %} を管理するための SCIM プロビジョニングの構成',
    )

    // code-security/.../configuring-code-scanning-for-your-appliance.md (intro):
    // `{% ifversion default-setup-self-hosted-runners-GHEC %}` opens but never
    // closes within the field. Append a closing `{% endif %}`.
    content = content.replaceAll(
      '{% data variables.product.prodname_dotcom %} ホステッド ランナー{% ifversion default-setup-self-hosted-runners-GHEC %}なしのエンタープライズに対して {% data variables.product.prodname_code_scanning %} を有効化、構成、および無効化できます。 {% data variables.product.prodname_code_scanning_caps %} を使用すると、コードの脆弱性やエラーをスキャンできます。',
      '{% data variables.product.prodname_dotcom %} ホステッド ランナー{% ifversion default-setup-self-hosted-runners-GHEC %}なしのエンタープライズに対して{% endif %} {% data variables.product.prodname_code_scanning %} を有効化、構成、および無効化できます。 {% data variables.product.prodname_code_scanning_caps %} を使用すると、コードの脆弱性やエラーをスキャンできます。',
    )
  }

  if (context.code === 'pt') {
    // `{%–` — en-dash (U+2013) used instead of hyphen in `{%-` trim modifier
    content = content.replaceAll('{%–', '{%-')

    content = content.replaceAll('{% dados variables', '{% data variables')
    content = content.replaceAll('{% de dados variables', '{% data variables')
    content = content.replaceAll('{% dados reusables', '{% data reusables')
    // `{% dadosvariables` / `{% datavariables` — no space between "dados"/"data" and "variables"
    content = content.replaceAll('{% dadosvariables', '{% data variables')
    content = content.replaceAll('{%- dadosvariables', '{%- data variables')
    content = content.replaceAll('{% datavariables', '{% data variables')
    content = content.replaceAll('{%- datavariables', '{%- data variables')
    // No space between `{%` and `datavariables` (translator dropped both spaces)
    content = content.replaceAll('{%datavariables', '{% data variables')
    content = content.replaceAll('{%-datavariables', '{%- data variables')
    // `{% data variables.product. prodname_X %}` — stray space inside the dotted
    // path, just after `.product.`. Liquid tokenizes the path as a single ident,
    // so the extra space breaks the lookup. Restore.
    content = content.replace(
      /\{%(-?)\s*data\s+variables\.product\.\s+(prodname_[A-Za-z0-9_]+)/g,
      '{%$1 data variables.product.$2',
    )
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
    content = content.replaceAll('{%- senão %}', '{%- else %}')
    content = content.replaceAll('{% mais %}', '{% else %}')
    content = content.replaceAll('{%- mais %}', '{%- else %}')
    content = content.replaceAll('{% se ', '{% if ')
    content = content.replaceAll('{% atribuir ', '{% assign ')
    content = content.replaceAll('{% %} bruto', '{% raw %}')
    content = content.replaceAll('{% %de dados reusables.', '{% data reusables.')
    content = content.replaceAll('{% %de dados variables.', '{% data variables.')
    content = content.replaceAll('{% %móvel }', '{% mobile %}')
    // `{% variáveis de dados.` — reversed word order for "data variables" in Portuguese
    content = content.replaceAll('{% variáveis de dados.', '{% data variables.')
    content = content.replaceAll('{% variáveis de dados ', '{% data variables ')
    // `{% dados variáveis.` — alternate word order "data variables"
    content = content.replaceAll('{% dados variáveis.', '{% data variables.')
    // `{% janelas %}` — Portuguese "windows" = windows (platform tag)
    content = content.replaceAll('{% janelas %}', '{% windows %}')
    content = content.replaceAll('{%- janelas %}', '{%- windows %}')
    // `{% observação %}` — Portuguese "note" = note
    content = content.replaceAll('{% observação %}', '{% note %}')
    content = content.replaceAll('{%- observação %}', '{%- note %}')
    // `{% comentário %}` — Portuguese "comment" = comment
    content = content.replaceAll('{% comentário %}', '{% comment %}')
    content = content.replaceAll('{%- comentário %}', '{%- comment %}')
    // `{% nota de fim %}` — Portuguese "end note" = endnote
    content = content.replaceAll('{% nota de fim %}', '{% endnote %}')
    content = content.replaceAll('{%- nota de fim %}', '{%- endnote %}')
    // `{% Dados variables` — capitalized "Dados"
    content = content.replaceAll('{% Dados variables', '{% data variables')
    content = content.replaceAll('{%- Dados variables', '{%- data variables')
    // Catch "ou" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?ou [^%]*?%\}/g, (match) => {
      return match.replace(/ ou /g, ' or ')
    })
    // Fully translated reusable path in audit log article:
    // `{% dados agrupados por categoria.complemento.audit_log.reference-grouped-by-category %}`
    content = content.replaceAll(
      '{% dados agrupados por categoria.complemento.audit_log.reference-grouped-by-category %}',
      '{% data reusables.audit_log.reference-grouped-by-category %}',
    )
    // Portuguese decimal comma in version numbers inside ifversion/elsif tags: `3,16` → `3.16`
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?%\}/g, (match) => {
      return match.replace(/(\d),(\d)/g, '$1.$2')
    })
    // `{% para X em Y %}` — Portuguese "for X in Y"
    content = content.replace(/\{%-? para (\w+) em /g, (match) => {
      return match.replace(/para (\w+) em /, 'for $1 in ')
    })
    // `{% reutilizáveis.X.Y %}` — translated reusables path with no `data` prefix
    content = content.replaceAll('{% reutilizáveis.', '{% data reusables.')
    content = content.replaceAll('{%- reutilizáveis.', '{%- data reusables.')
    // `{% dados reusáveis.X.Y %}` — alternate Portuguese spelling for "reusables"
    content = content.replaceAll('{% dados reusáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dados reusáveis.', '{%- data reusables.')
    // `{% reusáveis.X.Y %}` — alternate without `data` prefix
    content = content.replaceAll('{% reusáveis.', '{% data reusables.')
    content = content.replaceAll('{%- reusáveis.', '{%- data reusables.')
    // `{% dados.reutilizáveis.X.Y %}` — translator used `.` instead of space between
    // "dados" (data) and "reutilizáveis" (reusables)
    content = content.replaceAll('{% dados.reutilizáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dados.reutilizáveis.', '{%- data reusables.')
    // `{% dados.reusáveis.` — same with alternate spelling
    content = content.replaceAll('{% dados.reusáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dados.reusáveis.', '{%- data reusables.')
    // `{% de data X` — translator inserted Portuguese preposition "de" (of/from)
    // before `data variables` / `data reusables`
    content = content.replaceAll('{% de data variables', '{% data variables')
    content = content.replaceAll('{%- de data variables', '{%- data variables')
    content = content.replaceAll('{% de data reusables', '{% data reusables')
    content = content.replaceAll('{%- de data reusables', '{%- data reusables')
    content = content.replaceAll('{% de dados reusables', '{% data reusables')
    // `{% datavariables` — no space between "data" and "variables" (sometimes survives)
    content = content.replaceAll('{% datavariables', '{% data variables')
    content = content.replaceAll('{%- datavariables', '{%- data variables')
    // `{% datas variables` / `{% datas reusables` — plural Portuguese form of "data"
    content = content.replaceAll('{% datas variables', '{% data variables')
    content = content.replaceAll('{%- datas variables', '{%- data variables')
    content = content.replaceAll('{% datas reusables', '{% data reusables')
    content = content.replaceAll('{%- datas reusables', '{%- data reusables')
    // Word-order swap inside ifversion: `{% ghes ifversion %}` → `{% ifversion ghes %}`
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes)\s+ifversion\s*%\}/g,
      '{%$1 ifversion $2 %}',
    )
    // With extra "de" word: `{% ghes de ifversion %}` → `{% ifversion ghes %}`
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes)\s+de\s+ifversion\s*%\}/g,
      '{%$1 ifversion $2 %}',
    )
    // Mangled order: `{% %} de ghec ifversion` → `{% ifversion ghec %}`
    content = content.replaceAll('{% %} de ghec ifversion', '{% ifversion ghec %}')
    content = content.replaceAll('{% %} de ghes ifversion', '{% ifversion ghes %}')
    content = content.replaceAll('{% %} de fpt ifversion', '{% ifversion fpt %}')
    // `{% referência_dados_indentados ` — Portuguese translation of `indented_data_reference`
    content = content.replaceAll('{% referência_dados_indentados ', '{% indented_data_reference ')
    content = content.replaceAll('{%- referência_dados_indentados ', '{%- indented_data_reference ')
    // Broad fallback: any remaining `{% dados ` / `{% Dados ` → `{% data `
    content = content.replace(/\{%(-?)\s*[Dd]ados\s+/g, '{%$1 data ')
    // After broad fallback, translated path segments may remain. Catch the most common.
    content = content.replace(/\{%(-?\s*)data reutilizáveis\./g, '{%$1data reusables.')
    content = content.replace(/\{%(-?\s*)data variáveis\./g, '{%$1data variables.')
    // `{% reutilizáveis.` / `{% variáveis.` (no `data` prefix) → add data
    content = content.replace(/\{%(-?\s*)reutilizáveis\./g, '{%$1data reusables.')
    content = content.replace(/\{%(-?\s*)variáveis\./g, '{%$1data variables.')
    // Portuguese `ou` = "or" / `e` = "and" inside ifversion/elsif/if tags
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sou\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sou\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\se\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\se\s/g, ' and '),
    )
    // `{% senão %}` / `{% Senão %}` — Portuguese "else"
    content = content.replaceAll('{% senão %}', '{% else %}')
    content = content.replaceAll('{%- senão %}', '{%- else %}')
    content = content.replaceAll('{% Senão %}', '{% else %}')
    content = content.replaceAll('{% senao %}', '{% else %}')
    content = content.replaceAll('{%- senao %}', '{%- else %}')
    // `{% senão se ` / `{% senao se ` — "else if" = elsif
    content = content.replaceAll('{% senão se ', '{% elsif ')
    content = content.replaceAll('{%- senão se ', '{%- elsif ')
    content = content.replaceAll('{% senao se ', '{% elsif ')
    // `{% caso contrário %}` — alternate "otherwise" = else
    content = content.replaceAll('{% caso contrário %}', '{% else %}')
    content = content.replaceAll('{%- caso contrário %}', '{%- else %}')
    // `{% observação %}` — "note" = note
    content = content.replaceAll('{% observação %}', '{% note %}')
    content = content.replaceAll('{%- observação %}', '{%- note %}')
    // `{% modelo %}` / `{% modelo` — `template` (alias for `tool`)? Actually "modelo"
    // appears as `{% modelo %}` orphaned. Drop unmatched bare `{% modelo %}` is
    // risky; instead, leave as-is (Liquid will raise but rare).

    // Per-file targeted fixes for translator-scrambled Liquid that we can't
    // catch via generic patterns. These are scoped tightly to the originating
    // file so they're a no-op everywhere else, and they touch only the
    // already-broken Liquid fragments — translated prose is preserved.
    //
    // [SCRAPE-6548] migrating-between-github-products: intro had a stray space
    // inside `{% data variables.product. prodname_ghe_cloud %}`. The generic
    // pt regex above already restored it, but here we only need to confirm —
    // no extra per-file replacement required.
  }

  if (context.code === 'zh') {
    content = content.replaceAll('{% 数据variables', '{% data variables')
    content = content.replaceAll('{% 数据 variables', '{% data variables')
    // `{%数据variables` — no space between `{%` and 数据 (data)
    content = content.replaceAll('{%数据variables', '{% data variables')
    content = content.replaceAll('{%数据 variables', '{% data variables')
    // Order matters: the more specific `s.` variant must run first to
    // avoid the broader rule producing a double-s (`reusabless`).
    content = content.replaceAll('{% 数据可重用s.', '{% data reusables.')
    content = content.replaceAll('{% 数据可重用', '{% data reusables')
    content = content.replaceAll('{% 其他 %}', '{% else %}')
    content = content.replaceAll('{%- 其他 %}', '{%- else %}')
    content = content.replaceAll('{% 原始 %}', '{% raw %}')
    content = content.replaceAll('{%- 原始 %}', '{%- raw %}')
    // `{% 否则 %}` — "otherwise" = else (different Chinese word than 其他)
    content = content.replaceAll('{% 否则 %}', '{% else %}')
    content = content.replaceAll('{%- 否则 %}', '{%- else %}')
    // Chinese `如果` = "if": `{ 如果 X %}` → `{% if X %}`
    content = content.replace(/\{ 如果 /g, '{% if ')
    // Stray Chinese `，则为` ("then") merged with `{%` before HTML: `，则为 {%<tag>` → `<tag>`
    // The regex consumes the `<` to avoid producing a double `<<`.
    content = content.replace(/，则为 \{%</g, '<')
    // Catch "或" / "和" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?或[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*或\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?和[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*和\s*/g, ' and '),
    )
    // `{% 行标题 %}` — "row headers" = rowheaders
    content = content.replaceAll('{% 行标题 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行标题 %}', '{%- rowheaders %}')
    // `{% 数据变量.` — "data variables" = data variables (with space before)
    content = content.replaceAll('{% 数据变量.', '{% data variables.')
    // `{%数据变量.` — same but no space between `{%` and 数据变量 (e.g. `{%数据变量.enterprise.management_console%}`)
    content = content.replaceAll('{%数据变量.', '{% data variables.')
    content = content.replaceAll('{%-数据变量.', '{%- data variables.')
    // `{% Windows 操作系统 %}` — "Windows OS" = windows platform tag
    content = content.replaceAll('{% Windows 操作系统 %}', '{% windows %}')
    content = content.replaceAll('{%- Windows 操作系统 %}', '{%- windows %}')
    // `{% Windows终端 %}` — "Windows terminal" = windows platform tag
    content = content.replaceAll('{% Windows终端 %}', '{% windows %}')
    // `{% 桌面 %}` — Chinese "desktop" = desktop platform tag
    content = content.replaceAll('{% 桌面 %}', '{% desktop %}')
    content = content.replaceAll('{%- 桌面 %}', '{%- desktop %}')
    // `{% 行标头 %}` / `{% 行标题 %}` — alternate Chinese for "row headers"
    content = content.replaceAll('{% 行标头 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行标头 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 行标题 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行标题 %}', '{%- rowheaders %}')
    // `{% 结束行标题 %}` / `{% 结束行标头 %}` / `{% 结束行头 %}` — endrowheaders
    content = content.replaceAll('{% 结束行标题 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束行标题 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% 结束行标头 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束行标头 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% 结束行头 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束行头 %}', '{%- endrowheaders %}')
    // `{% 行标题结束 %}` — order swap (rowheaders + end)
    content = content.replaceAll('{% 行标题结束 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 行标题结束 %}', '{%- endrowheaders %}')
    // Capitalized `{% Variables.X %}` / `{% Reusables.X %}` — translator title-cased
    content = content.replaceAll('{% data Variables.', '{% data variables.')
    content = content.replaceAll('{% data Reusables.', '{% data reusables.')
    content = content.replaceAll('{%- data Variables.', '{%- data variables.')
    content = content.replaceAll('{%- data Reusables.', '{%- data reusables.')
    // `{% 否则如果 ` — "otherwise if" = elsif
    content = content.replaceAll('{% 否则如果 ', '{% elsif ')
    content = content.replaceAll('{%- 否则如果 ', '{%- elsif ')
    // `{% 结束 %}` / `{% 结尾 %}` — Chinese "end" = endif
    content = content.replaceAll('{% 结束 %}', '{% endif %}')
    content = content.replaceAll('{%- 结束 %}', '{%- endif %}')
    content = content.replaceAll('{% 结尾 %}', '{% endif %}')
    content = content.replaceAll('{%- 结尾 %}', '{%- endif %}')
    // `{% 结束for %}` — end + for
    content = content.replaceAll('{% 结束for %}', '{% endfor %}')
    content = content.replaceAll('{%- 结束for %}', '{%- endfor %}')
    // `{% 结束if %}` / `{% endif的话 %}` — endif variants
    content = content.replaceAll('{% 结束if %}', '{% endif %}')
    content = content.replaceAll('{%- 结束if %}', '{%- endif %}')
    // Broad fallback: any remaining `{% 数据 ` → `{% data `
    content = content.replace(/\{%(-?)\s*数据\s+/g, '{%$1 data ')
    // `{% indented_data_reference 可重用|可复用|可重用项|可重用组件|可复用项.X.Y spaces=N %}`
    // — translator converted the `reusables` path prefix into Chinese. Collapse
    // any `可(重|复)用[项|组件|s]?.` prefix into `reusables.`.
    content = content.replace(
      /(\{%-?\s*indented_data_reference\s+)可(?:重|复)用(?:项|组件|s)?\./g,
      '$1reusables.',
    )

    // [SCRAPE-6548] Per-file fixes for zh pages whose Liquid was structurally
    // scrambled. Each replacement uses the unique broken substring as a
    // discriminator so it only fires for the right field of the right file.

    // account-and-profile/concepts/username-changes.md (intro): orphan
    // `{% endif %}` and `{% ifversion ghes %}` swapped — drop both.
    content = content.replaceAll(
      '如果实例使用内置身份验证{% endif %}，则可以更改 {% data variables.product.github %} 帐户 {% ifversion ghes %} 的用户名。',
      '可以更改 {% data variables.product.github %} 帐户的用户名。{% ifversion ghes %} 如果实例使用内置身份验证。{% endif %}',
    )

    // admin/managing-iam/using-saml-for-enterprise-iam/index.md (intro):
    // three `{% ifversion %}` opens against one `{% endif %}`. Rebalance.
    content = content.replaceAll(
      '可以通过 SAML 单点登录 (SSO){% ifversion ghec %}和跨域身份管理系统 (SCIM){% endif %} 集中管理 {% ifversion ghes %} 帐户以及对 {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghec %}你的企业资源{% endif %}的访问权限。',
      '可以通过 SAML 单点登录 (SSO){% ifversion ghec %}和跨域身份管理系统 (SCIM){% endif %} 集中管理帐户以及对 {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghec %}你的企业资源{% endif %}的访问权限。',
    )

    // code-security/.../configuring-access-to-private-registries-for-dependabot.md
    // (intro): `{% ifversion dependabot-on-actions-self-hosted %}` opens but
    // never closes. Append `{% endif %}`.
    content = content.replaceAll(
      '可以将身份验证信息（如密码和访问令牌）存储为加密机密，然后在配置文件中 {% data variables.product.prodname_dependabot %} 引用这些信息。{% ifversion dependabot-on-actions-self-hosted %} 如果您在专用网络上有注册表，您也可以在使用自托管运行程序执行{% data variables.product.prodname_dependabot %}时配置{% data variables.product.prodname_dependabot %}访问权限。',
      '可以将身份验证信息（如密码和访问令牌）存储为加密机密，然后在配置文件中 {% data variables.product.prodname_dependabot %} 引用这些信息。{% ifversion dependabot-on-actions-self-hosted %} 如果您在专用网络上有注册表，您也可以在使用自托管运行程序执行{% data variables.product.prodname_dependabot %}时配置{% data variables.product.prodname_dependabot %}访问权限。{% endif %}',
    )

    // authentication/keeping-your-account-and-data-secure/security-log-events.md
    // (markdown body line 15): the `> *` bullet has a duplicate
    // `{% ifversion ghes %}` after the outer `{% ifversion ghes %}` block
    // already opened on the previous line. Drop the inner duplicate so the
    // outer endif balances correctly.
    content = content.replaceAll('> * {% ifversion ghes %} 本文包含', '> * 本文包含')
  }

  if (context.code === 'ru') {
    content = content.replaceAll('[«AUTOTITLE»](', '[AUTOTITLE](')
    content = content.replaceAll('[АВТОЗАГОЛОВОК](', '[AUTOTITLE](')
    // `[{% autoTITLE](url)` — Liquid-embedded lowercase autotitle (translator lowercased
    // the link anchor and wrapped it in Liquid tag syntax instead of plain `[AUTOTITLE](url)`)
    content = content.replaceAll('[{% autoTITLE](', '[AUTOTITLE](')
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
    content = content.replaceAll('{%- необработанного %}', '{%- raw %}')
    content = content.replaceAll('{%- ifversion fpt или ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt или ghec %}', '{% ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion ghec или fpt %}', '{% ifversion ghec or fpt %}')
    content = content.replaceAll('{% ghes или ghec %}', '{% ifversion ghes or ghec %}')
    content = content.replaceAll('{% elsif ghec или ghes %}', '{% elsif ghec or ghes %}')
    // Catch remaining "или" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?или[^%]*?%\}/g, (match) => {
      return match.replace(/ или /g, ' or ')
    })
    // Russian decimal comma in version numbers inside ifversion/elsif tags: `3,18` → `3.18`
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?%\}/g, (match) => {
      return match.replace(/(\d),(\d)/g, '$1.$2')
    })
    content = content.replaceAll('{% конечным %}', '{% endif %}')
    content = content.replaceAll('{%- конечным %}', '{%- endif %}')
    // `{%- конец %}` — dash-trimmed form of "end" = endif
    content = content.replaceAll('{%- конец %}', '{%- endif %}')
    // `{%- конец для %}` — "end for" = endfor
    content = content.replaceAll('{%- конец для %}', '{%- endfor %}')
    // `{% заголовки строк %}` — "row headers" = rowheaders (opener; `{% endrowheaders %}` stays in English)
    content = content.replaceAll('{% заголовки строк %}', '{% rowheaders %}')
    content = content.replaceAll('{%- заголовки строк %}', '{%- rowheaders %}')
    // `{% windowsTerminal %}` — "Windows Terminal" platform tag with capital T
    // (the correct tag name is lowercase `{% windowsterminal %}`)
    content = content.replaceAll('{% windowsTerminal %}', '{% windowsterminal %}')
    content = content.replaceAll('{%- windowsTerminal %}', '{%- windowsterminal %}')
    // `{%- командная палитра ifversion %}` — "command palette ifversion" with word order swapped
    // Russian "командная палитра" (command palette) was placed before "ifversion" and the
    // feature-flag arg was dropped. Recover as `{%- ifversion command-palette %}`.
    content = content.replace(
      /\{%(-?)\s*командная\s+палитра\s+ifversion\s*(-?)%\}/g,
      '{%$1 ifversion command-palette $2%}',
    )
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
    content = content.replaceAll('{%- Эльсиф %}', '{%- else %}')
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
    content = content.replaceAll('{%- примечание %}', '{%- note %}')
    content = content.replaceAll('{% конечных головщиков %}', '{% endrowheaders %}')
    content = content.replaceAll('{% данных для повторного использования.', '{% data reusables.')
    // `{% indented_data_reference повторн... .X.Y spaces=N %}` — translator
    // converted the `reusables` path prefix into Russian (with spaces inside),
    // which breaks the indented_data_reference parser. Collapse any
    // `повторн[...]<word>[ <word>]*.` prefix into `reusables.`.
    content = content.replace(
      /(\{%-?\s*indented_data_reference\s+)повторн[а-яё]*(?:\s+[а-яё]+)*\./g,
      '$1reusables.',
    )
    content = content.replaceAll('{% еще %}', '{% else %}')
    content = content.replaceAll('{%- еще %}', '{%- else %}')
    content = content.replaceAll('{% ещё %}', '{% else %}')
    content = content.replaceAll('{%- ещё %}', '{%- else %}')
    // `{% иначе %}` — "otherwise" = else
    content = content.replaceAll('{% иначе %}', '{% else %}')
    content = content.replaceAll('{%- иначе %}', '{%- else %}')
    content = content.replaceAll('{% необработанные %}', '{% raw %}')
    content = content.replaceAll('{%- необработанные %}', '{%- raw %}')
    content = content.replaceAll('{% необработанный %}', '{% raw %}')
    content = content.replaceAll('{%- необработанный %}', '{%- raw %}')
    content = content.replaceAll('{% сырой %}', '{% raw %}')
    content = content.replaceAll('{%- сырой %}', '{%- raw %}')
    content = content.replaceAll('{% нарисовать %}', '{% endraw %}')
    content = content.replaceAll('{%- нарисовать %}', '{%- endraw %}')
    content = content.replaceAll('{% эндкёрл %}', '{% endcurl %}')
    content = content.replaceAll('{%- эндкёрл %}', '{%- endcurl %}')
    content = content.replaceAll('{% запроса %}', '{% endraw %}')
    content = content.replaceAll('{%- запроса %}', '{%- endraw %}')
    // `{% джетмозги %}` — Russian literal translation of "JetBrains" (джет=jet, мозги=brains)
    content = content.replaceAll('{% джетмозги %}', '{% jetbrains %}')
    content = content.replaceAll('{%- джетмозги %}', '{%- jetbrains %}')

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
    // `{% Эльсиф CONDITION %}` — transliteration of "elsif" with a condition
    content = content.replace(/\{%(-?)\s*Эльсиф\s+/g, '{%$1 elsif ')
    // `{% для X в Y %}` — Russian "for X in Y"
    content = content.replace(/\{%-?\s*для\s+(\w+)\s+в\s+/g, (match) => {
      const dash = match.startsWith('{%-') ? '{%-' : '{%'
      return match.replace(/^\{%-?\s*для\s+(\w+)\s+в\s+/, `${dash} for $1 in `)
    })
    // `, а не ghes` — Russian "and not ghes" inside ifversion expressions
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?, а не [^%]*?%\}/g, (match) => {
      return match.replace(/, а не /g, ' and not ')
    })
    // `{% ifversion ghes не ` — `не` ("not") inside ifversion
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\sне\s[^%]*?%\}/g, (match) => {
      return match.replace(/ не /g, ' not ')
    })
    // `aria-label="autoTITLE"` — "AUTOTITLE" was lowercased by translator
    content = content.replaceAll('aria-label="autoTITLE"', 'aria-label="AUTOTITLE"')
    // `{% эндраw %}` / `{% эндраw -%}` — transliterated endraw
    content = content.replaceAll('{% эндраw %}', '{% endraw %}')
    content = content.replaceAll('{%- эндраw %}', '{%- endraw %}')
    content = content.replaceAll('{% эндраw -%}', '{% endraw -%}')
    // `{% эндесктоп %}` — transliterated enddesktop
    content = content.replaceAll('{% эндесктоп %}', '{% enddesktop %}')
    content = content.replaceAll('{%- эндесктоп %}', '{%- enddesktop %}')
    // `{% эндекклипс %}` / `{% эндеклипс %}` — transliterated endeclipse
    content = content.replaceAll('{% эндеклипс %}', '{% endeclipse %}')
    content = content.replaceAll('{%- эндеклипс %}', '{%- endeclipse %}')
    content = content.replaceAll('{% эндекклипс %}', '{% endeclipse %}')
    // `{% endекклипс %}` — partial transliteration
    content = content.replaceAll('{% endекклипс %}', '{% endeclipse %}')
    // `{%- лицензия %}` — Russian "license"... actually this is a feature flag value, not a tag
    // Translator-formatted "Russian smart quotes" inside Liquid tags: «X» → "X"
    content = content.replace(/(\{%-?\s*[a-z]+\s+)«([^»]*)»/g, '$1"$2"')
    // `{% ifversion fpt or ghec or ghes >NUMBER %}` — when range value is wrapped in
    // Cyrillic chars or letter "о" instead of "0", normalize digits
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?[<>=][^%]*?%\}/g, (match) => {
      // Cyrillic 'о' (U+043E) often replaces ASCII '0' (U+0030)
      return match.replace(/(\d)\s*о/g, '$10').replace(/о\s*(\d)/g, '0$1')
    })

    // Word-order swap: translator placed plan name BEFORE `ifversion`, e.g.
    // `{% ghes ifversion %}` → `{% ifversion ghes %}`,
    // `{% ghes ifversion < 3,14 %}` → `{% ifversion ghes < 3.14 %}`
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+ifversion\s*([^%]*?)\s*-?%\}/g,
      (_m, dash, plan, rest) => {
        const fixedRest = rest.replace(/(\d),(\d)/g, '$1.$2')
        const trimmed = fixedRest.trim()
        return `{%${dash} ifversion ${plan}${trimmed ? ` ${trimmed}` : ''} %}`
      },
    )
    // Missing `ifversion` prefix: `{% ghes или ghec %}` → `{% ifversion ghes or ghec %}`
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+или\s+(fpt|ghec|ghes|ghae|ghecom)\s*-?%\}/g,
      '{%$1 ifversion $2 or $3 %}',
    )
    // Same pattern with "and" / "и"
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+и\s+(fpt|ghec|ghes|ghae|ghecom)\s*-?%\}/g,
      '{%$1 ifversion $2 and $3 %}',
    )
    // `{% ghes version %}` (translator dropped `ifversion`, added "version")
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+version\s*-?%\}/g,
      '{%$1 ifversion $2 %}',
    )

    // Russian "остальных" / "иначе" / "ещё" / "иначе если" → else / elsif
    content = content.replaceAll('{% остальных %}', '{% else %}')
    content = content.replaceAll('{%- остальных %}', '{%- else %}')
    content = content.replaceAll('{% иначе %}', '{% else %}')
    content = content.replaceAll('{%- иначе %}', '{%- else %}')
    content = content.replaceAll('{% ещё %}', '{% else %}')
    content = content.replaceAll('{%- ещё %}', '{%- else %}')
    content = content.replace(/\{%(-?)\s*иначе если\s+/g, '{%$1 elsif ')
    // Russian `или` = "or", `и` = "and" inside ifversion/elsif/if tags
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?или[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*или\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sи\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sи\s/g, ' and '),
    )

    // [SCRAPE-6548] Per-file fixes for ru pages whose Liquid was structurally
    // scrambled. Each replacement is scoped by the unique broken substring.

    // admin/.../viewing-and-managing-a-users-saml-access-to-your-enterprise.md
    // (intro): `{% ghec ghec` is not a valid tag and `{% ifversion %}` lacks
    // an expression. Replace with a clean `{% ifversion ghec %}` ... `{% else %}`
    // ... `{% endif %}` structure that matches the English source.
    content = content.replaceAll(
      'Вы можете просмотреть и отозвать {% ghec ghec для участников предприятия {% ifversion %}linked identity, активные сеансы и авторизованные учетные данные{%else %}активные сеансы SAML{% endif %}.',
      'Вы можете просмотреть и отозвать {% ifversion ghec %}связанные удостоверения, активные сеансы и авторизованные учетные данные участников предприятия{% else %}активные сеансы SAML{% endif %}.',
    )

    // organizations/.../permissions-of-custom-organization-roles.md (intro):
    // `{% ifversion org-custom-role-with-repo-permissions %}` opens with an
    // `{% else %}` branch but never closes. Append `{% endif %}`.
    content = content.replaceAll(
      'Вы можете управлять доступом к параметрам и репозиториям организации {% ifversion org-custom-role-with-repo-permissions %}, а также к параметрам организации {% else %}организации с пользовательскими ролями организации.',
      'Вы можете управлять доступом к параметрам и репозиториям организации {% ifversion org-custom-role-with-repo-permissions %}, а также к параметрам организации {% else %}организации с пользовательскими ролями организации.{% endif %}',
    )

    // packages/.../migrating-to-the-container-registry-from-the-docker-registry.md
    // (intro): after the existing ru Cat A keyword fixes promote `данных`/
    // `переменных данных` to `data variables`, this intro is left with an
    // open `{% ifversion ghes %}` ... `{% else %}` and no `{% endif %}`.
    // Append it.
    content = content.replaceAll(
      '{% ifversion ghes %}Владелец предприятия может{%else %}{% data variables.product.company_short %} перенести образы Docker, ранее хранящиеся в реестре Docker на {% data variables.product.github %} на {% data variables.product.prodname_container_registry %}.',
      '{% ifversion ghes %}Владелец предприятия может{% else %}{% data variables.product.company_short %} может{% endif %} перенести образы Docker, ранее хранящиеся в реестре Docker на {% data variables.product.github %} на {% data variables.product.prodname_container_registry %}.',
    )

    // [SCRAPE-6572] Per-file fix:
    // repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors.md
    // (intro): translator swapped `{% endif %}` and `{% ifversion fpt or ghec %}`,
    // leaving an orphan `endif` at the start of the intro and the `ifversion`
    // unclosed. This broke the `/ru/repositories` landing page scrape since
    // this page is one of its children. Restore correct ordering.
    content = content.replaceAll(
      'Вы можете увидеть, кто внес{% endif %} коммиты в репозиторий{% ifversion fpt or ghec %} и его зависимости.',
      'Вы можете увидеть, кто внес коммиты в репозиторий{% ifversion fpt or ghec %} и его зависимости{% endif %}.',
    )
  }

  if (context.code === 'fr') {
    // `{% sinon %}` — "otherwise" = else
    content = content.replaceAll('{% sinon %}', '{% else %}')
    content = content.replaceAll('{%- sinon %}', '{%- else %}')
    // `{% référentiel ifversion ` — translator inserted "référentiel" (repository) before ifversion
    content = content.replaceAll('{% référentiel ifversion ', '{% ifversion ')
    content = content.replaceAll('{%- référentiel ifversion ', '{%- ifversion ')
    // Standalone `{% référentiel %}` / `{% paramètres %}` / `{% product %}` are stray
    // translation residue with no Liquid meaning — strip them.
    content = content.replace(/\{%-?\s*référentiel\s*-?%\}/g, '')
    content = content.replace(/\{%-?\s*paramètres\s*-?%\}/g, '')
    content = content.replace(/\{%-?\s*product\s*-?%\}/g, '')
    // `{% données.variables.X %}` — translator used `.` instead of space after "données"
    content = content.replace(
      /\{%(-?)\s*données\.(variables|reusables)\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
      '{%$1 data $2.$3$4',
    )
    content = content.replaceAll('{% données variables', '{% data variables')
    content = content.replaceAll('{% données réutilisables.', '{% data reusables.')
    content = content.replaceAll('{% variables de données.', '{% data variables.')
    // `{% de données variables.` — preposition "de" prepended to "données variables"
    content = content.replaceAll('{% de données variables.', '{% data variables.')
    content = content.replaceAll('{%- de données variables.', '{%- data variables.')
    // `{% de data variables.` — partially-corrected form (données already fixed to data)
    content = content.replaceAll('{% de data variables.', '{% data variables.')
    content = content.replaceAll('{%- de data variables.', '{%- data variables.')
    content = content.replaceAll('{% autre %}', '{% else %}')
    content = content.replaceAll('{%- autre %}', '{%- else %}')
    content = content.replaceAll('{% brut %}', '{% raw %}')
    content = content.replaceAll('{%- brut %}', '{%- raw %}')
    content = content.replaceAll('{% %brut }', '{% raw %}')
    content = content.replaceAll('{% redessiner %}', '{% endraw %}')
    content = content.replaceAll('{%- redessiner %}', '{%- endraw %}')
    content = content.replaceAll('{% données ', '{% data ')
    // `{% Données ` — capitalized form
    content = content.replaceAll('{% Données variables', '{% data variables')
    content = content.replaceAll('{% Données réutilisables.', '{% data reusables.')
    // Catch remaining "ou" between any plan names in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?ou [^%]*?%\}/g, (match) => {
      return match.replace(/ ou /g, ' or ')
    })
    // French "et" for "and" in ifversion/elsif/if tags
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\bet\b[^%]*?%\}/g, (match) => {
      return match.replace(/ et /g, ' and ')
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
    // `{% note de fin %}` / `{%- note de fin %}` — "end note" = endnote
    content = content.replaceAll('{% note de fin %}', '{% endnote %}')
    content = content.replaceAll('{%- note de fin %}', '{%- endnote %}')
    // `{% éclipse %}` — French accent on "eclipse" platform tag
    content = content.replaceAll('{% éclipse %}', '{% eclipse %}')
    content = content.replaceAll('{%- éclipse %}', '{%- eclipse %}')
    // `{% données_reutilisables.X %}` — underscore form of "données réutilisables" (no accent)
    content = content.replaceAll('{% données_reutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- données_reutilisables.', '{%- data reusables.')
    // `{% données_réutilisables.X %}` — underscore form with accent
    content = content.replaceAll('{% données_réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- données_réutilisables.', '{%- data reusables.')
    // `{% composants réutilisables.X %}` — "composants" = "components" as alias for data reusables
    content = content.replaceAll('{% composants réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- composants réutilisables.', '{%- data reusables.')
    // Fully-translated `{% données réutilisables propriétés-personnalisées valeurs-requises %}`
    // → `{% data reusables.organizations.custom-properties-required-values %}`
    // Note: the generic `{% données ` → `{% data ` fix above may already have transformed
    // `données` to `data`, so we match both the original and the partially-corrected form.
    content = content.replaceAll(
      '{% données réutilisables propriétés-personnalisées valeurs-requises %}',
      '{% data reusables.organizations.custom-properties-required-values %}',
    )
    content = content.replaceAll(
      '{% data réutilisables propriétés-personnalisées valeurs-requises %}',
      '{% data reusables.organizations.custom-properties-required-values %}',
    )
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
    // `{% pour X dans Y %}` — French "for X in Y"
    content = content.replace(/\{%(-?)\s*pour\s+(\w+)\s+dans\s+/g, '{%$1 for $2 in ')
    // `{% pour le modèle dans Y %}` — "for the model in Y" = `for model in Y`
    content = content.replace(/\{%(-?)\s*pour\s+le\s+modèle\s+dans\s+/g, '{%$1 for model in ')
    // `{% pour chaque X dans Y %}` — "for each X in Y" = `for X in Y`
    content = content.replace(/\{%(-?)\s*pour\s+chaque\s+(\w+)\s+dans\s+/g, '{%$1 for $2 in ')
    // `{% des données variables.` — "of the data variables" prefix
    content = content.replaceAll('{% des données variables.', '{% data variables.')
    content = content.replaceAll('{%- des données variables.', '{%- data variables.')
    content = content.replaceAll('{% des data variables.', '{% data variables.')
    content = content.replaceAll('{%- des data variables.', '{%- data variables.')
    // `{% variables de données.` — already handled via line 484
    // `{% assigner X = Y %}` — "to assign" = assign
    content = content.replaceAll('{% assigner ', '{% assign ')
    content = content.replaceAll('{%- assigner ', '{%- assign ')
    // `{% quand "X" %}` — French "when" inside case/when blocks
    content = content.replace(/\{%(-?)\s*quand\s+/g, '{%$1 when ')
    // `{% endcase %}` variants
    content = content.replaceAll('{% fincas %}', '{% endcase %}')
    content = content.replaceAll('{%- fincas %}', '{%- endcase %}')
    // `{% réutilisables.X.Y %}` — translated reusables path with no `data` prefix
    content = content.replaceAll('{% réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- réutilisables.', '{%- data reusables.')
    // Broad fallback: any remaining `{% données ` → `{% data ` (runs LAST so specific
    // path-fixing rules above get first crack).
    content = content.replace(/\{%(-?)\s*données\s+/g, '{%$1 data ')
    // After broad fallback, common translated path segments may remain.
    content = content.replace(/\{%(-?\s*)data réutilisables\./g, '{%$1data reusables.')
    content = content.replace(/\{%(-?\s*)data variables de\./g, '{%$1data variables.')
    // French `ou` = "or", `et` = "and" inside ifversion/elsif/if tags
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sou\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sou\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\set\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\set\s/g, ' and '),
    )

    // [SCRAPE-6548] `{% ifversion ghes}` / `{% elsif ghec or ghes}` — translator
    // dropped the closing `%` before `}`. Same shape as the Spanish fix above.
    // Match plan name (fpt|ghec|ghes|ghae) followed by `}` not `%}`.
    content = content.replace(
      /\{%-?(\s+(?:ifversion|elsif|if)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae)(?:\s+(?:or|and)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae))*)\}/g,
      '{%$1 %}',
    )

    // [SCRAPE-6548] `{% des … variables.X %}` — translator translated `data`
    // to `des` and inserted French prose before `variables.`. Tighten by
    // forbidding `%`, `{`, `}`, `\n` inside the tag, and require `variables.`
    // immediately before the dotted path.
    content = content.replace(
      /\{%(-?)\s*des(?:\s+[^{}%\n]+?)?\s+variables\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
      '{%$1 data variables.$2$3',
    )
  }

  if (context.code === 'ko') {
    // `{% datda variables.` — typo of "data" (d-a-t-d-a instead of d-a-t-a)
    content = content.replaceAll('{% datda variables', '{% data variables')
    content = content.replaceAll('{%- datda variables', '{%- data variables')
    // `{% data를 [Korean] variables.X %}` — Korean object-marker "를" (object case particle)
    // was accidentally appended to "data", and Korean words follow before the path.
    // e.g. `{% data를 탐색하고 수락하기 variables.copilot.next_edit_suggestions %}`
    // Strip the Korean text and restore the correct `{% data variables.X %}` tag.
    content = content.replace(
      /\{%(-?)\s*data를\s+[가-힣\s]+variables\.([A-Za-z0-9._-]+)\s*(-?)%\}/g,
      '{%$1 data variables.$2 $3%}',
    )
    content = content.replaceAll('[AUTOTITLE"을 참조하세요]', '[AUTOTITLE]')
    content = content.replaceAll('{% 데이터 variables', '{% data variables')
    content = content.replaceAll('{% 데이터 reusables.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 변수.', '{% data variables.')
    content = content.replaceAll('{% 데이터 변숫값.', '{% data variables.')
    content = content.replaceAll('{% 기타 %}', '{% else %}')
    content = content.replaceAll('{%- 기타 %}', '{%- else %}')
    content = content.replaceAll('{% 참고 %}', '{% note %}')
    content = content.replaceAll('{%- 참고 %}', '{%- note %}')
    content = content.replaceAll('{% 원시 %}', '{% raw %}')
    content = content.replaceAll('{%- 원시 %}', '{%- raw %}')
    // Translated tag name `{% 들여쓰기_데이터_참조 ... %}` → `{% indented_data_reference ... %}`
    content = content.replaceAll('{% 들여쓰기_데이터_참조 ', '{% indented_data_reference ')
    content = content.replaceAll('{%- 들여쓰기_데이터_참조 ', '{%- indented_data_reference ')
    // `{% 옥티콘 "X" ... %}` → `{% octicon "X" ... %}`
    content = content.replaceAll('{% 옥티콘 ', '{% octicon ')
    content = content.replaceAll('{%- 옥티콘 ', '{%- octicon ')
    // `{% 행 머리글 %}` → `{% rowheaders %}`
    content = content.replaceAll('{% 행 머리글 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 행 머리글 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 행머리글 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 행머리글 %}', '{%- rowheaders %}')
    // `{% 엔드맥 %}` → `{% endmac %}`
    content = content.replaceAll('{% 엔드맥 %}', '{% endmac %}')
    content = content.replaceAll('{%- 엔드맥 %}', '{%- endmac %}')
    // `{% 윈도우즈 %}` / `{% 윈도우 %}` → `{% windows %}`
    content = content.replaceAll('{% 윈도우즈 %}', '{% windows %}')
    content = content.replaceAll('{%- 윈도우즈 %}', '{%- windows %}')
    content = content.replaceAll('{% 윈도우 %}', '{% windows %}')
    content = content.replaceAll('{%- 윈도우 %}', '{%- windows %}')
    // `{% 데이터 재사용 ` (no period) — variant of `{% data reusables`
    content = content.replaceAll('{% 데이터 재사용가능항목.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용 가능 항목.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용 ', '{% data reusables.')
    // `{% indented_data_reference 재사용...` — translated `reusables` path prefix
    content = content.replace(
      /(\{%-?\s*indented_data_reference\s+)재사용(?:\s+가능)?(?:\s+항목)?\./g,
      '$1reusables.',
    )
    // Catch "또는" between any plan names in ifversion/elsif/if tags
    // (handles `fpt 또는 ghec`, `ghes > 3.15`, etc.)
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?또는[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*또는\s*/g, ' or '),
    )
    // Korean "그리고" / "와" / "과" = "and" inside ifversion/elsif/if tags
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?그리고[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*그리고\s*/g, ' and '),
    )
    // `{% 그렇지 않으면 %}` — "otherwise" = else
    content = content.replaceAll('{% 그렇지 않으면 %}', '{% else %}')
    content = content.replaceAll('{%- 그렇지 않으면 %}', '{%- else %}')
    // `{% 옥티콘` — Korean transliteration of "octicon"
    content = content.replaceAll('{% 옥티콘 ', '{% octicon ')
    content = content.replaceAll('{%- 옥티콘 ', '{%- octicon ')

    // `{% data Variables.` — capital V in "Variables" (Korean translator capitalised the word)
    content = content.replaceAll('{% data Variables.', '{% data variables.')
    content = content.replaceAll('{%- data Variables.', '{%- data variables.')

    // Korean translation of github-glossary.md
    content = content.replaceAll('{{ 용어집.term }}', '{{ glossary.term }}')
    // `{% 데이터 재사용.` — Korean translation of "data reusables" path
    content = content.replaceAll('{% 데이터 재사용.', '{% data reusables.')
    // `{% 행 머리글 %}` — "row headers" = rowheaders
    content = content.replaceAll('{% 행 머리글 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 행 머리글 %}', '{%- rowheaders %}')
    // `{% 윈도우즈 %}` — Korean transliteration of "windows"
    content = content.replaceAll('{% 윈도우즈 %}', '{% windows %}')
    content = content.replaceAll('{%- 윈도우즈 %}', '{%- windows %}')
    // `{% 엔드맥 %}` — Korean translation of "endmac" (end + mac)
    content = content.replaceAll('{% 엔드맥 %}', '{% endmac %}')
    content = content.replaceAll('{%- 엔드맥 %}', '{%- endmac %}')
    // `{% 주석 끝 %}` — Korean "주석 끝" (note end) = endnote
    content = content.replaceAll('{% 주석 끝 %}', '{% endnote %}')
    content = content.replaceAll('{%- 주석 끝 %}', '{%- endnote %}')
    // `{% 데이터.X %}` — translator dropped `variables`/`reusables`
    content = content.replaceAll('{% 데이터.variables.', '{% data variables.')
    content = content.replaceAll('{% 데이터.reusables.', '{% data reusables.')
    // `{% 데이터variables` / `{% 데이터reusables` (no space)
    content = content.replaceAll('{% 데이터variables', '{% data variables')
    content = content.replaceAll('{% 데이터reusables', '{% data reusables')
    content = content.replaceAll('{%- 데이터variables', '{%- data variables')
    content = content.replaceAll('{%- 데이터reusables', '{%- data reusables')
    // `{% 재사용 가능 항목.` — Korean for "reusables" with no `data` prefix
    content = content.replaceAll('{% 재사용 가능 항목.', '{% data reusables.')
    content = content.replaceAll('{%- 재사용 가능 항목.', '{%- data reusables.')
    // `{% 재사용 가능.` — alternate
    content = content.replaceAll('{% 재사용 가능.', '{% data reusables.')
    content = content.replaceAll('{%- 재사용 가능.', '{%- data reusables.')
    // `{% 데이터 재사용 가능.` / `{% 데이터 재사용 가능 항목.` — full Korean for "data reusables"
    content = content.replaceAll('{% 데이터 재사용 가능 항목.', '{% data reusables.')
    content = content.replaceAll('{%- 데이터 재사용 가능 항목.', '{%- data reusables.')
    content = content.replaceAll('{% 데이터 재사용 가능.', '{% data reusables.')
    content = content.replaceAll('{%- 데이터 재사용 가능.', '{%- data reusables.')
    // Korean "if" / "elsif" word translations
    // `{% 만약 X %}` / `{% 만일 X %}` — "if" in Korean
    content = content.replace(/\{%-?\s*만약\s+/g, (m) =>
      m.startsWith('{%-') ? '{%- if ' : '{% if ',
    )
    content = content.replace(/\{%-?\s*만일\s+/g, (m) =>
      m.startsWith('{%-') ? '{%- if ' : '{% if ',
    )
    // Korean "for X in Y" → 위해/대해/안에 patterns
    // `{% 위해 X 안에 Y %}` — best-effort for-loop
    content = content.replace(/\{%(-?)\s*위해\s+(\w+)\s+안에\s+/g, '{%$1 for $2 in ')
    // `{% Variable.` (capital V) — variant
    content = content.replaceAll('{% Variable.', '{% data variables.')
    content = content.replaceAll('{%- Variable.', '{%- data variables.')

    // [SCRAPE-6548] Per-file fix:
    // account-and-profile/concepts/username-changes.md (intro): orphan
    // `{% endif %}` and `{% ifversion ghes %}` swapped — the conditional
    // wraps the wrong piece of prose. Rewrite to wrap the
    // "if you use built-in authentication" clause inside the ghes branch.
    content = content.replaceAll(
      '인스턴스에서 기본 제공 인증{% endif %}를 사용하는 경우 {% data variables.product.github %} 계정 {% ifversion ghes %}의 사용자 이름을 변경할 수 있습니다.',
      '{% data variables.product.github %} 계정의 사용자 이름을 변경할 수 있습니다.{% ifversion ghes %} 인스턴스에서 기본 제공 인증을 사용하는 경우.{% endif %}',
    )

    // [SCRAPE-6572] Per-file fix:
    // code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configuring-access-to-private-registries-for-dependabot.md
    // (intro): translator dropped the closing `{% endif %}` and replaced it
    // with a duplicate `{% data variables.product.prodname_dependabot %}`
    // reference. This left `{% ifversion dependabot-on-actions-self-hosted %}`
    // unclosed and broke the `/ko/code-security` landing page scrape since
    // this page is one of its children. Restore the `{% endif %}`.
    content = content.replaceAll(
      '자체 호스팅된 실행기에서 실행 중인 {% data variables.product.prodname_dependabot %}에 대한 액세스를 구성할 수도 있습니다.{% data variables.product.prodname_dependabot %}',
      '자체 호스팅된 실행기에서 실행 중인 {% data variables.product.prodname_dependabot %}에 대한 액세스를 구성할 수도 있습니다.{% endif %}',
    )
  }

  if (context.code === 'de') {
    content = content.replaceAll('{% Daten variables', '{% data variables')
    content = content.replaceAll('{% daten variables', '{% data variables')
    content = content.replaceAll('{% Daten reusables', '{% data reusables')
    content = content.replaceAll('{%- Daten reusables', '{%- data reusables')
    // `{% Datenseite variables.` — "Datenseite" (data page) compound used instead of "data"
    content = content.replaceAll('{% Datenseite variables', '{% data variables')
    content = content.replaceAll('{%- Datenseite variables', '{%- data variables')
    // `wiederverwendbare` is German for "reusables" — fix translated reusables paths
    content = content.replaceAll('{% data wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{% Daten wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{% Data wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{%- Daten wiederverwendbare.', '{%- data reusables.')
    // `wiederverwendbar.` (without trailing 'e') — alternate German form
    content = content.replaceAll('{% Daten wiederverwendbar.', '{% data reusables.')
    // `daten wiederverwendbars.` — lowercase with trailing 's'
    content = content.replaceAll('{% daten wiederverwendbars.', '{% data reusables.')
    // `daten wiederverwendbar.` / `daten wiederverwendbare.` — without trailing 's'
    content = content.replaceAll('{% daten wiederverwendbar.', '{% data reusables.')
    content = content.replaceAll('{% daten wiederverwendbare.', '{% data reusables.')
    // `{%- Daten variables` — dash variant
    content = content.replaceAll('{%- Daten variables', '{%- data variables')
    // `{% Daten Variablen.` — both German words for "data variables"
    content = content.replaceAll('{% Daten Variablen.', '{% data variables.')
    // `{% daten reusables` — lowercase with English "reusables"
    content = content.replaceAll('{% daten reusables', '{% data reusables')
    content = content.replaceAll('{%- daten reusables', '{%- data reusables')
    // `{% unformatierte %}` — "unformatted" = raw
    content = content.replaceAll('{% unformatierte %}', '{% raw %}')
    content = content.replaceAll('{%- unformatierte %}', '{%- raw %}')
    // `Datenvariablen.` — German compound word for "data variables" (no space)
    content = content.replaceAll('{% Datenvariablen.', '{% data variables.')
    content = content.replaceAll('{%- Datenvariablen.', '{%- data variables.')
    content = content.replaceAll('{%-Daten variables', '{%- data variables')
    content = content.replaceAll('{%-Daten-variables', '{%- data variables')
    // `{%-DatenXxx variables` — compound "Daten..." word immediately after `{%-` (no space)
    // e.g. `{%-Datenpaket variables.`, `{%-Dateninstanz variables.`, `{%-Dateneinstellungen variables.`
    // The existing `{%- DatenXxx variables` rules (with space) don't catch the no-space variant.
    content = content.replace(/\{%-(Daten[A-Za-z]+)\s+(variables|reusables)/g, '{%- data $2')
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
    // `{% Codespaces %}` — translator capitalized the platform tag
    content = content.replaceAll('{% Codespaces %}', '{% codespaces %}')
    content = content.replaceAll('{%- Codespaces %}', '{%- codespaces %}')
    // `{% Aufforderung %}` — German "Aufforderung" (prompt/instruction) = prompt
    content = content.replaceAll('{% Aufforderung %}', '{% prompt %}')
    content = content.replaceAll('{%- Aufforderung %}', '{%- prompt %}')
    // `{% Endprompt %}` — mix of German "End" and English "prompt" = endprompt
    content = content.replaceAll('{% Endprompt %}', '{% endprompt %}')
    content = content.replaceAll('{%- Endprompt %}', '{%- endprompt %}')
    // Translated for-loop keywords: `für VARNAME in COLLECTION`
    content = content.replace(/\{%-? für (\w+) in /g, (match) => {
      return match.replace('für', 'for')
    })
    // `{% ansonsten %}` / `{%- ansonsten %}` — "otherwise" = else
    content = content.replaceAll('{% ansonsten %}', '{% else %}')
    content = content.replaceAll('{%- ansonsten %}', '{%- else %}')
    // `{% andernfalls %}` / `{% sonst %}` — "otherwise/else" = else
    content = content.replaceAll('{% andernfalls %}', '{% else %}')
    content = content.replaceAll('{%- andernfalls %}', '{%- else %}')
    content = content.replaceAll('{% sonst %}', '{% else %}')
    content = content.replaceAll('{%- sonst %}', '{%- else %}')
    // `{% andernfalls ifversion X %}` / `{% sonst ifversion X %}` → `{% elsif X %}`
    content = content.replace(/\{% andernfalls ifversion\s+(.+?)\s*%\}/g, '{% elsif $1 %}')
    content = content.replace(/\{% sonst ifversion\s+(.+?)\s*%\}/g, '{% elsif $1 %}')
    // `{% Zeilenkopfzeilen %}` — "row headers" = rowheaders
    content = content.replaceAll('{% Zeilenkopfzeilen %}', '{% rowheaders %}')
    content = content.replaceAll('{%- Zeilenkopfzeilen %}', '{%- rowheaders %}')
    // `{% Rohdaten %}` — German "raw data" = raw
    content = content.replaceAll('{% Rohdaten %}', '{% raw %}')
    content = content.replaceAll('{%- Rohdaten %}', '{%- raw %}')
    content = content.replaceAll('{%- Rohdaten -%}', '{%- raw -%}')
    // `{% Endnotiz %}` — "end note" = endnote
    content = content.replaceAll('{% Endnotiz %}', '{% endnote %}')
    content = content.replaceAll('{%- Endnotiz %}', '{%- endnote %}')
    // `{% data-variables.` — hyphen used instead of space between "data" and "variables"
    content = content.replaceAll('{% data-variables.', '{% data variables.')
    content = content.replaceAll('{%- data-variables.', '{%- data variables.')
    // `{%- Datenworkflow variables.` — compound "Datenworkflow" (data workflow) = data
    content = content.replaceAll('{%- Datenworkflow variables.', '{%- data variables.')
    content = content.replaceAll('{% Datenworkflow variables.', '{% data variables.')
    // `{% ifec ` — truncated/corrupted form of "ifversion"
    content = content.replaceAll('{% ifec ', '{% ifversion ')
    content = content.replaceAll('{%- ifec ', '{%- ifversion ')
    // `{% andere %}` / `{%- andere %}` — German "andere" (other) = else
    content = content.replaceAll('{% andere %}', '{% else %}')
    content = content.replaceAll('{%- andere %}', '{%- else %}')
    // `{% Dateninstanz` — "data instance" = data
    content = content.replaceAll('{% Dateninstanz ', '{% data ')
    // `{% Datenauflistung ` — "data listing" (compound) = data
    content = content.replaceAll('{% Datenauflistung ', '{% data ')
    content = content.replaceAll('{%- Datenauflistung ', '{%- data ')
    // `{% ifversion-Sicherheitskonfigurationen %}` — hyphenated compound
    content = content.replaceAll(
      '{% ifversion-Sicherheitskonfigurationen %}',
      '{% ifversion security-configurations %}',
    )
    content = content.replaceAll(
      '{%- ifversion-Sicherheitskonfigurationen %}',
      '{%- ifversion security-configurations %}',
    )
    // `{% ifversion-Unterprobleme %}` — hyphenated compound
    content = content.replaceAll('{% ifversion-Unterprobleme %}', '{% ifversion sub-issues %}')
    content = content.replaceAll('{%- ifversion-Unterprobleme %}', '{%- ifversion sub-issues %}')
    // `{% ifversion-Sicherheitskampagnen %}` — hyphenated compound
    content = content.replaceAll(
      '{% ifversion-Sicherheitskampagnen %}',
      '{% ifversion security-campaigns %}',
    )
    content = content.replaceAll(
      '{%- ifversion-Sicherheitskampagnen %}',
      '{%- ifversion security-campaigns %}',
    )
    // `{% Webseite data variables` / `{%Webseite data variables` — translator inserted
    // German "Webseite" (website) before `data variables`. Strip it.
    content = content.replaceAll('{%Webseite data variables', '{% data variables')
    content = content.replaceAll('{% Webseite data variables', '{% data variables')
    content = content.replaceAll('{%- Webseite data variables', '{%- data variables')
    // `{% Daten nur variables` — "data only variables" (translator inserted "nur")
    content = content.replaceAll('{% Daten nur variables', '{% data variables')
    content = content.replaceAll('{%- Daten nur variables', '{%- data variables')
    // `{% Dateneinstellungen variables` — "data settings variables" (compound) = data
    content = content.replaceAll('{% Dateneinstellungen variables', '{% data variables')
    content = content.replaceAll('{%- Dateneinstellungen variables', '{%- data variables')
    // `{% Datenpaket variables` — "data package variables" (compound) = data
    content = content.replaceAll('{% Datenpaket variables', '{% data variables')
    content = content.replaceAll('{%- Datenpaket variables', '{%- data variables')
    // `{% datan variables` — typo of "Daten"
    content = content.replaceAll('{% datan variables', '{% data variables')
    content = content.replaceAll('{%- datan variables', '{%- data variables')
    // `{%-Daten-variables` and `{%-Datenvariablen` (no space) handled at line 647-648
    // Add the `{%-Datenvariablen.` no-space variant
    content = content.replaceAll('{%-Datenvariablen.', '{%- data variables.')
    // Broad fallback: any remaining `{% Daten ` / `{% daten ` → `{% data `
    // Runs LAST so specific path-fixing rules above get first crack.
    content = content.replace(/\{%(-?)\s*[Dd]aten\s+/g, '{%$1 data ')
    // After broad fallback, translated path segments may remain in `{% data X.Y %}`
    // where X is German. Catch the most common: `wiederverwendbar.` → `reusables.`
    content = content.replace(
      /\{%(-?\s*)data wiederverwendbar(?:e|en|ens)?\./g,
      '{%$1data reusables.',
    )
    content = content.replace(/\{%(-?\s*)data Variablen\./g, '{%$1data variables.')
    // German `oder` = "or", `und` = "and" inside ifversion/elsif/if tags
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\soder\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\soder\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sund\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sund\s/g, ' and '),
    )
    // Translated tag name `{% eingerucktes_datenverweis ... %}` → `{% indented_data_reference ... %}`
    content = content.replaceAll('{% eingerucktes_datenverweis ', '{% indented_data_reference ')
    content = content.replaceAll('{%- eingerucktes_datenverweis ', '{%- indented_data_reference ')

    // [SCRAPE-6548] Per-file fix:
    // organizations/.../permissions-of-custom-organization-roles.md (intro):
    // `{% ifversion org-custom-role-with-repo-permissions %}` opens with an
    // `{% else %}` branch but never closes. Append `{% endif %}`.
    content = content.replaceAll(
      'Mit angepassten Organisationsrollen kannst du den Zugriff auf die Einstellungen deiner {% ifversion org-custom-role-with-repo-permissions %}Organisation und die Repositories{% else %}einer Organisation steuern.',
      'Mit angepassten Organisationsrollen kannst du den Zugriff auf die Einstellungen deiner {% ifversion org-custom-role-with-repo-permissions %}Organisation und die Repositories{% else %}einer Organisation{% endif %} steuern.',
    )
  }

  // --- Generic fixes (all languages) ---

  // Inside ANY Liquid tag `{% ... %}` (including `{% octicon ... %}`,
  // `{% data ... %}`, `{% assign ... %}` etc.), normalize typographic
  // quotation marks back to ASCII straight quotes. Translators
  // frequently smart-quote attribute values, which breaks the parser.
  // Handles: « » (guillemets, fr/ru/es/it), “ ” (CJK double quotes,
  // U+201C/U+201D, used in zh/ko/ja), „ “ ‚ ‘ (German low-9/high-6
  // quotes, U+201E/U+201C/U+201A/U+2018) and ' ' (curly singles).
  content = content.replace(/\{%-?[^%]*?-?%\}/g, (match) => {
    return match.replace(/[«»“”„]/g, '"').replace(/[‘’‚]/g, "'")
  })

  // Inside `{% ifversion|elsif|if ... %}` collapse runs of internal whitespace
  // to a single space. Translators occasionally introduce double spaces
  // (e.g. `{% ifversion fpt or ghec  %}`), and although a single trailing
  // space is fine, some patterns trip the parser. Safe to apply globally.
  content = content.replace(
    /\{%(-?)\s+(ifversion|elsif|if)\s+([^%]*?)\s*(-?)%\}/g,
    (_m, dashOpen, tag, body, dashClose) =>
      `{%${dashOpen} ${tag} ${body.replace(/\s+/g, ' ').trim()} ${dashClose}%}`,
  )

  // Octicon icon-name English-content recovery. Translators often translate
  // the icon name itself (e.g. `{% octicon "карандаш" %}` for "pencil"). The
  // Octicon parser will then either fail with "Octicon X does not exist" or
  // — because its regex is not anchored — match a later quoted attribute value
  // such as `aria-hidden="true"` and report "Octicon true does not exist".
  // Recover the original icon name by position when the english content is
  // available and contains the same number of `{% octicon "<name>" ... %}`
  // tags as the translation.
  if (englishContent && content.includes('{% octicon ')) {
    const englishNames: string[] = []
    for (const m of englishContent.matchAll(/\{%-?\s*octicon\s+"([^"]*)"/g)) {
      englishNames.push(m[1])
    }
    // Count translated octicon tags (whether or not they have a quoted name).
    const translatedAll = [...content.matchAll(/\{%-?\s*octicon\b[^%]*%\}/g)]
    const translatedMatches = [...content.matchAll(/\{%-?\s*octicon\s+"([^"]*)"/g)]
    if (
      englishNames.length > 0 &&
      translatedMatches.length === englishNames.length &&
      translatedMatches.some((m, i) => m[1] !== englishNames[i])
    ) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*octicon\s+")([^"]*)(")/g,
        (_match, prefix, _name, suffix) => {
          const englishName = englishNames[i++]
          return `${prefix}${englishName}${suffix}`
        },
      )
    } else if (englishNames.length > 0) {
      // Counts differ. Replace any non-ASCII icon name with a positional
      // English fallback (clamped to valid range). Real octicon names are
      // always ASCII, so non-ASCII is always wrong.
      let i = 0
      content = content.replace(
        /(\{%-?\s*octicon\s+")([^"]*)(")/g,
        (match, prefix, name, suffix) => {
          // eslint-disable-next-line no-control-regex
          if (/[^\x00-\x7F]/.test(name)) {
            const englishName = englishNames[Math.min(i, englishNames.length - 1)]
            i++
            return `${prefix}${englishName}${suffix}`
          }
          i++
          return match
        },
      )
    }

    // Translators sometimes drop the `"name"` first argument entirely:
    // `{% octicon aria-label="..." %}` instead of `{% octicon "copy" aria-label="..." %}`.
    // When tag counts match the English version, recover by injecting the
    // positional English icon name.
    if (englishNames.length > 0 && translatedAll.length === englishNames.length) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*octicon)(\s+)([^"%][^%]*?)(\s*-?%\})/g,
        (_m, head, ws, body, tail) => {
          const name = englishNames[i++]
          return `${head}${ws}"${name}" ${body.trim()} ${tail.trimStart()}`
        },
      )
    }
  }

  // After octicon recovery, the surrounding `{% octicon "X" ... %}` may still
  // contain translated `aria-label` values. That's OK — Liquid parses key=value
  // tokens regardless of non-ASCII content in the value.

  // `{% indented_data_reference <path> spaces=N %}` recovery. Translators
  // sometimes translate the reusables path (e.g. `재사용.X.Y` for ko,
  // `wiederverwendbar.X.Y` for de) or insert internal spaces (ru:
  // `повторно используемых пространств.X.Y`), which breaks the parser
  // ("'spaces=NUMBER' must include a number"). Recover by replacing the
  // entire path positionally from the English version when counts match.
  if (englishContent && content.includes('{% indented_data_reference ')) {
    const englishArgs: string[] = []
    for (const m of englishContent.matchAll(
      /\{%-?\s*indented_data_reference\s+([^%]*?)\s*-?%\}/g,
    )) {
      englishArgs.push(m[1].trim())
    }
    const translatedMatches = [
      ...content.matchAll(/\{%-?\s*indented_data_reference\s+([^%]*?)\s*-?%\}/g),
    ]
    if (
      englishArgs.length > 0 &&
      translatedMatches.length === englishArgs.length &&
      translatedMatches.some((m, i) => m[1].trim() !== englishArgs[i])
    ) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*indented_data_reference\s+)([^%]*?)(\s*-?%\})/g,
        (_match, prefix, _args, suffix) => {
          const englishArg = englishArgs[i++]
          return `${prefix}${englishArg}${suffix}`
        },
      )
    } else if (englishArgs.length > 0) {
      // Counts differ. Replace any args containing non-ASCII characters with
      // the positional English fallback (clamped). Valid args are always ASCII.
      let i = 0
      content = content.replace(
        /(\{%-?\s*indented_data_reference\s+)([^%]*?)(\s*-?%\})/g,
        (match, prefix, args, suffix) => {
          // eslint-disable-next-line no-control-regex
          if (/[^\x00-\x7F]/.test(args)) {
            const englishArg = englishArgs[Math.min(i, englishArgs.length - 1)]
            i++
            return `${prefix}${englishArg}${suffix}`
          }
          i++
          return match
        },
      )
    }
  }

  // `{% data <path> %}` recovery. Translators sometimes translate the path
  // segments (e.g. `数据.可重用.X.Y` for zh, `재사용 가능.X.Y` for ko,
  // `wiederverwendbar.X.Y` for de). When the data tag itself parses but the
  // resolved path doesn't exist, we get "Can't find the key 'X' in the scope".
  // Recover by replacing the entire path positionally from the English version
  // when counts match, or by swapping any path containing non-ASCII characters
  // with the positional English fallback. Valid `{% data %}` paths are always
  // ASCII (lowercase letters, digits, dots, underscores, hyphens).
  if (englishContent && content.includes('{% data ')) {
    const englishArgs: string[] = []
    for (const m of englishContent.matchAll(/\{%-?\s*data\s+([^%]*?)\s*-?%\}/g)) {
      englishArgs.push(m[1].trim())
    }
    const translatedMatches = [...content.matchAll(/\{%-?\s*data\s+([^%]*?)\s*-?%\}/g)]
    if (
      englishArgs.length > 0 &&
      translatedMatches.length === englishArgs.length &&
      translatedMatches.some((m, i) => m[1].trim() !== englishArgs[i])
    ) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*data\s+)([^%]*?)(\s*-?%\})/g,
        (_match, prefix, _args, suffix) => {
          const englishArg = englishArgs[i++]
          return `${prefix}${englishArg}${suffix}`
        },
      )
    } else if (englishArgs.length > 0) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*data\s+)([^%]*?)(\s*-?%\})/g,
        (match, prefix, args, suffix) => {
          // eslint-disable-next-line no-control-regex
          if (/[^\x00-\x7F]/.test(args)) {
            const englishArg = englishArgs[Math.min(i, englishArgs.length - 1)]
            i++
            return `${prefix}${englishArg}${suffix}`
          }
          i++
          return match
        },
      )
    }
  }

  // Strip leaked LLM sentinel markers (e.g. `<|endoftext|>`) that
  // occasionally survive the translation pipeline. Replace the marker
  // and any surrounding whitespace with a single space so adjacent
  // words don't concatenate.
  content = content.replace(/\s*<\|endoftext\|>\s*/g, ' ')

  // Capitalized Liquid keyword: `{% Data ` / `{%- Data ` → `{% data ` / `{%- data `
  content = content.replaceAll('{% Data ', '{% data ')
  content = content.replaceAll('{%- Data ', '{%- data ')

  // Capitalized platform tags (cross-language)
  content = content.replaceAll('{% Windows %}', '{% windows %}')
  content = content.replaceAll('{%- Windows %}', '{%- windows %}')
  content = content.replaceAll('{% Linux %}', '{% linux %}')
  content = content.replaceAll('{%- Linux %}', '{%- linux %}')
  content = content.replaceAll('{% Eclipse %}', '{% eclipse %}')
  content = content.replaceAll('{%- Eclipse %}', '{%- eclipse %}')
  content = content.replaceAll('{% Mac %}', '{% mac %}')
  content = content.replaceAll('{%- Mac %}', '{%- mac %}')

  // Capitalized Liquid keywords (cross-language)
  content = content.replaceAll('{% Endwindows %}', '{% endwindows %}')
  content = content.replaceAll('{%- Endwindows %}', '{%- endwindows %}')
  content = content.replace(/\{% Elsif /g, '{% elsif ')
  content = content.replaceAll('{% Endif %}', '{% endif %}')
  content = content.replaceAll('{%- Endif %}', '{%- endif %}')
  content = content.replaceAll('{%- Endif -%}', '{%- endif -%}')

  // Garbled "endif" variants
  content = content.replaceAll('{% endifen %}', '{% endif %}')
  content = content.replaceAll('{%- endifen %}', '{%- endif %}')
  content = content.replaceAll('{% Endifen %}', '{% endif %}')
  content = content.replaceAll('{%- Endifen %}', '{%- endif %}')
  content = content.replaceAll('{% endif _%}', '{% endif %}')

  // Near-miss "octicon" typo
  content = content.replaceAll('{% okticon ', '{% octicon ')

  // Typos in "data" keyword
  content = content.replaceAll('{% dada variables', '{% data variables')
  content = content.replaceAll('{% % data', '{% data')

  // Leading dot in `{% data` paths: `{% data .variables.X %}` / `{% data .reusables.X %}`
  // — translator inserted a stray dot. Affects ja, pt, zh.
  content = content.replaceAll('{% data .variables.', '{% data variables.')
  content = content.replaceAll('{%- data .variables.', '{%- data variables.')
  content = content.replaceAll('{% data .reusables.', '{% data reusables.')
  content = content.replaceAll('{%- data .reusables.', '{%- data reusables.')

  // Singular "variable" / "reusable" in `{% data` paths:
  // `{% data variable.product.X %}` → `{% data variables.product.X %}` (es, zh)
  content = content.replaceAll('{% data variable.', '{% data variables.')
  content = content.replaceAll('{%- data variable.', '{%- data variables.')
  content = content.replaceAll('{% data reusable.', '{% data reusables.')
  content = content.replaceAll('{%- data reusable.', '{%- data reusables.')

  // Double-quote corruption in href attributes
  content = content.replace(/href=""https:\/\//g, 'href="https://')

  // Empty HTML tags that cause parsing issues
  content = content.replaceAll('<b></b>', '')
  content = content.replaceAll('<u></u>', '')

  // `{% ifversion-FEATURE %}` — hyphen instead of space before lowercase feature flag
  content = content.replace(/(\{%-? )ifversion-([a-z][\w-]*\s*%\})/g, '$1ifversion $2')

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
  content = content.replaceAll('{% datavariable.', '{% data variables.')
  content = content.replaceAll('{% datavariable ', '{% data variables ')

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
      content = content.replace(/\{%(.+?)%\} /g, (match, _p1, offset, string) => {
        if (match.lastIndexOf('{%') > 0) return match
        // Don't inject a linebreak when the tag is inside a heading line — doing
        // so would split `#### {% data X %} Japanese text` into a heading with
        // no content followed by a loose paragraph of Japanese text.
        const lineStart = (string as string).lastIndexOf('\n', offset) + 1
        if (/^[ \t]{0,3}#{1,6}/.test((string as string).slice(lineStart, offset))) return match
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

  // Strip stray closing-only Liquid tags that have no matching opener anywhere
  // in the content. Translators sometimes insert spurious closers (e.g. an
  // extra `{% endif %}`) when they re-arrange paragraphs. We only remove a
  // stray closer when there are strictly more closers than possible openers,
  // and we remove from the END of the content first (most likely the stray).
  //
  // We treat each closer with its set of valid opener regexes:
  //   endif       ← `{% if `, `{% ifversion `
  //   endfor      ← `{% for `
  //   endraw      ← `{% raw %}`
  //   endcase     ← `{% case `
  //   endcomment  ← `{% comment %}`
  //   endcapture  ← `{% capture `
  //   endnote     ← `{% note %}`
  //   endwarning  ← `{% warning %}`
  //   endtip      ← `{% tip %}`
  //   endcaution  ← `{% caution %}`
  //   endimportant← `{% important %}`
  //   endrowheaders← `{% rowheaders %}`
  //   enddesktop  ← `{% desktop %}`
  //   endmac      ← `{% mac %}`
  //   endwebui    ← `{% webui %}`
  //   endwindowsterminal ← `{% windowsterminal %}`
  //   endwindows  ← `{% windows %}`
  //   endlinux    ← `{% linux %}`
  //   endeclipse  ← `{% eclipse %}`
  //   endjetbrains← `{% jetbrains %}`
  //   endvscode   ← `{% vscode %}`
  //   endvisualstudio ← `{% visualstudio %}`
  //   endprompt   ← `{% prompt %}`
  //   endmobile   ← `{% mobile %}`
  //   endcli      ← `{% cli %}`
  //   endcurl     ← `{% curl %}`
  //   endindented_data_reference ← `{% indented_data_reference `
  //
  // `else` / `elsif` are stripped only when no `if`/`ifversion` opener exists.
  const closerToOpeners: Array<[string, RegExp]> = [
    ['endif', /\{%-?\s*(?:if|ifversion)\s/],
    ['endfor', /\{%-?\s*for\s/],
    ['endraw', /\{%-?\s*raw\s*-?%\}/],
    ['endcase', /\{%-?\s*case\s/],
    ['endcomment', /\{%-?\s*comment\s*-?%\}/],
    ['endcapture', /\{%-?\s*capture\s/],
    ['endnote', /\{%-?\s*note\s*-?%\}/],
    ['endwarning', /\{%-?\s*warning\s*-?%\}/],
    ['endtip', /\{%-?\s*tip\s*-?%\}/],
    ['endcaution', /\{%-?\s*caution\s*-?%\}/],
    ['endimportant', /\{%-?\s*important\s*-?%\}/],
    ['endrowheaders', /\{%-?\s*rowheaders\s*-?%\}/],
    ['enddesktop', /\{%-?\s*desktop\s*-?%\}/],
    ['endmac', /\{%-?\s*mac\s*-?%\}/],
    ['endwebui', /\{%-?\s*webui\s*-?%\}/],
    ['endwindowsterminal', /\{%-?\s*windowsterminal\s*-?%\}/],
    ['endwindows', /\{%-?\s*windows\s*-?%\}/],
    ['endlinux', /\{%-?\s*linux\s*-?%\}/],
    ['endeclipse', /\{%-?\s*eclipse\s*-?%\}/],
    ['endjetbrains', /\{%-?\s*jetbrains\s*-?%\}/],
    ['endvscode', /\{%-?\s*vscode\s*-?%\}/],
    ['endvisualstudio', /\{%-?\s*visualstudio\s*-?%\}/],
    ['endprompt', /\{%-?\s*prompt\s*-?%\}/],
    ['endmobile', /\{%-?\s*mobile\s*-?%\}/],
    ['endcli', /\{%-?\s*cli\s*-?%\}/],
    ['endcurl', /\{%-?\s*curl\s*-?%\}/],
    ['endindented_data_reference', /\{%-?\s*indented_data_reference\s/],
  ]

  // Tests that exercise individual transformations in isolation can opt out
  // of the orphan-closer stripping below (which is tested separately).
  if (context.skipOrphanStripping) {
    return content
  }

  for (const [closer, openerRegex] of closerToOpeners) {
    const closerRegex = new RegExp(`\\{%-?\\s*${closer}\\s*-?%\\}`, 'g')
    const closers = content.match(closerRegex)
    if (!closers) continue
    // Count openers using a global version of the opener regex.
    const globalOpener = new RegExp(openerRegex.source, `${openerRegex.flags}g`)
    const openers = content.match(globalOpener)
    const openerCount = openers ? openers.length : 0
    const closerCount = closers.length
    if (closerCount <= openerCount) continue
    // Remove (closerCount - openerCount) closers, starting from the LAST.
    let toRemove = closerCount - openerCount
    const positions: Array<{ start: number; end: number }> = []
    closerRegex.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = closerRegex.exec(content)) !== null) {
      positions.push({ start: m.index, end: m.index + m[0].length })
    }
    // Remove from the END (translator-appended extras).
    for (let i = positions.length - 1; i >= 0 && toRemove > 0; i--, toRemove--) {
      const { start, end } = positions[i]
      content = content.slice(0, start) + content.slice(end)
    }
  }

  // Strip stray `else` / `elsif` when no `if`/`ifversion` exists at all.
  if (!/\{%-?\s*(?:if|ifversion)\s/.test(content)) {
    content = content.replace(/\{%-?\s*else\s*-?%\}/g, '')
    content = content.replace(/\{%-?\s*elsif\s+[^%]*?-?%\}/g, '')
  }

  return content
}

/**
 * Rejoin marker lines that the translation pipeline split from their content.
 *
 * Translators sometimes leave a heading marker (`#`/`##`/...), blockquote
 * marker (`>`), ordered-list marker (`1.`, `2.`, ...), or the opening `**`
 * of a bold span (immediately following a list/heading/blockquote/table
 * marker) on its own line, with the rest of the content pushed to the next
 * line as deeply indented text. This breaks rendering (empty headings, broken
 * blockquotes, broken ordered lists rendered as code blocks, unrendered bold,
 * unexpanded Liquid and `[AUTOTITLE]` links).
 *
 * Conservative thresholds:
 * - Marker line has 0–3 leading spaces (CommonMark heading/blockquote rule).
 * - Continuation line has 6+ leading spaces (avoids 4-space indented code).
 * - Marker line contains *only* the marker (and optional trailing whitespace).
 * - Skip fenced code blocks (``` and ~~~) and YAML frontmatter (`---`...`---`).
 */
function joinDanglingMarkers(content: string): string {
  const lines = content.split('\n')
  const out: string[] = []
  let inFence = false
  let fenceChar = ''
  let fenceLen = 0
  let inFrontmatter = lines[0] === '---'

  // Marker-only line patterns (run only against non-fenced, non-frontmatter lines).
  const headingOnly = /^([ \t]{0,3})(#{1,6})[ \t]*$/
  const blockquoteOnly = /^([ \t]{0,3}>)[ \t]*$/
  // Ordered-list marker alone on a line: `1. \n              content`.
  const orderedListOnly = /^([ \t]{0,3}\d+\.)[ \t]*$/
  // Bold-open after a list/heading/blockquote/table marker (no other content).
  const markerThenBoldOnly =
    /^([ \t]{0,3}(?:[*+-]|\d+\.)[ \t]+|[ \t]{0,3}>[ \t]+|[ \t]{0,3}#{1,6}[ \t]+|\|[ \t]*)\*\*[ \t]*$/
  // Continuation: 6+ leading spaces and at least one non-whitespace character.
  // Used when checking whether the *next* line is a deeply-indented continuation
  // after a recognised marker.
  const deepIndented = /^[ \t]{6,}(\S.*)$/
  // Standalone deeply-indented paragraph: 9+ leading spaces.  Translation
  // artifacts consistently use 14 spaces; legitimate list-continuation content
  // uses at most 6 spaces (confirmed by corpus analysis).  The 9+ threshold
  // keeps the two populations well separated and is fence-safe after the
  // improved fence detection above.
  const veryDeepIndented = /^[ \t]{9,}(\S.*)$/

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // YAML frontmatter close: `---` or `...` after the opening `---`.
    if (inFrontmatter && i > 0 && (line === '---' || line === '...')) {
      inFrontmatter = false
      out.push(line)
      continue
    }

    // While inside frontmatter, pass lines through verbatim. Crucially,
    // do NOT run fence detection here — a frontmatter line starting with
    // ``` or ~~~ (e.g. inside a multiline scalar) would otherwise toggle
    // `inFence` and cause the rest of the document after frontmatter
    // closes to be (mis-)treated as inside a fence.
    if (inFrontmatter) {
      out.push(line)
      continue
    }

    // CommonMark fenced code block: 0–3 leading spaces, then 3+ ` or ~.
    // CommonMark permits fences to be indented 0–3 spaces at the document
    // level, but inside a list item a fence can appear at 4+ spaces of
    // leading indentation.  Use `^[ \t]*` so that code blocks nested inside
    // list items (e.g. `    ```json`) are correctly recognised and their
    // content is not inadvertently stripped by the selfStrip pass below.
    const fenceMatch = line.match(/^[ \t]*(`{3,}|~{3,})/)
    if (fenceMatch) {
      const marker = fenceMatch[1]
      if (!inFence) {
        inFence = true
        fenceChar = marker[0]
        fenceLen = marker.length
      } else if (marker[0] === fenceChar && marker.length >= fenceLen) {
        inFence = false
        fenceChar = ''
        fenceLen = 0
      }
      out.push(line)
      continue
    }

    if (inFence) {
      out.push(line)
      continue
    }

    // A line that itself starts with 9+ spaces and is not inside a code fence
    // is a translation-pipeline corruption artifact: the pipeline indented an
    // entire paragraph line, causing CommonMark to render it as an indented
    // code block (4+ spaces at the document level = code block).  Strip the
    // leading whitespace so the content renders as a normal paragraph.
    // Marker-only lines (headings `# `, blockquotes `> `, list items `1. `)
    // always have ≤3 leading spaces, so they are never misidentified here.
    // The 9+ threshold (vs the 6+ used for nextDeep) ensures that legitimate
    // list-continuation lines (which use ≤6 spaces) are never stripped.
    const selfStrip = line.match(veryDeepIndented)
    if (selfStrip) {
      out.push(selfStrip[1])
      continue
    }

    const next = i + 1 < lines.length ? lines[i + 1] : undefined
    const nextDeep = next !== undefined ? next.match(deepIndented) : null
    if (!nextDeep) {
      out.push(line)
      continue
    }
    const nextContent = nextDeep[1]

    // Consume additional deeply-indented continuation lines so multi-line
    // wrapped headings/blockquotes/bold-opens collapse onto one line
    // (e.g. `##\n      {%if%}\n      content`). Returns the concatenated
    // continuation text and the new line index.
    const consumeContinuations = (start: number): { extra: string; nextI: number } => {
      let extra = ''
      let j = start
      while (j + 1 < lines.length) {
        const cont = lines[j + 1].match(deepIndented)
        if (!cont) break
        extra += cont[1]
        j++
      }
      return { extra, nextI: j }
    }

    const heading = line.match(headingOnly)
    if (heading) {
      const { extra, nextI } = consumeContinuations(i + 1)
      out.push(`${heading[1]}${heading[2]} ${nextContent}${extra}`)
      i = nextI
      continue
    }

    const bq = line.match(blockquoteOnly)
    if (bq) {
      const { extra, nextI } = consumeContinuations(i + 1)
      out.push(`${bq[1]} ${nextContent}${extra}`)
      i = nextI
      continue
    }

    const ol = line.match(orderedListOnly)
    if (ol) {
      out.push(`${ol[1]} ${nextContent}`)
      i++
      continue
    }

    const boldOpen = line.match(markerThenBoldOnly)
    if (boldOpen) {
      const { extra, nextI } = consumeContinuations(i + 1)
      out.push(`${boldOpen[1]}**${nextContent}${extra}`)
      i = nextI
      continue
    }

    out.push(line)
  }

  return out.join('\n')
}
