// When streaming markdown response, e.g., from a GPT, the response will come in chunks that may have opening tags but no closing tags.
// This function seeks to fix the partial markdown by closing the tags it detects.
export function fixIncompleteMarkdown(content: string): string {
  // First, fix code blocks
  content = fixCodeBlocks(content)

  // Then, fix inline code
  content = fixInlineCode(content)

  // Then, fix links
  content = fixLinks(content)

  // Then, fix images
  content = fixImages(content)

  // Then, fix emphasis (bold, italic, strikethrough)
  content = fixEmphasis(content)

  // Then, fix tables
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
  // Handle unclosed link text '['
  const linkTextRegex = /\[([^\]]*)$/
  if (linkTextRegex.test(content)) {
    content += ']'
  }

  // Handle unclosed link URL '('
  const linkURLRegex = /\]\(([^)]*)$/
  if (linkURLRegex.test(content)) {
    content += ')'
  }

  return content
}

function fixImages(content: string): string {
  // Handle unclosed image alt text '!['
  const imageAltTextRegex = /!\[([^\]]*)$/
  if (imageAltTextRegex.test(content)) {
    content += ']'
  }

  // Handle unclosed image URL '('
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
          // Closing token found
          stack.pop()
        } else {
          // Opening token found
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
      // Line starts with '|', possible table line
      if (!inTable) {
        // Potential start of table
        if (i + 1 < lines.length && /^\s*\|[-\s|:]*$/.test(lines[i + 1])) {
          // Next line is separator, confirm table header
          inTable = true
          // Count number of '|' in header line
          headerPipeCount = (lines[i].match(/\|/g) || []).length
          i += 1 // Move to separator line
        } else {
          // Not a table, continue
          i += 1
          continue
        }
      } else {
        // In table body
        const linePipeCount = (line.match(/\|/g) || []).length
        if (linePipeCount < headerPipeCount) {
          // Calculate missing pipes
          const missingPipes = headerPipeCount - linePipeCount
          // Append missing ' |' to match header columns
          lines[i] = line.trimEnd() + ' |'.repeat(missingPipes)
        }
      }
    } else {
      // Exiting table
      inTable = false
      headerPipeCount = 0
    }
    i += 1
  }
  return lines.join('\n')
}
