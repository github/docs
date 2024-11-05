---
title: Removing self-hosted runners
intro: 'You can permanently remove a self-hosted runner from a repository{% ifversion fpt %} or organization{% elsif ghec or ghes %}, an organization, or an enterprise{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/hosting-your-own-runners/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Removing a runner from a repository

{% note %}

**Notes:**

* {% data reusables.actions.self-hosted-runner-removal-impact %}
* {% data reusables.actions.self-hosted-runner-auto-removal %}
{%- ifversion actions-single-use-tokens %}
* {% data reusables.actions.jit-runner-removal %}
{%- endif %}

{% endnote %}

To remove a self-hosted runner from a user repository you must be the repository owner. Organization owners{% ifversion custom-org-roles %} and users with the "Manage organization runners and runner groups" permission{% endif %} can remove a runner from a repository in the organization. {% ifversion custom-org-roles %}For more information about custom organization roles, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."{% endif %}

We recommend that you also have access to the self-hosted runner machine.

For information about how to remove a self-hosted runner with the REST API, see "[AUTOTITLE](/rest/actions/self-hosted-runners)."

{% data reusables.actions.self-hosted-runner-reusing %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-runners %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-removing-a-runner-updated %}

## Removing a runner from an organization

{% note %}

**Notes:**

* {% data reusables.actions.self-hosted-runner-removal-impact %}
* {% data reusables.actions.self-hosted-runner-auto-removal %}
{%- ifversion actions-single-use-tokens %}
* {% data reusables.actions.jit-runner-removal %}
{%- endif %}

{% endnote %}

To remove a self-hosted runner from an organization, you must be an organization owner{% ifversion custom-org-roles %} or have the "Manage organization runners and runner groups" permission{% endif %}. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see "[AUTOTITLE](/rest/actions/self-hosted-runners)."

{% ifversion custom-org-roles %}For more information about custom organization roles, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."{% endif %}

{% data reusables.actions.self-hosted-runner-reusing %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-removing-a-runner-updated %}

## Removing a runner from an enterprise

{% ifversion fpt %}
If you use {% data variables.product.prodname_ghe_cloud %}, you can also remove runners from an enterprise. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-self-hosted-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %}
{% ifversion ghec or ghes %}
{% note %}

**Notes:**

* {% data reusables.actions.self-hosted-runner-removal-impact %}
* {% data reusables.actions.self-hosted-runner-auto-removal %}
{%- ifversion actions-single-use-tokens %}
* {% data reusables.actions.jit-runner-removal %}
{%- endif %}
{% endnote %}

To remove a self-hosted runner from an enterprise, you must be an enterprise owner. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/actions/self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %}
{% ifversion ghec or ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-removing-a-runner-updated %}
{% endif %}
{% endif %}
