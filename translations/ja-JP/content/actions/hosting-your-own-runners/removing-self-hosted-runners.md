---
title: セルフホストランナーの削除
intro: 'You can permanently remove a self-hosted runner from a repository{% ifversion fpt %} or organization{% elsif ghec or ghes or gahe %}, an organization, or an enterprise{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## リポジトリからのランナーの削除

{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

ユーザリポジトリからセルフホストランナーを削除するには、リポジトリのオーナーでなければなりません。 Organizationのリポジトリの場合は、Organizationのオーナーであるか、そのリポジトリの管理アクセスを持っていなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。 For information about how to remove a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% data reusables.github-actions.self-hosted-runner-reusing %}
{% ifversion fpt or ghec %}
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

Organizationからセルフホストランナーを削除するには、Organizationのオーナーでなければなりません。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。 For information about how to remove a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% data reusables.github-actions.self-hosted-runner-reusing %}
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions %}
{% data reusables.github-actions.settings-sidebar-actions-runners-updated %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner-updated %}
{% else %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
{% endif %}
## Enterprise からランナーを削除する

{% ifversion fpt %}
ー
{% data variables.product.prodname_ghe_cloud %}, you can also remove runners from an enterprise. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %}
{% ifversion ghec or ghes or ghae %}
{% note %}

**ノート：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% ifversion ghec %}
セルフホストランナーを Enterprise アカウントから削除するには、Enterprise のオーナーである必要があります。 セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。 For information about how to add a self-hosted runner with the REST API, see the [Enterprise Administration GitHub Actions APIs](/rest/reference/enterprise-admin#github-actions).
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner-updated %}
{% elsif ghae or ghes %}
セルフホストランナーを
{% data variables.product.product_location %}, you must be an enterprise owner. セルフホストランナーのマシンへもアクセスできるようにしておくことをおすすめします。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
{% endif %}
{% endif %}
