import fs from 'fs'
import os from 'os'
import path from 'path'

import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { CRITICAL, checkFile, checkSVGContent } from '@/assets/lib/validate-asset'

const SVG_NS = 'http://www.w3.org/2000/svg'
const XHTML_NS = 'http://www.w3.org/1999/xhtml'

describe('checkSVGContent', () => {
  test('rejects a script element', () => {
    expect(() => checkSVGContent(`<svg xmlns="${SVG_NS}"><script>x()</script></svg>`)).toThrow(
      'script',
    )
  })

  test('rejects namespace-prefixed disallowed elements', () => {
    const svgs = [
      `<svg xmlns="${SVG_NS}" xmlns:h="${XHTML_NS}"><h:script>x()</h:script></svg>`,
      `<svg xmlns="${SVG_NS}" xmlns:svg="${SVG_NS}"><svg:script>x()</svg:script></svg>`,
      `<svg xmlns="${SVG_NS}" xmlns:H="${XHTML_NS}"><H:SCRIPT>x()</H:SCRIPT></svg>`,
      `<svg xmlns="${SVG_NS}" xmlns:h="${XHTML_NS}"><h:iframe src="x"/></svg>`,
    ]
    for (const svg of svgs) {
      expect(() => checkSVGContent(svg), svg).toThrow()
    }
  })

  test('rejects a script element hidden inside style', () => {
    const svg = `<svg xmlns="${SVG_NS}"><title><style><script>x()</script></style></title></svg>`
    expect(() => checkSVGContent(svg)).toThrow('script')
  })

  test('rejects event handler attributes', () => {
    expect(() => checkSVGContent(`<svg xmlns="${SVG_NS}" onload="x()"></svg>`)).toThrow('onload')
    expect(() => checkSVGContent(`<svg xmlns="${SVG_NS}" oNload="x()"></svg>`)).toThrow('oNload')
  })

  test('rejects a javascript: URL next to a differently cased duplicate attribute', () => {
    const svg = `<svg xmlns="${SVG_NS}"><a HREF="#safe" href="javascript:x()"><text>a</text></a></svg>`
    expect(() => checkSVGContent(svg)).toThrow('javascript')
  })

  test('rejects DOCTYPE declarations', () => {
    const svg = `<!DOCTYPE svg [<!ENTITY u "javascript:x()">]><svg xmlns="${SVG_NS}"><a href="&u;"><text>a</text></a></svg>`
    expect(() => checkSVGContent(svg)).toThrow('DOCTYPE')
  })

  test('rejects javascript: URLs in attribute values', () => {
    const svgs = [
      `<svg xmlns="${SVG_NS}"><a href="javascript:x()"><text>a</text></a></svg>`,
      `<svg xmlns="${SVG_NS}"><a href="java&#9;script:x()"><text>a</text></a></svg>`,
      `<svg xmlns="${SVG_NS}"><a href=" JavaScript:x()"><text>a</text></a></svg>`,
      `<svg xmlns="${SVG_NS}"><a><animate attributeName="href" values="#a;javascript:x()"/></a></svg>`,
    ]
    for (const svg of svgs) {
      expect(() => checkSVGContent(svg), svg).toThrow('javascript')
    }
  })

  test('accepts benign SVG with editor metadata', () => {
    const svg = `<svg xmlns="${SVG_NS}" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview id="base"/><a href="https://docs.github.com"><rect width="1" height="1"/></a></svg>`
    expect(() => checkSVGContent(svg)).not.toThrow()
  })
})

describe('checkFile', () => {
  let tempDirectory: string

  beforeEach(() => {
    tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'validate-asset-'))
  })

  afterEach(() => {
    fs.rmSync(tempDirectory, { recursive: true, force: true })
  })

  function writeFixture(name: string, content: string) {
    const filePath = path.join(tempDirectory, name)
    fs.writeFileSync(filePath, content)
    return filePath
  }

  test('accepts a valid lowercase .svg', async () => {
    const filePath = writeFixture('ok.svg', `<svg xmlns="${SVG_NS}"><rect/></svg>`)
    expect(await checkFile(filePath)).toBeUndefined()
  })

  test('validates SVG content when the extension is uppercase', async () => {
    const filePath = writeFixture('foo.SVG', `<svg xmlns="${SVG_NS}"><script>x()</script></svg>`)
    const result = await checkFile(filePath)
    expect(result?.[0]).toBe(CRITICAL)
  })

  test('validates raster file type when the extension is uppercase', async () => {
    const filePath = writeFixture('shot.PNG', 'not a png')
    const result = await checkFile(filePath)
    expect(result?.[0]).toBe(CRITICAL)
  })
})
