---
title: セルフホストランナー
intro: セルフホストランナー API では、自分のホストランナーの登録、表示、削除ができます。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## セルフホストランナー

セルフホストランナー API では、自分のホストランナーの登録、表示、削除ができます。 {% data reusables.actions.about-self-hosted-runners %} 詳しい情報については「[自分のランナーのホスト](/actions/hosting-your-own-runners)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `administration` permission for repositories the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises to use this API.
