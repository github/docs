---
title: シークレット
intro: シークレット API では、暗号化されたシークレットに関する情報を作成、更新、削除、および取得できます。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.about-secrets %} 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `secrets` permission to use this API. 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
