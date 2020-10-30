---
title: Organization について GitHub Actions を無効化または制限する
intro: Organization のオーナーは Organization の GitHub Actions を無効化、有効化、制限することができます。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### Organization の {% data variables.product.prodname_actions %} 権限について

{% data reusables.github-actions.disabling-github-actions %} {% data variables.product.prodname_actions %} について詳しくは、「[{% data variables.product.prodname_actions %} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

Organization のすべてのリポジトリについて {% data variables.product.prodname_actions %} を有効化することができます。 {% data reusables.github-actions.enabled-actions-description %} Organization のすべてのリポジトリについて 、{% data variables.product.prodname_actions %} を無効化できます。 {% data reusables.github-actions.disabled-actions-description %}

あるいは、Organization のすべてのリポジトリについて {% data variables.product.prodname_actions %} を有効化したうえで、ワークフローで実行できるアクションを制限することができます。 {% data reusables.github-actions.enabled-local-github-actions %}

### Organization の {% data variables.product.prodname_actions %} 権限の管理

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Local and third-party Actions**] で、オプションを選択します。 ![この Organization でアクションを有効化、無効化、制限](/assets/images/help/repository/enable-org-actions.png)
1. [**Save**] をクリックします。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Organization のプライベートフォークポリシーを設定する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
