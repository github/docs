const NEXT_DATA_QUERY = 'script#__NEXT_DATA__'
const PRIMER_DATA_QUERY = 'script#__PRIMER_DATA__'

// Using any type for $ parameter as it represents a jQuery-like selector (cheerio)
function getScriptData($: any, key: string): any {
  const data = $(key)
  if (data.length !== 1) {
    throw new Error(`Not exactly 1 element match for '${key}'. Found ${data.length}`)
  }
  return JSON.parse(data.get()[0].children[0].data)
}

// Using any types for cheerio/jQuery-like objects and parsed JSON data
export const getNextData = ($: any): any => getScriptData($, NEXT_DATA_QUERY)
export const getPrimerData = ($: any): any => getScriptData($, PRIMER_DATA_QUERY)
