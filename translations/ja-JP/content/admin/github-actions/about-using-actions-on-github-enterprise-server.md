---
title: About using actions on GitHub Enterprise Server
intro: '{% data variables.product.prodname_ghe_server %} には、ほとんどの {% data variables.product.prodname_dotcom %} 作成のアクションが含まれ、{% data variables.product.prodname_dotcom_the_website %} および {% data variables.product.prodname_marketplace %} からの他のアクションへのアクセスを有効にするためのオプションがあります。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} workflows can use _actions_, which are individual tasks that you can combine to create jobs and customize your workflow. 独自のアクションの作成、または {% data variables.product.prodname_dotcom %} コミュニティによって共有されるアクションの使用やカスタマイズができます。

{% data reusables.actions.enterprise-no-internet-actions %}

### {% data variables.product.prodname_ghe_server %} にバンドルされている公式アクション

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_server %} にバンドルされ、{% data variables.product.prodname_marketplace %} からある時点でキャプチャされます。 When your {% data variables.product.prodname_ghe_server %} instance is updated, the bundled official actions are also updated.

The bundled official actions include `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler`, and various `actions/setup-` actions, among others. To see all the official actions included on your enterprise instance, browse to the `actions` organization on your instance: <code>https://<em>HOSTNAME</em>/actions</code>.

Each action is a repository in the `actions` organization, and each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action.

{% note %}

**注釈:** セルフホストランナーを使用して {% data variables.product.prodname_ghe_server %} でセットアップアクション（`actions/setup-LANGUAGE` など）を使用する場合、インターネットにアクセスできないランナーでツールキャッシュをセットアップする必要がある場合があります。 For more information, see "[Setting up the tool cache on self-hosted runners without internet access](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)."

{% endnote %}

### {% data variables.product.prodname_dotcom_the_website %} でアクションへのアクセスを設定する

Enterprise インスタンスのユーザが {% data variables.product.prodname_dotcom_the_website %} または {% data variables.product.prodname_marketplace %} から他のアクションにアクセスする必要がある場合、いくつかの設定オプションがあります。

The recommended approach is to enable automatic access to all actions from {% data variables.product.prodname_dotcom_the_website %}. You can do this by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %}. 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。 {% data reusables.actions.enterprise-limit-actions-use %}

Alternatively, if you want stricter control over which actions are allowed in your enterprise, you can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. 詳しい情報については、「[{% data variables.product.prodname_dotcom_the_website %} からのアクションを手動で同期する](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)」を参照してください。
