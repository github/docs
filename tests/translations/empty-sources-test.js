import {execSync} from 'child_process'

describe('source directories', () => {
  // crowdin upload sources command fails if there are empty source files
  // please refer to crowdin-support #117 for more details
  it('should not contain empty files', () => {
    const command = "find content data -type f -empty"
    const emptyFiles = execSync(command).toString().split("\n")
    const disallowedEmptyFiles = emptyFiles.filter(file => file.match(/\.(yml|md)$/))

    expect(disallowedEmptyFiles).toEqual([])
  })
})
