---
title: About using GitHub.com actions on GitHub Enterprise Server
intro: '{% data variables.product.prodname_ghe_server %} には、ほとんどの {% data variables.product.prodname_dotcom %} 作成のアクションが含まれ、{% data variables.product.prodname_dotcom_the_website %} および {% data variables.product.prodname_marketplace %} からの他のアクションへのアクセスを有効にするためのオプションがあります。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% data reusables.actions.enterprise-no-internet-actions %}

### {% data variables.product.prodname_ghe_server %} にバンドルされている公式アクション

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_server %} にバンドルされ、{% data variables.product.prodname_marketplace %} からある時点でキャプチャされます。 {% data variables.product.prodname_ghe_server %} インスタンスが更新を受信すると、バンドルされている公式アクションも更新されます。

The bundled official actions include `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler`, and various `actions/setup-` actions, among others. Enterprise インスタンスに含まれるすべての公式アクションを表示するには、インスタンスの `actions` Organization を参照します (https://{% data variables.product.product_url %}/actions)。

Each action is a repository in the `actions` organization, and each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action.

{% note %}

**注釈:** セルフホストランナーを使用して {% data variables.product.prodname_ghe_server %} でセットアップアクション（`actions/setup-LANGUAGE` など）を使用する場合、インターネットにアクセスできないランナーでツールキャッシュをセットアップする必要がある場合があります。 For more information, see "[Setting up the tool cache on self-hosted runners without internet access](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)."

{% endnote %}

### {% data variables.product.prodname_dotcom_the_website %} でアクションへのアクセスを設定する

Enterprise インスタンスのユーザが {% data variables.product.prodname_dotcom_the_website %} または {% data variables.product.prodname_marketplace %} から他のアクションにアクセスする必要がある場合、いくつかの設定オプションがあります。

You can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. 詳しい情報については、「[{% data variables.product.prodname_dotcom_the_website %} からのアクションを手動で同期する](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)」を参照してください。

または、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_ghe_cloud %} に接続することにより、{% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへの自動アクセスを有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。
