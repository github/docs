// E.g. `{%- ifversion dependency-review-action-licenses %}\n`
const ifVersionRegex = /^{%-?\s*ifversion\s+([\w- ]+)\s*-?%}\n/
const ifVersionEndRegex = /\|({%-?\s*ifversion\s+([\w- ]+)\s*-?%})\n/
// E.g. `... |{% endif %}{% ifversion dependency-review-action-fail-on-scopes %}\n`
const endifIfVersionRegex = /\|({%-?\s*endif\s*%})({%-?\sifversion\s+([\w- ]+)\s*-?%})\n/
const endifRegex = /\|({%-?\s*endif\s*%})\n/
const endifAloneRegex = /^({%-?\s*endif\s*%})\n/

// Split a string by newlines while keeping the newlines
function splitAndKeepNewlines(str: string) {
  const lines = str.split(/(\r\n|\r|\n)/)
  const result: string[] = []
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/(\r\n|\r|\n)/)) {
      result[result.length - 1] += lines[i]
    } else {
      result.push(lines[i])
    }
  }
  return result
}

export async function processFile(content: string) {
  let inTable = false
  let inFrontmatter = false
  let inMarkdown = false
  const newLines: string[] = []
  for (let line of splitAndKeepNewlines(content)) {
    if (line === '---\n') {
      if (!inFrontmatter) {
        inFrontmatter = true
      } else {
        inFrontmatter = false
        inMarkdown = true
      }
    }
    if (inMarkdown) {
      if (line.startsWith('|') && line.endsWith('|\n')) {
        inTable = true
      } else if (inTable && line === '\n') {
        inTable = false
      }
      if (inTable) {
        // E.g. `{%- ifversion dependency-review-action-licenses %}\n`
        if (ifVersionRegex.test(line)) {
          const better = line.replace('{%-', '{%').replace('-%}', '%}').trim()
          line = `| ${better} |\n`
        } else if (ifVersionEndRegex.test(line)) {
          line = line
            .replace(ifVersionEndRegex, '|\n| $1 |\n')
            .replace('{%-', '{%')
            .replace('-%}', '%}')
        } else if (endifIfVersionRegex.test(line)) {
          line = line
            .replace(endifIfVersionRegex, '|\n| $1 |\n| $2 |\n')
            .replace('{%-', '{%')
            .replace('-%}', '%}')
        } else if (endifRegex.test(line)) {
          line = line.replace(endifRegex, '|\n| $1 |\n')
        } else if (endifAloneRegex.test(line)) {
          line = line.replace(endifAloneRegex, '| $1 |\n').replace('{%-', '{%')
        }
      }
    }
    newLines.push(line)
  }
  return newLines.join('')
}
