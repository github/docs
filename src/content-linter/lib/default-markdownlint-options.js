export function testOptions(rule, module, strings) {
  const config = {
    default: false,
    [rule]: true,
  }

  const options = {
    strings,
    customRules: [module],
    config,
  }
  return options
}
