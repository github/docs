---
title: 招待
intro: Repository Invitations API を使用すると、他のユーザにリポジトリでコラボレーションするようユーザや外部サービスを招待できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

招待されたユーザ (または招待されたユーザを代行する外部サービス) は、招待を受諾または拒否できます。

`repo` スコープはコードにも招待にもアクセス権を付与するのに対し、`repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) は招待のみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。

### ユーザをリポジトリに招待する

コラボレータを追加するには、API エンドポイントを使用します。 詳しい情報については「[リポジトリコラボレータを追加する](/rest/collaborators/collaborators#add-a-repository-collaborator)」を参照してください。
