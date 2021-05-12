---
title: non-fast-forward エラーの扱い
intro: 時として、Git はリモートリポジトリへの変更の際、コミットに失敗することがあります。 その場合、プッシュが拒否されます。
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

別の人が同じブランチにすでにプッシュしてしまった場合、Git はあなたの変更をプッシュできません:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

これを修正するには、リモートブランチで行った変更を、ローカルで行った変更に[フェッチおよびマージ](/github/getting-started-with-github/getting-changes-from-a-remote-repository)します:

```shell
$ git fetch origin
# オンラインリポジトリへの更新をフェッチする
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# オンラインで行われた更新をローカル作業にマージする
```

または、単純に `git pull` を使用して両方のコマンドを一度に実行できます:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# オンライン更新をつかみ、ローカル作業にマージする
```
