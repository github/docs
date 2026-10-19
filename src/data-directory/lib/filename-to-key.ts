import path from 'path'

const leadingPathSeparator = new RegExp(`^${RegExp.escape(path.sep)}`)
const windowsLeadingPathSeparator = new RegExp('^/')

// path.sep handles the current OS; the slash and backslash regexes handle paths from other systems.
const pathSeparator = new RegExp(RegExp.escape(path.sep), 'g')
const windowsPathSeparator = new RegExp('/', 'g')

const windowsDoubleSlashSeparator = new RegExp('\\\\', 'g')

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
