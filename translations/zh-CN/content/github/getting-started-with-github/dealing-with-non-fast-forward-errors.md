---
title: 处理非快进错误
intro: '有时，Git 无法在不丢失提交的情况下对远程仓库进行更改。 发生此情况时，推送会被拒绝。'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

如果其他人已推送与您相同的分支，Git 将无法推送您的更改：

```shell
$ git push origin master
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        master -> master（非快进）
> 错误：无法推送某些 ref 至 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> 为防止丢失历史记录，非快进更新已被拒绝
> 再次推送前合并远程更改（例如： ‘git pull’）。 [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  请参阅
> “git 推送帮助”部分的“快进说明”以了解详细信息。
```

通过[获取和合并](/github/getting-started-with-github/getting-changes-from-a-remote-repository)远程分支上所做更改与本地所做更改，您可以解决此问题：

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

或者，可以只是使用 `git pull` 一次性执行两个命令：

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
