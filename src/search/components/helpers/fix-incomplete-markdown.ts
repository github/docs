// A streamed markdown response arrives in chunks, so a construct can be left
// open. This closes the delimiters it can detect and repairs partial table
// rows.
export function fixIncompleteMarkdown(content: string): string {
  content = fixCodeBlocks(content)

  content = fixInlineCode(content)

  content = fixLinks(content)

  content = fixImages(content)

  content = fixEmphasis(content)

  content = fixTables(content)

  return content
}

function fixCodeBlocks(content: string): string {
  const codeBlockRegex = /```/g
  const matches = content.match(codeBlockRegex)
  const count = matches ? matches.length : 0
  if (count % 2 !== 0) {
    content += '\n```'
  }
  return content
}

function fixInlineCode(content: string): string {
  const inlineCodeRegex = /`/g
  const matches = content.match(inlineCodeRegex)
  const count = matches ? matches.length : 0
  if (count % 2 !== 0) {
    content += '`'
  }
  return content
}

function fixLinks(content: string): string {
  const linkTextRegex = /\[([^\]]*)$/
  if (linkTextRegex.test(content)) {
    content += ']'
  }

  const linkURLRegex = /\]\(([^)]*)$/
  if (linkURLRegex.test(content)) {
    content += ')'
  }

  return content
}

function fixImages(content: string): string {
  const imageAltTextRegex = /!\[([^\]]*)$/
  if (imageAltTextRegex.test(content)) {
    content += ']'
  }

  const imageURLRegex = /!\[[^\]]*\]\(([^)]*)$/
  if (imageURLRegex.test(content)) {
    content += ')'
  }

  return content
}

function fixEmphasis(content: string): string {
  const tokens = ['***', '**', '__', '*', '_', '~~', '~']
  const stack: { token: string; index: number }[] = []

  let i = 0
  while (i < content.length) {
    let matched = false
    for (const token of tokens) {
      if (content.substr(i, token.length) === token) {
        if (stack.length > 0 && stack[stack.length - 1].token === token) {
          stack.pop()
        } else {
          stack.push({ token, index: i })
        }
        i += token.length
        matched = true
        break
      }
    }
    if (!matched) {
      i++
    }
  }

  // Close any remaining tokens in reverse order
  while (stack.length > 0) {
    const { token } = stack.pop()!
    content += token
  }

  return content
}

function fixTables(content: string): string {
  const lines = content.split('\n')
  let inTable = false
  let headerPipeCount = 0
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (/^\s*\|.*$/.test(line)) {
      if (!inTable) {
        if (i + 1 < lines.length && /^\s*\|[-\s|:]*$/.test(lines[i + 1])) {
          inTable = true
          headerPipeCount = (lines[i].match(/\|/g) || []).length
          i += 1 // Move to separator line
        } else {
          i += 1
          continue
        }
      } else {
        const linePipeCount = (line.match(/\|/g) || []).length
        if (linePipeCount < headerPipeCount) {
          const missingPipes = headerPipeCount - linePipeCount
          lines[i] = line.trimEnd() + ' |'.repeat(missingPipes)
        }
      }
    } else {
      inTable = false
      headerPipeCount = 0
    }
    i += 1
  }
  return lines.join('\n')
}
