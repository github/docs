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

export const getUserLanguage = ($) => {
  // Because the page might come from the middleware rendering cache,
  // the DOM won't get updated until the first client-side React render.
  // But we can assert the data that would be used for that first render.
  const { props } = getNextData($)
  return props.languagesContext.userLanguage
}

export const getIsDotComAuthenticated = ($) => {
  // Because the page might come from the middleware rendering cache,
  // the DOM won't get updated until the first client-side React render.
  // But we can assert the data that would be used for that first render.
  const { props } = getNextData($)
  return props.dotComAuthenticatedContext.isDotComAuthenticated
}
