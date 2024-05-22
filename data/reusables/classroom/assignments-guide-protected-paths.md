If your assignment has files or directories that are used in the grading process or otherwise shouldn't be edited by students, you can designate them as protected file paths. If a student edits a protected file, a label will be applied to their submission on the assignment overview page for you to investigate. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/monitor-students-progress-with-the-assignment-overview-page)."

The patterns for protected paths follow rules similar to shell filename globs. It may contain the following meta-characters:

- `*`: Matches any file. For example, `*` matches all regular files, `foo*` matches all files beginning with `foo`, `*foo` matches all files ending with `foo`, and `*foo*` matches all files whose names contain `foo` (including at the beginning or end)
- `**`: Matches directories recursively or files expansively. For example, `.github/**/*` will match all files in `.github` and any of its subdirectories
- `?`: Matches any one character
- `[set]`: Matches any one character in `set`(including sets like `a-z`)
- `\`: Escapes the next meta-character
