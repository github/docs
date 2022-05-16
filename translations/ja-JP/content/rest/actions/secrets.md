---
title: GitHub Actionsのシークレット
allowTitleToDifferFromFilename: true
shortTitle: シークレット
intro: '{% data variables.product.prodname_actions %} Secrets APIを使うと、{% data variables.product.prodname_actions %}ワークフローで利用できる暗号化されたシークレットに関する情報を作成、更新、削除、取得できます。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Secrets APIについて

{% data variables.product.prodname_actions %} Secrets APIを使うと、{% data variables.product.prodname_actions %}ワークフローで利用できる暗号化されたシークレットに関する情報を作成、更新、削除、取得できます。 {% data reusables.actions.about-secrets %} 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}がこのAPIを使うためには`secrets`権限を持っていなければなりません。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
