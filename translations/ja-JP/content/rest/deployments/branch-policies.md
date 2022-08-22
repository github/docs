---
title: デプロイメントブランチポリシー
allowTitleToDifferFromFilename: true
shortTitle: デプロイメントブランチポリシー
intro: Deployment branch policies APIを使うと、カスタムのデプロイメントブランチポリシーを管理できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Deployment branch policies APIについて

Deployment branch policies APIを使うと、環境へデプロイするためにブランチがマッチしなければならないカスタムの名前パターンを指定できます。 これらのエンドポイントを使うためには、環境の`deployment_branch_policy.custom_branch_policies`は`true`に設定しなければなりません。 環境の`deployment_branch_policy`を更新するには、「[環境の作成もしくは更新](/rest/deployments/environments#create-or-update-an-environment)」を参照してください。

特定のブランチに環境のデプロイメントを制限することに関する詳しい情報については「[デプロイメントのための環境の利用](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)」を参照してください。
