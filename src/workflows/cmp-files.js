#!/usr/bin/env node

// [start-readme]
//
// Given N files. Exit 0 if they all exist and are identical in content.
//
// [end-readme]

import fs from 'fs'

import { program } from 'commander'

program.description('Compare N files').arguments('[files...]', '').parse(process.argv)

main(program.args)

function main(files) {
  if (files.length < 2) throw new Error('Must be at least 2 files')
  try {
    const contents = files.map((file) => fs.readFileSync(file, 'utf-8'))
    if (new Set(contents).size > 1) {
      process.exit(1)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      process.exit(1)
    } else {
      throw error
    }
  }
}
