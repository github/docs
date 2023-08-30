export function testOptions(rule, module, fixtureFile) {
  const config = {
    default: false,
    [rule]: true,
  }

  const options = {
    files: [fixtureFile],
    customRules: [module],
    config,
  }
  return options
}
