import path from 'path'
import { escapeRegExp } from 'lodash-es'
/* eslint-disable prefer-regex-literals */

// slash at the beginning of a filename
const leadingPathSeparator = new RegExp(`^${escapeRegExp(path.sep)}`)
const windowsLeadingPathSeparator = new RegExp('^/')

// all slashes in the filename. path.sep is OS agnostic (windows, mac, etc)
const pathSeparator = new RegExp(escapeRegExp(path.sep), 'g')
const windowsPathSeparator = new RegExp('/', 'g')

// handle MS Windows style double-backslashed filenames
const windowsDoubleSlashSeparator = new RegExp('\\\\', 'g')

// derive `foo.bar.baz` object key from `foo/bar/baz.yml` filename
export default function filenameToKey(filename) {
  const extension = new RegExp(`${path.extname(filename)}$`)
  const key = filename
    .replace(extension, '')
    .replace(leadingPathSeparator, '')
    .replace(windowsLeadingPathSeparator, '')
    .replace(pathSeparator, '.')
    .replace(windowsPathSeparator, '.')
    .replace(windowsDoubleSlashSeparator, '.')

  return key
}
