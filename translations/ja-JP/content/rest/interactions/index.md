---
title: インタラクション
intro: Interactions APIを使うと、オーナーもしくは管理アクセスを持つ人が、Organizationやリポジトリ内のユーザの操作制限を設定できます。
redirect_from:
  - /v3/interactions
  - /rest/reference/interactions
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /orgs
  - /repos
  - /user
---

リポジトリに対するインタラクションには、コミット、Issueのオープン、プルリクエストの作成があります。 インタラクションAPIを使用すると、オーナーまたは管理者アクセス権のあるユーザはパブリックリポジトリの操作を一時的に特定のユーザのタイプに制限することができます。
