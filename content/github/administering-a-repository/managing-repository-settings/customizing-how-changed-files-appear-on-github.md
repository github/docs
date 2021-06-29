---
title: Customizing how changed files appear on GitHub
intro: 'To keep certain files from displaying in diffs by default, or counting toward the repository language, you can mark them with the `linguist-generated` attribute in a *.gitattributes* file.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: How changed files appear
---
Use a *.gitattributes* file to mark files that match a given "pattern" with the specified attributes. A *.gitattributes* file uses the same rules for matching as _.gitignore_ files. For more information, see [PATTERN FORMAT](https://www.git-scm.com/docs/gitignore#_pattern_format) in the Git documentation.

1. Unless the *.gitattributes* file already exists, create a *.gitattributes* file in the root of the repository.
2. Use the `linguist-generated` attribute to mark or unmark paths that you would like to be ignored for the repository's language statistics and hidden by default in diffs.

  For example, to mark `search/index.json` as a generated file, add this line to *.gitattributes*:

  ```
search/index.json linguist-generated=true
  ```

## Further reading
- "[Generated code](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code)" in the Linguist documentation
- "[Creating new files](/articles/creating-new-files/)"
