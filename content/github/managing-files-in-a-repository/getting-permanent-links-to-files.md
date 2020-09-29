---
title: Getting permanent links to files
intro: 'When viewing a file on {% data variables.product.product_location %}, you can press the "y" key to update the URL to a permalink to the exact version of the file you see.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file/
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url/
  - /articles/getting-permanent-links-to-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tip**: Press "?" on any page in {% data variables.product.product_name %} to see all available keyboard shortcuts.

{% endtip %}

### File views show the latest version on a branch

When viewing a file on {% data variables.product.product_location %}, you usually see the version at the current head of a branch.  For example:

* [https://github.com/github/hubot/blob/**master**/README.md](https://github.com/github/hubot/blob/master/README.md)

refers to GitHub's `hubot` repository, and shows the `master` branch's current version of the `README.md` file.

The version of a file at the head of branch can change as new commits are made, so if you were to copy the normal URL, the file contents might not be the same when someone looks at it later.

### Press <kbd>y</kbd> to permalink to a file in a specific commit

For a permanent link to the specific version of a file that you see, instead of using a branch name in the URL (i.e. the `master` part in the example above), put a commit id.  This will permanently link to the exact version of the file in that commit.  For example:

* [https://github.com/github/hubot/blob/**ed25584f5ac2520a6c28547ffd0961c7abd7ea49**/README.md](https://github.com/github/hubot/blob/ed25584f5ac2520a6c28547ffd0961c7abd7ea49/README.md)

replaces `master` with a specific commit id and the file content will not change.

Looking up the commit SHA by hand is inconvenient, however, so as a shortcut you can type <kbd>y</kbd> to automatically update the URL to the permalink version.  Then you can copy the URL knowing that anyone you share it with will see exactly what you saw.

{% tip %}

**Tip**: You can put any identifier that can be resolved to a commit in the URL, including branch names, specific commit SHAs, or tags!

{% endtip %}

### Creating a permanent link to a code snippet

You can create a permanent link to a specific line or range of lines of code in a specific version of a file or pull request. For more information, see "[Creating a permanent link to a code snippet](/articles/creating-a-permanent-link-to-a-code-snippet/)."

### Further reading

- "[Archiving a GitHub repository](/articles/archiving-a-github-repository)"
