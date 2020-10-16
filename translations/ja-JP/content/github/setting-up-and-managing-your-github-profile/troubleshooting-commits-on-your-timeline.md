---
title: タイムライン上のコミットのトラブルシューティング
intro: 'プロフィールのタイムラインからのコミットの詳細を表示できます。 プロフィールにあるはずのコミットが表示されていない場合やプロフィールページからコミットの詳細を見つけられない場合、コミットの日付とコミット作者が異なる可能性があります。'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### コミットの詳細の表示で想定される動き

プロフィールページのタイムライン上で、特定のリポジトリの隣にあるコミットの番号をクリックすると、リポジトリで行われた特定の変更の diff を含め、その期間のコミットの詳細を表示できます。

![プロフィールタイムラインのコミットリンク](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![コミットの詳細](/assets/images/help/commits/commit-details.png)

### タイムラインのコミットにコミットの詳細がない場合

プロフィールページからコミットのリンクをクリックし、リポジトリのコミットページにあるはずのコミットが表示されていない場合、Git のコミット履歴が上書きされたかコミット作者の日付とコミット日付が異なる可能性があります。

!["no commits found for octocat" というメッセージのあるリポジトリページ](/assets/images/help/repository/no-commits-found.png)

### GitHub は Git のオーサー日付とコミット日付をどのように使っているか

Git では、オーサー日付とは、誰かが `git commit` でコミットを最初に作成した時のことです。 誰かが `git commit --amend`、フォースプッシュ、リベースや他の Git コマンドを使ってコミット日付を変えていない場合、コミット日付は、作者日付と同じになります。

プロフィールページ上では、オーサー日付は、コミットが作成された時を計算するのに使われます。 一方、リポジトリでは、コミット日付は、リポジトリでコミットがいつされたかを計算するのに使われます。

ほとんどの場合、オーサー日付とコミット日付は同じです。しかし、コミット履歴が変更された場合、コミットの順序は使いものになりません。 詳細は「[プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile)」を参照してください。

### タイムラインのコミットに見当たらないコミットの詳細の表示

`--pretty=fuller` フラグと `git show` コマンドを使って、コミット作者日付とコミット日付が異なっていないか確認できます。

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Wed Jul 13 02:02:30 2016 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Wed Jul 20 06:25:08 2016 +0900
```

作者日付とコミット日付が異なる場合は、URL のコミット日付を手動で変更して、コミットの詳細を表示できます。

例:
- この URL の作者日付は `2016-07-13`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2016-07-13T00:00:00Z&until=2016-07-13T23:59:59Z`
- この URL は、コミット日付 `2016-07-19` を使っています:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2016-07-19T00:00:00Z&until=2016-07-19T23:59:59Z`

URL をコミット日付で修正して開くと、コミットの詳細を見ることができます。

![コミットの詳細](/assets/images/help/commits/commit-details.png)

### タイムラインにあるはずのコミットがない場合

タイムラインにあるはずのコミットがない場合、Git のコミット履歴が書き換えられたか、コミット作者日付とコミット日付が異なる可能性があります。 他の可能性については、「[プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile)」を参照してください。
