---
title: GitHub Actions Secrets
allowTitleToDifferFromFilename: true
shortTitle: シークレット
intro: 'The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Secrets API

The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows. {% data reusables.actions.about-secrets %} 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}がこのAPIを使うためには`secrets`権限を持っていなければなりません。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
