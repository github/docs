---
title: セルフホストランナーの削除
intro: 'セルフホストランナーを、{{ site.data.variables.product.prodname_actions }}から恒久的に削除できます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.variables.product.prodname_dotcom }}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### リポジトリからのランナーの削除

{% note %}

**ノート：** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

ユーザリポジトリからセルフホストランナーを削除するには、リポジトリのオーナーでなければなりません。 Organizationのリポジトリの場合は、Organizationのオーナーであるか、そのリポジトリの管理アクセスを持っていなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### Organizationからのランナーの削除

{% note %}

**ノート：** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

Organizationからセルフホストランナーを削除するには、Organizationのオーナーでなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.organizations.navigate-to-org }}
{{ site.data.reusables.organizations.org_settings}}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### Enterprise からランナーを削除する

{% note %}

**ノート：** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
セルフホストランナーを Enterprise アカウントから削除するには、Enterprise のオーナーである必要があります。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
Organizationからセルフホストランナーを削除するには、Organizationのオーナーでなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% endif %}

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{% if currentVersion == "free-pro-team@latest" %}
{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{% endif %}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}
