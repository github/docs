import { writeFileSync, readFileSync, existsSync } from 'fs'

type ApiDoc = {
  method: string
  path: string
  description: string
  params: string[]
  returns: string
  examples: string
  throws: string[]
}

function main({ sources, outputPath }: { sources: string[]; outputPath: string }): void {
  const allDocs = sources.flatMap((sourcePath) => extractApiDocs(sourcePath))

  const markdown = generateMarkdown(allDocs)

  updateReadme(outputPath, markdown)

  console.log('API documentation generated successfully!')
}

function extractApiDocs(file: string): ApiDoc[] {
  const apiDocs: ApiDoc[] = []

  const content = readFileSync(file, 'utf8')

  // Get the router method definitions with JSDOC-style comments
  const routeRegex =
    /\/\*\*\s*([\s\S]*?)\s*\*\/\s*router\.(get|post|put|delete)\s*\(\s*['"]([^'"]*)['"]/g
  let match

  while ((match = routeRegex.exec(content)) !== null) {
    const commentBlock = match[1]
    const method = match[2]
    const path = match[3]

    const description = commentBlock
      .trim()
      .split('\n')[0]
      .trim()
      .replace(/^\*\s*/, '')

    // We currently support params, returns, examples, and throws.
    const params = extractParams(commentBlock)
    const returns = extractReturns(commentBlock)
    const examples = extractExample(commentBlock)
    const throws = extractThrows(commentBlock)

    apiDocs.push({
      method, // GET, POST, etc
      path: file.includes('article.ts') ? `/api/article${path}` : `/api/pagelist${path}`, // Prepend base path
      description, // defined in the top of the block comment
      params, // defined from @params
      returns, // defined from @returns
      examples, // defined from @example
      throws, // defined from @throws
    })
  }

  return apiDocs
}

function extractThrows(commentBlock: string): string[] {
  const throwsRegex = /@throws\s+{([^}]+)}\s+([^\n]+)/g
  const throws: string[] = []

  let throwsMatch
  while ((throwsMatch = throwsRegex.exec(commentBlock)) !== null) {
    const type = throwsMatch[1]
    const desc = throwsMatch[2].trim()
    throws.push(`- (${type}): ${desc}`)
  }

  return throws
}

function extractParams(commentBlock: string): string[] {
  const paramRegex = /@param\s+{([^}]+)}\s+([^\s]+)\s+([^\n]+)/g
  const params: string[] = []

  let paramMatch
  while ((paramMatch = paramRegex.exec(commentBlock)) !== null) {
    const type = paramMatch[1]
    const name = paramMatch[2]
    const desc = paramMatch[3].trim()
    params.push(`- **${name}** (${type}) ${desc}`)
  }

  return params
}

function extractReturns(commentBlock: string): string {
  const returnMatch = commentBlock.match(/@returns\s+{([^}]+)}\s+([^\n]+)/)
  if (returnMatch) {
    const type = returnMatch[1]
    const desc = returnMatch[2].trim()
    return `**Returns**: (${type}) - ${desc}`
  }
  return ''
}

function extractExample(commentBlock: string): string {
  const exampleMatch = commentBlock.match(/@example\b([\s\S]*?)(?=\s*\*\s*@|\s*\*\/|$)/)
  if (exampleMatch) {
    // Clean up the example text by removing leading asterisks and spaces from each line, preserving tabs
    return exampleMatch[1]
      .split('\n')
      .map((line) => line.replace(/^\s*\*\s?/, ''))
      .join('\n')
      .trim()
  }
  return ''
}

function generateMarkdown(apiDocs: ApiDoc[]): string {
  let markdown = '## Reference: API endpoints\n\n'

  for (const doc of apiDocs) {
    markdown += `### ${doc.method.toUpperCase()} ${doc.path}\n\n`
    markdown += `${doc.description}\n\n`

    if (doc.params.length > 0) {
      markdown += '**Parameters**:\n'
      markdown += doc.params.join('\n')
      markdown += '\n\n'
    }

    if (doc.returns) {
      markdown += `${doc.returns}\n\n`
    }

    if (doc.throws.length > 0) {
      markdown += '**Throws**:\n'
      markdown += doc.throws.join('\n')
      markdown += '\n\n'
    }

    if (doc.examples) {
      markdown += `**Example**:\n\`\`\`\n${doc.examples}\n\`\`\`\n\n`
    }

    markdown += '---\n\n'
  }

  return markdown
}

function updateReadme(readmePath: string, markdown: string): void {
  if (existsSync(readmePath)) {
    let readme = readFileSync(readmePath, 'utf8')

    const placeholderComment = `<!-- API reference docs automatically generated, do not edit below this comment -->`

    if (readme.includes(placeholderComment)) {
      const pattern = new RegExp(`${placeholderComment}[\\s\\S]*`, 'g')
      readme = readme.replace(pattern, `${placeholderComment}\n${markdown}`)
    } else {
      readme += `\n${markdown}`
    }

    writeFileSync(readmePath, readme)
  } else {
    writeFileSync(readmePath, markdown)
  }
}

main({
  sources: ['src/article-api/middleware/article.ts', 'src/article-api/middleware/pagelist.ts'],
  outputPath: 'src/article-api/README.md',
})
