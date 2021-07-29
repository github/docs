---
title: Dealing with non-fast-forward errors
intro: 'Sometimes, Git can''t make your change to a remote repository without losing commits. When this happens, your push is refused.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

If another person has pushed to the same branch as you, Git won't be able to push your changes:

```shell
$ git push origin master
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        master -> master (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

You can fix this by [fetching and merging](/github/getting-started-with-github/getting-changes-from-a-remote-repository) the changes made on the remote branch with the changes that you have made locally:

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

Or, you can simply use `git pull` to perform both commands at once:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
