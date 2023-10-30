import { runRule } from '../../lib/init-test.js'
import { imageFileKebabCase } from '../../lib/linting-rules/image-file-kebab-case.js'

describe(imageFileKebabCase.names.join(' - '), () => {
  test('image file not using lowercase kebab case fails', async () => {
    const markdown = [
      '# Heading',
      '',
      '![Image.](/path/to/imageFile.jpg)',
      '![Image.](image_file.jpg)',
      '![Image.](imageFile-Location.png)',
      '![Image.](image-file-Location.jpg)',
    ].join('\n')
    const result = await runRule(imageFileKebabCase, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors.map((error) => error.lineNumber)).toEqual([3, 4, 5, 6])
    expect(errors[0].errorRange).toEqual([20, 9])
    expect(errors[1].errorRange).toEqual([11, 10])
  })
  test('image file using lowercase kebab case passes', async () => {
    const markdown = ['![Image.](image-file.jpg)'].join('\n')
    const result = await runRule(imageFileKebabCase, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
