---
title: セルフホストランナー
intro: セルフホストランナー API を使うと、セルフホストランナーの登録、表示、削除ができます。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## セルフホストランナーAPIについて

セルフホストランナー API を使うと、セルフホストランナーの登録、表示、削除ができます。 {% data reusables.actions.about-self-hosted-runners %} 詳しい情報については「[自分のランナーのホスト](/actions/hosting-your-own-runners)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}は、リポジトリに対する`administration`権限もしくはOrganizationに対する`organization_self_hosted_runners`権限を持っていなければなりません。 認証されたユーザがこのAPIを使うためには、リポジトリもしくはOrganizationに対する管理アクセス、あるいはEnterpriseに対する`manage_runners:enterprise`スコープを持っていなければなりません。
