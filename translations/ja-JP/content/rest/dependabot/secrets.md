---
title: Dependabot secrets
shortTitle: シークレット
intro: 'With the {% data variables.product.prodname_dependabot %} secrets API, you can manage and control {% data variables.product.prodname_dependabot %} secrets for an organization or repository.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## About the {% data variables.product.prodname_dependabot %} secrets API

The {% data variables.product.prodname_dependabot %} secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} 詳しい情報については「[Dependabotの暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}がこのAPIを使うには、`dependabot_secrets`権限を持っていなければなりません。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
