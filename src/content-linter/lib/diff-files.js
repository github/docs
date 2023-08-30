import fs from 'fs'

// The reason we're not manually doing a spawned subprocess
// of `git diff --name-only ...` or something here is because that stuff
// is unpredictable in GitHub Actions because of how it does `git clone`.
// So we rely on environment variables instead.

export function getDiffFiles() {
  // Instead of testing every single file possible, if there's
  // an environment variable called `DIFF_FILES` or one called
  // `DIFF_FILE` then use that.
  // If `DIFF_FILES` is set, it's expected to be a space separated
  // string. If `DIFF_FILE` is set, it's expected to be a text file
  // which contains a space separated string.
  const diffFiles = []
  // Setting an environment varible called `DIFF_FILES` is optional.
  // But if and only if it's set, we will respect it.
  // And if it set, turn it into a cleaned up Set so it's made available
  // every time we use it.
  // Alternatively, you can put all the files change changed into a
  // text file and do `export DIFF_FILE=files-that-changed.txt`
  if (process.env.DIFF_FILES) {
    diffFiles.push(...process.env.DIFF_FILES.trim().split(/\s+/g))
  } else if (process.env.DIFF_FILE) {
    diffFiles.push(...fs.readFileSync(process.env.DIFF_FILE, 'utf-8').trim().split(/\s+/g))
  }

  return diffFiles
}
