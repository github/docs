import fs from 'fs/promises'
import path from 'path'

import { load } from 'cheerio'
import { fileTypeFromFile } from 'file-type'
import isSVG from 'is-svg'

const EXPECT = {
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.webp': 'image/webp',
} as Record<string, string>

export const CRITICAL = 'critical'
export const WARNING = 'warning'

export async function checkFile(filePath: string) {
  // Static file serving maps extensions case-insensitively, so .SVG is still served as SVG.
  const ext = path.extname(filePath).toLowerCase()

  const { size } = await fs.stat(filePath)
  if (!size) {
    return [CRITICAL, filePath, 'file is 0 bytes']
  }

  if (ext === '.svg') {
    // fileTypeFromFile cannot validate SVG, so parse the text content.
    const content = await fs.readFile(filePath, 'utf-8')
    if (!content.trim()) {
      return [CRITICAL, filePath, 'file is empty']
    }
    if (!isSVG(content)) {
      return [CRITICAL, filePath, 'not a valid SVG file']
    }
    try {
      checkSVGContent(content)
    } catch (error: unknown) {
      return [CRITICAL, filePath, error instanceof Error ? error.message : String(error)]
    }
  } else if (EXPECT[ext]) {
    const fileType = await fileTypeFromFile(filePath)
    if (!fileType) {
      return [CRITICAL, filePath, "can't extract file type"]
    }
    const { mime } = fileType
    const expect = EXPECT[ext]
    if (expect !== mime) {
      return [CRITICAL, filePath, `Expected mime type '${expect}' but was '${mime}'`]
    }
  } else if (!ext) {
    return [WARNING, filePath, 'Has no file extension']
  } else {
    return [WARNING, filePath, `Don't know how to validate '${ext}'`]
  }
}

export function checkSVGContent(content: string) {
  // Cheerio does not expand custom entities, so a DOCTYPE could hide values from the checks below.
  if (/<!DOCTYPE/i.test(content)) {
    throw new Error('contains a DOCTYPE declaration')
  }
  // Browsers parse .svg files as XML, and HTML rules can drop duplicate attributes or turn elements into text.
  const $ = load(content, { xml: true })
  const disallowedTagNames = new Set(['script', 'object', 'iframe', 'embed'])
  $('*').each((i, element) => {
    const el = $(element).get(0)
    if (!el || !('tagName' in el)) return
    const { tagName } = el
    // Browsers parse .svg files as XML and resolve prefixes such as <h:script>, so compare the local name.
    const localName = tagName.toLowerCase().split(':').pop() || ''
    if (disallowedTagNames.has(localName)) {
      throw new Error(`contains a <${tagName}> tag`)
    }
    const attribs: Record<string, string> = 'attribs' in el ? el.attribs : {}
    for (const [key, value] of Object.entries(attribs)) {
      // XML mode keeps attribute case, so match event handlers such as oNload case-insensitively.
      if (/(\\x[a-f0-9]{2}|\b)on\w+/i.test(key)) {
        throw new Error(`<${tagName}> contains an unsafe attribute: '${key}'`)
      }
      // URL parsers ignore ASCII whitespace and control characters inside the scheme.
      const compactValue = Array.from(value)
        .filter((char) => char > ' ')
        .join('')
      if (/javascript:/i.test(compactValue)) {
        throw new Error(`<${tagName}> contains a javascript: URL in '${key}'`)
      }
    }
  })
}
