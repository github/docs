import cheerio from 'cheerio'

const NEXT_DATA_QUERY = 'script#__NEXT_DATA__'
const PRIMER_DATA_QUERY = 'script#__PRIMER_DATA__'

function getScriptData($: ReturnType<typeof cheerio.load>, key: string): unknown {
  const data = $(key)
  if (data.length !== 1) {
    throw new Error(`Not exactly 1 element match for '${key}'. Found ${data.length}`)
  }
  const element = data.get()[0]
  if (element && 'children' in element) {
    const firstChild = element.children[0]
    if (firstChild && 'data' in firstChild) {
      return JSON.parse(firstChild.data as string)
    }
  }
  throw new Error(`Could not extract data from '${key}'`)
}

export const getNextData = ($: ReturnType<typeof cheerio.load>): unknown =>
  getScriptData($, NEXT_DATA_QUERY)
export const getPrimerData = ($: ReturnType<typeof cheerio.load>): unknown =>
  getScriptData($, PRIMER_DATA_QUERY)
