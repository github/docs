export function testOptions(rule, module, { strings, files }) {
  const config = {
    default: false,
    [rule]: true,
  }

  const options = {
    customRules: [module],
    config,
  }
  if (strings) options.strings = strings
  if (files) options.files = files
  return options
}
