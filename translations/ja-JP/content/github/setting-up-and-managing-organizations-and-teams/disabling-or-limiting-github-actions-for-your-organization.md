---
title: Organization について GitHub Actions を無効化または制限する
intro: Organization のオーナーは Organization の GitHub Actions を無効化、有効化、制限することができます。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.variables.product.prodname_dotcom }}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### Organization の {{ site.data.variables.product.prodname_actions }} 権限について

{{ site.data.reusables.github-actions.disabling-github-actions }} {{ site.data.variables.product.prodname_actions }} について詳しくは、「[{{ site.data.variables.product.prodname_actions }} について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

Organization のすべてのリポジトリについて {{ site.data.variables.product.prodname_actions }} を有効化することができます。 {{ site.data.reusables.github-actions.enabled-actions-description }} Organization のすべてのリポジトリについて 、{{ site.data.variables.product.prodname_actions }} を無効化できます。 {{ site.data.reusables.github-actions.disabled-actions-description }}

あるいは、Organization のすべてのリポジトリについて {{ site.data.variables.product.prodname_actions }} を有効化したうえで、ワークフローで実行できるアクションを制限することができます。 {{ site.data.reusables.github-actions.enabled-local-github-actions }}

### Organization の {{ site.data.variables.product.prodname_actions }} 権限の管理

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
1. [**Local and third-party Actions**] で、オプションを選択します。 ![この Organization でアクションを有効化、無効化、制限](/assets/images/help/repository/enable-org-actions.png)
1. [**Save**] をクリックします。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Organization のプライベートフォークポリシーを設定する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
