---
title: Dealing with non-fast-forward errors
intro: 'Sometimes, Git can''t make your change to a remote repository without losing commits. When this happens, your push is refused.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/using-git/dealing-with-non-fast-forward-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Non-fast-forward error
---
If another person has pushed to the same branch as you, Git won't be able to push your changes:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

You can fix this by [fetching and merging](/get-started/using-git/getting-changes-from-a-remote-repository) the changes made on the remote branch with the changes that you have made locally:

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin YOUR_BRANCH_NAME
# Merges updates made online with your local work
```

Or, you can simply use `git pull` to perform both commands at once:

```shell
$ git pull origin YOUR_BRANCH_NAME
# Grabs online updates and merges them with your local work
```
