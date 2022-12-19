---
title: タイムライン上のコミットのトラブルシューティング
intro: プロフィールのタイムラインからのコミットの詳細を表示できます。 プロフィールにあるはずのコミットが表示されていない場合やプロフィールページからコミットの詳細を見つけられない場合、コミットの日付とコミット作者が異なる可能性があります。
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Troubleshoot commits
ms.openlocfilehash: 2a1c89fa158f562bc93e1c76489a077a43e410c3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079915'
---
## コミットの詳細の表示で想定される動き

プロフィールページのタイムライン上で、特定のリポジトリの隣にあるコミットの番号をクリックすると、リポジトリで行われた特定の変更の diff を含め、その期間のコミットの詳細を表示できます。

![プロフィールタイムラインのコミットリンク](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![コミットの詳細](/assets/images/help/commits/commit-details.png)

## タイムラインのコミットにコミットの詳細がない場合

プロフィールページからコミットのリンクをクリックし、リポジトリのコミットページにあるはずのコミットが表示されていない場合、Git のコミット履歴が上書きされたかコミット作者の日付とコミット日付が異なる可能性があります。

!["no commits found for octocat"(octocat のコミットが見つかりません) というメッセージのあるリポジトリ ページ](/assets/images/help/repository/no-commits-found.png)

## GitHub は Git のオーサー日付とコミット日付をどのように使っているか

Git の作成者日付とは、誰かが `git commit` を使って初めてコミットを作成したときのことです。 誰かが `git commit --amend`、フォース プッシュ、リベースなどの Git コマンドを使ってコミット日付を変えない限り、コミット日付は作成者日付と同じになります。

プロフィールページ上では、オーサー日付は、コミットが作成された時を計算するのに使われます。 一方、リポジトリでは、コミット日付は、リポジトリでコミットがいつされたかを計算するのに使われます。

ほとんどの場合、オーサー日付とコミット日付は同じです。しかし、コミット履歴が変更された場合、コミットの順序は使いものになりません。 詳細については、「[自分の投稿がプロフィールに表示されないのはなぜですか?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)」を参照してください。

## タイムラインのコミットに見当たらないコミットの詳細の表示

`--pretty=fuller` フラグを指定して `git show` コマンドを使うと、コミットの作成者日付とコミット日付が異なるかどうかを確認できます。

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

作者日付とコミット日付が異なる場合は、URL のコミット日付を手動で変更して、コミットの詳細を表示できます。

次に例を示します。
- この URL は `2018-04-03` という作成者日付を使っています。

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- この URL は `2018-04-10` というコミット日付を使っています。

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

URL をコミット日付で修正して開くと、コミットの詳細を見ることができます。

![コミットの詳細](/assets/images/help/commits/commit-details.png)

## タイムラインにあるはずのコミットがない場合

タイムラインにあるはずのコミットがない場合、Git のコミット履歴が書き換えられたか、コミット作者日付とコミット日付が異なる可能性があります。 他の可能性については、「[コントリビューションがプロファイルに表示されないのはなぜですか?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)」を参照してください
