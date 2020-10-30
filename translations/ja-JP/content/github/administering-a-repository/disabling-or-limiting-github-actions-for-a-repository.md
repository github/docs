---
title: リポジトリの GitHub アクションの無効化や制限
intro: 'リポジトリのオーナーは、特定のリポジトリの {% data variables.product.prodname_actions %} の無効化、有効化、および制限ができます。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### リポジトリの {% data variables.product.prodname_actions %} 権限について

{% data reusables.github-actions.disabling-github-actions %} {% data variables.product.prodname_actions %} について詳しくは、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

リポジトリで {% data variables.product.prodname_actions %} を有効化できます。 {% data reusables.github-actions.enabled-actions-description %} リポジトリの {% data variables.product.prodname_actions %} を完全に無効化することができます。 {% data reusables.github-actions.disabled-actions-description %}

または、リポジトリで {% data variables.product.prodname_actions %} を有効化して、ワークフローで実行できるアクションを制限することもできます。 {% data reusables.github-actions.enabled-local-github-actions %}

### リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

{% note %}

**注釈:** Organization に優先ポリシーがあるか、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 詳しい情報については、「[Organization での {% data variables.product.prodname_actions %} の無効化もしくは制限](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)」または「[Enterprise アカウントで {% data variables.product.prodname_actions %} のポリシーを施行する](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)」を参照してください。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. [Actions permissions] で、オプションを選択します。 ![このリポジトリのアクションを有効化、無効化、または制限する](/assets/images/help/repository/enable-repo-actions.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### リポジトリのプライベートフォークポリシーを設定する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
