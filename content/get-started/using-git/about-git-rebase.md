---
title: About Git rebase
redirect_from:
  - /rebase/
  - articles/interactive-rebase/
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: 'The `git rebase` command allows you to easily change a series of commits, modifying the history of your repository. You can reorder, edit, or squash commits together.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---
Typically, you would use `git rebase` to:

* Edit previous commit messages
* Combine multiple commits into one
* Delete or revert commits that are no longer necessary

{% warning %}

**Warning**: Because changing your commit history can make things difficult for everyone else using the repository, it's considered bad practice to rebase commits when you've already pushed to a repository. To learn how to safely rebase on {% data variables.product.product_location %}, see "[About pull request merges](/articles/about-pull-request-merges)."

{% endwarning %}

## Rebasing commits against a branch

To rebase all the commits between another branch and the current branch state, you can enter the following command in your shell (either the command prompt for Windows, or the terminal for Mac and Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

## Rebasing commits against a point in time

To rebase the last few commits in your current branch, you can enter the following command in your shell:

```shell
$ git rebase --interactive HEAD~7
```

## Commands available while rebasing

There are six commands available while rebasing:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> simply means that the commit is included. Rearranging the order of the <code>pick</code> commands changes the order of the commits when the rebase is underway. If you choose not to include a commit, you should delete the entire line. </dd>

<dt><code>reword</code></dt>
<dd>The <code>reword</code> command is similar to <code>pick</code>, but after you use it, the rebase process will pause and give you a chance to alter the commit message. Any changes made by the commit are not affected. </dd>

<dt><code>edit</code></dt>
<dd>If you choose to <code>edit</code> a commit, you'll be given the chance to amend the commit, meaning that you can add or change the commit entirely. You can also make more commits before you continue the rebase. This allows you to split a large commit into smaller ones, or, remove erroneous changes made in a commit. </dd>

<dt><code>squash</code></dt>
<dd>This command lets you combine two or more commits into a single commit. A commit is squashed into the commit above it. Git gives you the chance to write a new commit message describing both changes.</dd>

<dt><code>fixup</code></dt>
<dd>This is similar to <code>squash</code>, but the commit to be merged has its message discarded. The commit is simply merged into the commit above it, and the earlier commit's message is used to describe both changes.</dd>

<dt><code>exec</code></dt>
<dd>This lets you run arbitrary shell commands against a commit.</dd>
</dl>

## An example of using `git rebase`

No matter which command you use, Git will launch [your default text editor](/github/getting-started-with-github/associating-text-editors-with-git) and open a file that details the commits in the range you've chosen. That file looks something like this:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

Breaking this information, from top to bottom, we see that:

- Seven commits are listed, which indicates that there were seven changes between our starting point and our current branch state.
- The commits you chose to rebase are sorted in the order of the oldest changes (at the top) to the newest changes (at the bottom).
- Each line lists a command (by default, `pick`), the commit SHA, and the commit message. The entire `git rebase` procedure centers around your manipulation of these three columns. The changes you make are *rebased* onto your repository.
- After the commits, Git tells you the range of commits we're working with (`41a72e6..7b36971`).
- Finally, Git gives some help by telling you the commands that are available to you when rebasing commits.

## Further reading

- "[Using Git rebase](/articles/using-git-rebase)"
- [The "Git Branching" chapter from the _Pro Git_ book](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [The "Interactive Rebasing" chapter from the _Pro Git_ book](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- "[Squashing commits with rebase](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)"
- "[Syncing your branch](/desktop/contributing-to-projects/syncing-your-branch)" in the {% data variables.product.prodname_desktop %} documentation
