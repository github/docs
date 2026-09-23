import path from 'path'

const leadingPathSeparator = new RegExp(`^${RegExp.escape(path.sep)}`)
const windowsLeadingPathSeparator = new RegExp('^/')

// all slashes in the filename. path.sep is OS agnostic (windows, mac, etc)
const pathSeparator = new RegExp(RegExp.escape(path.sep), 'g')
const windowsPathSeparator = new RegExp('/', 'g')

// handle MS Windows style double-backslashed filenames
const windowsDoubleSlashSeparator = new RegExp('\\\\', 'g')

// derive `foo.bar.baz` object key from `foo/bar/baz.yml` filename
export default function filenameToKey(filename: string): string {
  const extension = new RegExp(`${RegExp.escape(path.extname(filename))}$`)
  const key = filename
    .replace(extension, '')
    .replace(leadingPathSeparator, '')
    .replace(windowsLeadingPathSeparator, '')
    .replace(pathSeparator, '.')
    .replace(windowsPathSeparator, '.')
    .replace(windowsDoubleSlashSeparator, '.')

  return key
}
