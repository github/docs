/**
 * A lot of translations have minor corruptions that will lead to rendering
 * failing (and having to rely on English fallback). Many of these are
 * easy to manually correct for.
 *
 * This function is a temporary solution to correct for these corruptions.
 * It looks for easy "low hanging fruit" that we can correct for.
 *
 */
export function correctTranslatedContentStrings(content, englishContent, context = {}) {
  // A lot of translations have corruptions around the AUTOTITLE links.
  // We've requested that these are corrected back but as a temporary
  // solution we'll manually recover now.
  // See internal issue #2762
  // In late 2023, search in the translations repos if these things are
  // still happening and if not, the following lines can be removed.
  content = content.replaceAll('[AUTOTITLE"을 참조하세요]', '[AUTOTITLE]')
  content = content.replaceAll('[AUTOTITLE"을]', '[AUTOTITLE]')
  content = content.replaceAll('["AUTOTITLE]', '"[AUTOTITLE]')
  content = content.replaceAll('[AUTOTITLE"을 참조하세요.](', '[AUTOTITLE](')

  // A lot of Liquid tags lose their linebreak after the `}` which can
  // result in formatting problems, especially around Markdown tables.
  // This code here, compares each Liquid statement, in the translation,
  // and tests if it appears like that but with a newline in the English.
  // English example:
  //
  //    {%- ifversion ghes %}
  //    | Thing | ✔️ |
  //    {%- endif %}
  //
  // Translation example:
  //
  //    {%- ifversion ghes %} | Thing | ✔️ | {%- endif %}
  //
  // There exists the risk that different Liquid statements gets compared
  // different Liquid statements in the English, but the risk is worth
  // taking because even if this accidentally introduces a newline, it's
  // unlikely to cause a problem. At worst that a sentence displays on its
  // own paragraph.
  content = content.replace(/\{%(.+?)%\} /g, (match) => {
    if (match.lastIndexOf('{%') > 0) {
      // For example:
      //
      //    `{% bla bla %}, and {% foo bar %} `
      //
      // Our regex is not greedy, but technically, if you look closely
      // you'll see this is the first match that starts with `{%` and
      // ends with `%} `. Let's skip these.
      return match
    }

    const withLinebreak = match.slice(0, -1) + '\n'
    if (englishContent.includes(withLinebreak) && !englishContent.includes(match)) {
      return withLinebreak
    }
    return match
  })
  // The above corrections deepend on looking for `{% foo %} ` and replacing
  // it with `{% foo %}\n`. ...if `{% foo %}\n` was in the English
  // content and `{% foo %} ` was *not*.
  // However we see a lot of cases of this:
  //
  //    ... {% endif %} | First Column ...
  //
  // Which needs to become this:
  //
  //    ... {% endif %}
  //    | First Column ...
  //
  // And since `{% endif %}` is such a common Liquid tag we can't reply
  // on lookig for it with `{% endif %}\n` in the English content.
  content = content.replace(/\{% endif %\} \| /g, (match) => {
    const potentiallyBetter = '{% endif %}\n| '
    if (englishContent.includes(potentiallyBetter)) {
      return potentiallyBetter
    }
    return match
  })

  // All too often we see translations that look like this:
  //
  //   | Qualifizierer | Beschreibung | | -------- | -------- | {% ifversion ghec or ghes > 3.8 %} | `advanced-security:enabled` | Zeigt Repositorys an, für die {% data variables.product.prodname_GH_advanced_security %} aktiviert wurde | {% endif %} | `code-scanning-pull-request-alerts:enabled`| Zeigt Repositorys an, für die die {% data variables.product.prodname_code_scanning %} zur Ausführung bei Pull Requests konfiguriert wurde | | `dependabot-security-updates:enabled` | Zeigt Repositorys an, für die {% data variables.product.prodname_dependabot %}-Sicherheitsupdates aktiviert wurden  | | `secret-scanning-push-protection:enabled` | Zeigt Repositorys an, für die der Pushschutz für die {% data variables.product.prodname_secret_scanning %} aktiviert wurde | {% endif %}
  //
  // Yes, that's one very long line. Notice how all the necessary linebreaks
  // are suddenly gone.
  content = content.replaceAll(' | | ', ' |\n| ')

  // This is a bit of a hack, but it works.
  // It looks for patterns like this:
  //
  //     Some words --------|-------|{
  //
  // And from that it tries to convert it to:
  //
  //     Some words
  //     --------|-------|{
  //
  // But because it's quite a broad solution specifically around any
  // Markdown table syntax, let's be extra careful and only apply it
  // to the select few pages with known problems.
  if (context.relativePath?.endsWith('scopes-for-oauth-apps.md')) {
    if (context.code === 'pt') {
      // As of Aug 2023, the Portuguese translation seems to have lost the
      // `|` characters in their Markdown table syntax.
      content = content.replace(/(\w)(\s-+\s-+\s){%/g, (whole, start, rest) => {
        return `${start}\n${rest.replace(/\s/g, '|')}`
      })
    }
    content = content.replace(/(\S\s*)(--+\|--+\|{)/, (whole, start, rest) => {
      return `${start}\n${rest}`
    })
  }

  return content
}
