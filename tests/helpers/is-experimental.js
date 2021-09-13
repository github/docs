const experimentalFiles = [
  'actions/guides/building-and-testing-nodejs.md',
  'actions/guides/building-and-testing-python.md',
]

export const isExperimental = (path) => {
  return experimentalFiles.includes(path)
}
