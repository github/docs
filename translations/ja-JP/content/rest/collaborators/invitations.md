---
title: Repository invitations
allowTitleToDifferFromFilename: true
shortTitle: 招待
intro: The Repository invitations API allows you to view and manage invitations to collaborate on a repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository invitations API

The Repository invitations API allows you to view and manage invitations to collaborate on a repository. 招待されたユーザ (または招待されたユーザを代行する外部サービス) は、招待を受諾または拒否できます。

To add a user as a collaborator, use the Collaborators API instead. 詳しい情報については「[リポジトリコラボレータを追加する](/rest/collaborators/collaborators#add-a-repository-collaborator)」を参照してください。

`repo` スコープはコードにも招待にもアクセス権を付与するのに対し、`repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) は招待のみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。
