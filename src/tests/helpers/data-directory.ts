import fs from 'fs'
import os from 'os'
import path from 'path'

import yaml from 'js-yaml'

interface DataStructure {
  [key: string]: string | DataStructure
}

// This helper class exists so you can create a temporary root directory
// full of data files.
// For example, if you want to unit test with files that are not part
// of the git repo but should only "temporarily" exist for the duration
// of the tests.
// This class takes an object and generates that as files on disk. E.g.
//
//    const dataDirectory = new DataDirectory({
//      data: {
//        reusables: {
//          example: 'a rose by any other name\nwould smell as sweet',
//        },
//      },
//    })
//    process.env.ROOT = dataDirectory.root
//    ...
//    try {
//        ...unit tests here...
//    } finally {
//      dataDirectory.destroy()
//    }
//
// Note that it's very specific about keys. For example, if the nested
// object has a key called 'ui' it doesn't create a deeper nested structure
// but takes the nested structure and writes it to a single .yml file.
// For example:
//
//    const dataDirectory = new DataDirectory({
//      data: {
//        ui: {
//          key: "Value",
//          deep: {
//            er: "Stuff"
//
// will create a single <tempdir>/data/ui.yml file.
//
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
          // Using 'as' assertion because we know value must be an object when it's not a string in reusables context
          this.create(value as DataStructure, path.join(here, key), false, true)
        }
      } else if (isVariables) {
        fs.writeFileSync(path.join(here, `${key}.yml`), yaml.dump(value), 'utf-8')
      } else {
        if (key === 'ui') {
          fs.writeFileSync(path.join(here, `${key}.yml`), yaml.dump(value), 'utf-8')
        } else {
          const there = path.join(here, key)
          fs.mkdirSync(there)
          // Using 'as' assertions because nested directory values are always objects, not strings
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
