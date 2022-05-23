---
title: Dependabotシークレット
shortTitle: シークレット
intro: '{% data variables.product.prodname_dependabot %}シークレットAPIを使うと、Organizationもしくはリポジトリの{% data variables.product.prodname_dependabot %}シークレットの管理と制御ができます。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## {% data variables.product.prodname_dependabot %}シークレットAPIについて

{% data variables.product.prodname_dependabot %}シークレットAPIを使うと、暗号化されたシークレットに関する情報の作成、更新、削除、取得ができます。 {% data reusables.actions.about-secrets %} 詳しい情報については「[Dependabotの暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}がこのAPIを使うには、`dependabot_secrets`権限を持っていなければなりません。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
