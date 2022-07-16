---
title: リポジトリの招待
allowTitleToDifferFromFilename: true
shortTitle: 招待
intro: Repository invitations APIを使うと、リポジトリでコラボレーションするための招待の表示と管理ができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Repository invitations APIについて

Repository invitations APIを使うと、リポジトリでコラボレーションするための招待の表示と管理ができます。 招待されたユーザ (または招待されたユーザを代行する外部サービス) は、招待を受諾または拒否できます。

ユーザをコラボレータとして追加するには、代わりにCollaborators APIを使ってください。 詳しい情報については「[リポジトリコラボレータを追加する](/rest/collaborators/collaborators#add-a-repository-collaborator)」を参照してください。

`repo` スコープはコードにも招待にもアクセス権を付与するのに対し、`repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) は招待のみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。
