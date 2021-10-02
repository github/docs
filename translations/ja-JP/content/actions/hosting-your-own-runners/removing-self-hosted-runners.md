---
title: セルフホストランナーの削除
intro: 'セルフホストランナーを、{{ site.data.variables.product.prodname_actions }}から恒久的に削除できます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
shortTitle: Remove self-hosted runners
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## リポジトリからのランナーの削除

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

ユーザリポジトリからセルフホストランナーを削除するには、リポジトリのオーナーでなければなりません。 Organizationのリポジトリの場合は、Organizationのオーナーであるか、そのリポジトリの管理アクセスを持っていなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。

{% data reusables.github-actions.self-hosted-runner-reusing %}
{% ifversion fpt %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.settings-sidebar-actions %}
{% data reusables.github-actions.settings-sidebar-actions-runners-updated %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner-updated %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
{% endif %}
## Organizationからのランナーの削除

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Organizationからセルフホストランナーを削除するには、Organizationのオーナーでなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。

{% data reusables.github-actions.self-hosted-runner-reusing %}
{% ifversion fpt %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions %}
{% data reusables.github-actions.settings-sidebar-actions-runners-updated %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner-updated %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
{% endif %}
## Enterprise からランナーを削除する

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}
{% data reusables.github-actions.self-hosted-runner-reusing %}

{% ifversion fpt %}
セルフホストランナーを Enterprise アカウントから削除するには、Enterprise のオーナーである必要があります。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner-updated %}
{% endif %}
{% ifversion ghae or ghes %}
セルフホストランナーを
{% data variables.product.product_location %} の Enterprise レベルで削除するには、サイト管理者である必要があります。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
{% endif %}
