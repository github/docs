---
title: Selbst-gehostete Runner entfernen
intro: 'Du kannst einen selbst-gehosteten Runner dauerhaft von {{ site.data.variables.product.prodname_actions }} entfernen.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einen Runner aus einem Repository entfernen

{% note %}

**Hinweis:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

To remove a self-hosted runner from a user repository you must be the repository owner. For an organization repository, you must be an organization owner or have admin access to the repository. We recommend that you also have access to the self-hosted runner machine.

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### Einen Runner aus einer Organisation entfernen

{% note %}

**Hinweis:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Um einen selbst-gehosteten Runner aus einer Organisation zu entfernen, musst Du ein Organisationsinhaber sein. We recommend that you also have access to the self-hosted runner machine.

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### Removing a runner from an enterprise

{% note %}

**Hinweis:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
To remove a self-hosted runner from an enterprise account, you must be an enterprise owner. We recommend that you also have access to the self-hosted runner machine.
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
To remove a self-hosted runner at the enterprise level of
{% data variables.product.product_location %}, you must be a site administrator. We recommend that you also have access to the self-hosted runner machine.
{% endif %}

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
