const NEXT_DATA_QUERY = 'script#__NEXT_DATA__'
const PRIMER_DATA_QUERY = 'script#__PRIMER_DATA__'

function getScriptData($, key) {
  const data = $(key)
  if (!data.length === 1) {
    throw new Error(`Not exactly 1 element match for '${key}'. Found ${data.length}`)
  }
  return JSON.parse(data.get()[0].children[0].data)
}

export const getNextData = ($) => getScriptData($, NEXT_DATA_QUERY)
export const getPrimerData = ($) => getScriptData($, PRIMER_DATA_QUERY)
