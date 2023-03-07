// lightly format the schema errors object returned from ajv to connect the
// error message to where the problem is -- for example, if a top level 'date'
// property isn't correctly formatted as a date we return:
//
//   at 'date': must match format "date"
//
// if sections > features has an array of objects that must have a 'notes'
// property and we misspell the property name in the first item:
//
//   at 'sections > features > item 0': must have required property 'notes'
export const formatAjvErrors = (errors = []) => {
  return errors
    .map((errorObj) => {
      // ajv instancePath tells us in the data we're checking where there was a
      // schema error -- for release notes looks like this for example
      // `/sections/features/0` if the error is in the first feature under sections.
      const split = errorObj.instancePath.split('/')
      split.shift()

      if (split.length === 0) {
        return `at '/' (top-level): ${errorObj.message}`
      }

      const schemaErrorPath = split
        .map((item) => {
          if (!isNaN(item)) {
            return `item ${item}`
          } else {
            return item
          }
        })
        .join(' > ')

      return `at '${schemaErrorPath}': ${errorObj.message}`
    })
    .join('\n  ')
}
