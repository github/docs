---
title: Dealing with special characters in branch and tag names
intro: 'Git is very permissive about what characters are allowed in branch and tag names. When using Git from a command-line shell, you may need to deal with special characters by using escaping or quoting.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Special characters in names
---
Most repositories use simple branch names like `main` or `update-icons`. Likewise, tag names usually follow a basic format, such as a version number like `v1.2.3`. Both branch and tag names may also use the path separator (`/`) for structure (for example, `area/item`, or `level-1/level-2/level-3`). Apart from a handful of exceptions &mdash; such as not starting or ending a name with a slash, or having consecutive slashes in the name &mdash; Git places very few [restrictions on what characters may be used](https://git-scm.com/docs/git-check-ref-format) on what characters may be used.

As such, you may encounter a branch or tag name with characters that have special meaning for your command-line shell. These characters will need to be quoted or escaped in order for you to use them safely with a Git command, otherwise running the command may have unintended effects. For example, the `$` symbol is used by many shells to refer to a variable. This means that most shells would interpret a valid branch name like `hello-$USER` as equivalent to the word "hello", followed by a hyphen, followed by the current value of the `USER` variable, rather than as the literal string `hello-$USER`. If the branch name includes a literal dollar sign, then, we need to stop the shell from expanding the variable reference. Similarly, if a branch name contains a semi-colon (`;`), most shells would interpret that as a command separator, so we would need to quote or escape the name appropriately.

Most branch and tag names with special characters can be handled by wrapping the name in single quotes:

* In the [Bash](https://www.gnu.org/software/bash/) shell, enclosing a string of characters in single quotes preserves the literal value of the characters within the single quotes (but note, you cannot include a single quote inside a single-quoted string).
* [Zsh](https://www.zsh.org/) behaves similarly to Bash, in that single quotes turn off the special behavior of most characters inside them (although, note that this behavior is configurable via the `RC_QUOTES` option).
* [PowerShell](https://microsoft.com/powershell) likewise treats characters verbatim when inside single quotes.

For these shells, the main exception is when the name itself contains a single quote. For edge cases like this, it is best to consult the official documentation provided with your shell. Starting points for some common shells include:

* [Bash documentation](https://www.gnu.org/software/bash/manual/)
* [Zsh documentation](https://zsh.sourceforge.io/Doc/)
* [Fish documentation](https://fishshell.com/docs/current/)
* [PowerShell documentation](https://docs.microsoft.com/en-gb/powershell/)

If possible, it's best to select branch and tag names that don't require users to deal with these kinds of concerns. A safe, conservative default set of characters from which to create names is the English alphabet, numbers, and a limited set of punctuation characters: period (`.`), hyphen (`-`), underscore (`_`), and forward slash (`/`). To avoid confusion, it is best to start branch names with a letter.
