---
title: Removing self-hosted runners
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

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Removing a runner from a repository

{% note %}

**Note:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

To remove a self-hosted runner from a user repository you must be the repository owner. For an organization repository, you must be an organization owner or have admin access to the repository. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% data reusables.actions.self-hosted-runner-reusing %}
{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-runners %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-removing-a-runner-updated %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-runners %}
{% data reusables.actions.self-hosted-runner-removing-a-runner %}
{% endif %}

## Removing a runner from an organization

{% note %}

**Note:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

To remove a self-hosted runner from an organization, you must be an organization owner. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% data reusables.actions.self-hosted-runner-reusing %}
{% ifversion fpt or ghes > 3.3 or ghec %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-removing-a-runner-updated %}
{% elsif ghes < 3.4 or ghae %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.self-hosted-runner-removing-a-runner %}
{% endif %}

## Removing a runner from an enterprise

{% ifversion fpt %}
If you use {% data variables.product.prodname_ghe_cloud %}, you can also remove runners from an enterprise. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %}
{% ifversion ghec or ghes or ghae %}
{% note %}

**Note:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

To remove a self-hosted runner from an enterprise, you must be an enterprise owner. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %}
{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-removing-a-runner-updated %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.self-hosted-runner-removing-a-runner %}
{% endif %}
{% endif %}
