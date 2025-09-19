import { describe, expect, test } from 'vitest'

import filenameToKey from '@/data-directory/lib/filename-to-key'

describe('filename-to-key', () => {
  test('converts filenames to object keys', (): void => {
    expect(filenameToKey('foo/bar/baz.txt')).toBe('foo.bar.baz')
  })

  test('ignores leading slash on filenames', (): void => {
    expect(filenameToKey('/foo/bar/baz.txt')).toBe('foo.bar.baz')
  })

  test('supports MS Windows paths', (): void => {
    expect(filenameToKey('path\\to\\file.txt')).toBe('path.to.file')
  })
})
