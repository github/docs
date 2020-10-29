---
title: Pushing commits to a remote repository
intro: Use `git push` to push commits made on your local branch to a remote repository.
redirect_from:
  - /articles/pushing-to-a-remote/
  - /articles/pushing-commits-to-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

The `git push` command takes two arguments:

* A remote name, for example, `origin`
* A branch name, for example, `master`

Например:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

As an example, you usually run `git push origin master` to push your local changes to your online repository.

### Renaming branches

To rename a branch, you'd use the same `git push` command, but you would add one more argument: the name of the new branch. Например:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

This pushes the `LOCALBRANCHNAME` to your `REMOTENAME`, but it is renamed to `REMOTEBRANCHNAME`.

### Dealing with "non-fast-forward" errors

If your local copy of a repository is out of sync with, or "behind," the upstream repository you're pushing to, you'll get a message saying `non-fast-forward updates were rejected`. This means that you must retrieve, or "fetch," the upstream changes, before you are able to push your local changes.

For more information on this error, see "[Dealing with non-fast-forward errors](/articles/dealing-with-non-fast-forward-errors)."

### Pushing tags

By default, and without additional parameters, `git push` sends all matching branches that have the same names as remote branches.

To push a single tag, you can issue the same command as pushing a branch:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

To push all your tags, you can type the command:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

### Deleting a remote branch or tag

The syntax to delete a branch is a bit arcane at first glance:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Note that there is a space before the colon. The command resembles the same steps you'd take to rename a branch. However, here, you're telling Git to push _nothing_ into `BRANCHNAME` on `REMOTENAME`. Because of this, `git push` deletes the branch on the remote repository.

### Remotes and forks

You might already know that [you can "fork" repositories](https://guides.github.com/overviews/forking/) on GitHub.

When you clone a repository you own, you provide it with a remote URL that tells Git where to fetch and push updates. If you want to collaborate with the original repository, you'd add a new remote URL, typically called `upstream`, to your local Git clone:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Now, you can fetch updates and branches from *their* fork:

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      master     -> upstream/master
```

When you're done making local changes, you can push your local branch to GitHub and [initiate a pull request](/articles/about-pull-requests).

For more information on working with forks, see "[Syncing a fork](/articles/syncing-a-fork)".

### Дополнительная литература

- [The "Remotes" chapter from the "Pro Git" book](https://git-scm.com/book/ch5-2.html)
- [`git remote` man page](https://git-scm.com/docs/git-remote.html)
- "[Git cheatsheet](/articles/git-cheatsheet)"
- "[Git workflows](/articles/git-workflows)"
- "[Git Handbook](https://guides.github.com/introduction/git-handbook/)"
