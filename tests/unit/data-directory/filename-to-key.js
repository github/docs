import filenameToKey from '../../../lib/filename-to-key.js'

describe('filename-to-key', () => {
  test('converts filenames to object keys', () => {
    expect(filenameToKey('foo/bar/baz.txt')).toBe('foo.bar.baz')
  })

  test('ignores leading slash on filenames', () => {
    expect(filenameToKey('/foo/bar/baz.txt')).toBe('foo.bar.baz')
  })

  test('supports MS Windows paths', () => {
    expect(filenameToKey('path\\to\\file.txt')).toBe('path.to.file')
  })
})
