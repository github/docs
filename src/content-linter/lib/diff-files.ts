import fs from 'fs'

// GitHub Actions checkouts make spawned git diff output unpredictable, so use
// DIFF_FILES for a space-separated list or DIFF_FILE for a file containing that list.
export function getDiffFiles(): string[] {
  const diffFiles: string[] = []
  if (process.env.DIFF_FILES) {
    diffFiles.push(...process.env.DIFF_FILES.trim().split(/\s+/g))
  } else if (process.env.DIFF_FILE) {
    diffFiles.push(...fs.readFileSync(process.env.DIFF_FILE, 'utf-8').trim().split(/\s+/g))
  }

  return diffFiles
}
