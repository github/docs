import fs from 'fs'
import os from 'os'
import path from 'path'

import { dump } from 'js-yaml'

interface DataStructure {
  [key: string]: string | DataStructure
}

// DataDirectory builds a temporary data root for tests that need files outside the repository.
// It writes nested data objects to disk, then destroy removes the temp root.
// Example: new DataDirectory({ data: { reusables: { example: 'temporary text' } } }).
// Point ROOT at dataDirectory.root during the test, then call dataDirectory.destroy().
// Special keys match production data conventions: ui writes data/ui.yml, variables write .yml
// files, and reusables write .md files.
export class DataDirectory {
  root: string

  constructor(data: DataStructure, root?: string) {
    this.root = root || this.createTempRoot('data-directory')
    this.create(data)
  }

  createTempRoot(prefix: string): string {
    const fullPath = path.join(os.tmpdir(), prefix)
    return fs.mkdtempSync(fullPath)
  }

  create(
    data: DataStructure,
    root: string | null = null,
    isVariables = false,
    isReusables = false,
  ): void {
    const here = root || this.root

    for (const [key, value] of Object.entries(data)) {
      if (isReusables) {
        if (typeof value === 'string') {
          fs.writeFileSync(path.join(here, `${key}.md`), value, 'utf-8')
        } else {
          fs.mkdirSync(path.join(here, key))
          // The reusables branch already ruled out strings.
          this.create(value as DataStructure, path.join(here, key), false, true)
        }
      } else if (isVariables) {
        fs.writeFileSync(path.join(here, `${key}.yml`), dump(value), 'utf-8')
      } else {
        if (key === 'ui') {
          fs.writeFileSync(path.join(here, `${key}.yml`), dump(value), 'utf-8')
        } else {
          const there = path.join(here, key)
          fs.mkdirSync(there)
          // Nested directory branches only handle objects.
          if (key === 'reusables') {
            this.create(value as DataStructure, there, false, true)
          } else if (key === 'variables') {
            this.create(value as DataStructure, there, true, false)
          } else {
            this.create(value as DataStructure, there)
          }
        }
      }
    }
  }

  destroy(): void {
    fs.rmSync(this.root, { recursive: true })
  }
}
