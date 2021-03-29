---
title: GitHub AE の GitHub Actions を使い始める
intro: '{% data variables.product.prodname_ghe_managed %} で {% data variables.product.prodname_actions %} を設定する方法を学びます。'
permissions: 'サイト管理者は、{% data variables.product.prodname_actions %} を有効化して、Enterprise 設定を構成できます。'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

この記事では、サイト管理者が {% data variables.product.prodname_actions %} を使用するように {% data variables.product.prodname_ghe_managed %} を設定する方法について説明しています。

### Enterprise 内の {% data variables.product.prodname_actions %} のアクセス権限を管理する

ポリシーを使用して、{% data variables.product.prodname_actions %} へのアクセスを管理できます。 詳しい情報については、「[Enterprise に GitHub Actions のポリシーを施行する](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

### ランナーを追加する

{% note %}

**Note:** To add {% data variables.actions.hosted_runner %}s to {% data variables.product.prodname_ghe_managed %}, you will need to contact {% data variables.product.prodname_dotcom %} support.

{% endnote %}

{% data variables.product.prodname_actions %} ワークフローを実行するには、ランナーを追加する必要があります。 Enterprise、Organization、またはリポジトリレベルでランナーを追加できます。 詳しい情報については、「[{% data variables.actions.hosted_runner %} について](/actions/using-github-hosted-runners/about-ae-hosted-runners)」を参照してください。


### {% data variables.product.prodname_actions %} の一般的なセキュリティ強化

{% data variables.product.prodname_actions %} のセキュリティプラクティスについて詳しく学ぶには、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions)」を参照してください。
