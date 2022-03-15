#!/usr/bin/env node

// [start-readme]
//
// It runs the warmServer() function because that function can do things
// like writing to disk as a caching mechanism.
// When jest runs tests, it starts multiple concurrent processes,
// even if it runs it serially (`--runInBand`) so it's highly likely
// that two concurrent processes both attempt to writing to
// the same exact file. By running this script before anything
// begins, we can be certain that files that should have been created
// are created.
//
// [end-readme]

import warmServer from '../lib/warm-server.js'

main()

async function main() {
  await warmServer()
}
