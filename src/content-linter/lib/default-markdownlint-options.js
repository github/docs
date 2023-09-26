export function testOptions(rule, module, { strings, files, testConfig }) {
  const config = {
    default: false,
    [rule]: testConfig || true,
  }

  const options = {
    customRules: [module],
    config,
  }
  if (strings) options.strings = strings
  if (files) options.files = files
  return options
}
