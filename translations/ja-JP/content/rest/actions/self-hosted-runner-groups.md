---
title: セルフホストランナーグループ
intro: セルフホストランナーグループ API を使用すると、セルフホストランナーのグループを管理できます。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## About the Self-hosted runner groups API

The Self-hosted runners groups API allows you manage groups of self-hosted runners. 詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}は、リポジトリに対する`administration`権限もしくはOrganizationに対する`organization_self_hosted_runners`権限を持っていなければなりません。 認証されたユーザがこのAPIを使うためには、リポジトリもしくはOrganizationに対する管理アクセス、あるいはEnterpriseに対する`manage_runners:enterprise`スコープを持っていなければなりません。
