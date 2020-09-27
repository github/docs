---
title: Selbst-gehostete Runner entfernen
intro: 'Du kannst einen selbst-gehosteten Runner dauerhaft von {{ site.data.variables.product.prodname_actions }} entfernen.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Einen Runner aus einem Repository entfernen

{% note %}

**Hinweis:** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

To remove a self-hosted runner from a user repository you must be the repository owner. For an organization repository, you must be an organization owner or have admin access to the repository. We recommend that you also have access to the self-hosted runner machine.

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### Einen Runner aus einer Organisation entfernen

{% note %}

**Hinweis:** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

Um einen selbst-gehosteten Runner aus einer Organisation zu entfernen, musst Du ein Organisationsinhaber sein. We recommend that you also have access to the self-hosted runner machine.

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.organizations.navigate-to-org }}
{{ site.data.reusables.organizations.org_settings}}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### Removing a runner from an enterprise

{% note %}

**Hinweis:** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
To remove a self-hosted runner from an enterprise account, you must be an enterprise owner. We recommend that you also have access to the self-hosted runner machine.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
Um einen selbst-gehosteten Runner aus einer Organisation zu entfernen, musst Du ein Organisationsinhaber sein. We recommend that you also have access to the self-hosted runner machine.
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
