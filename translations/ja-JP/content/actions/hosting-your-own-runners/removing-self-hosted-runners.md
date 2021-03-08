---
title: セルフホストランナーの削除
intro: 'セルフホストランナーを、{{ site.data.variables.product.prodname_actions }}から恒久的に削除できます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### リポジトリからのランナーの削除

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

ユーザリポジトリからセルフホストランナーを削除するには、リポジトリのオーナーでなければなりません。 Organizationのリポジトリの場合は、Organizationのオーナーであるか、そのリポジトリの管理アクセスを持っていなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### Organizationからのランナーの削除

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Organizationからセルフホストランナーを削除するには、Organizationのオーナーでなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### Enterprise からランナーを削除する

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
セルフホストランナーを Enterprise アカウントから削除するには、Enterprise のオーナーである必要があります。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21"%}
セルフホストランナーを
{% data variables.product.product_location %} の Enterprise レベルで削除するには、サイト管理者である必要があります。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% endif %}

{% data reusables.github-actions.self-hosted-runner-reusing %}


{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
