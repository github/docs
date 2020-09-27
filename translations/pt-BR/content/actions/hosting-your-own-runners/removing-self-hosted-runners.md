---
title: Remover executores auto-hospedados
intro: 'Você pode remover um executor auto-hospedado de {{ site.data.variables.product.prodname_actions }} permantentemente.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Remover um executor de um repositório

{% note %}

**Observação:** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

Para remover um executor auto-hospedado de um repositório de usuário, você deve ser o proprietário do repositório. Para um repositório da organização, você deve ser um proprietário da organização ou ter acesso de administrador ao repositório. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado.

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### Remover um executor de uma organização

{% note %}

**Observação:** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

Para remover um executor auto-hospedado de uma organização, você deve ser um proprietário da organização. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado.

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.organizations.navigate-to-org }}
{{ site.data.reusables.organizations.org_settings}}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### Remover um executor de uma empresa

{% note %}

**Observação:** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
Para remover um executor auto-hospedado de uma conta corporativa, você deve ser um proprietário corporativo. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
Para remover um executor auto-hospedado de uma organização, você deve ser um proprietário da organização. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado.
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
