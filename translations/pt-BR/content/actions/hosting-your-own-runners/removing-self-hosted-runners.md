---
title: Remover executores auto-hospedados
intro: 'Você pode remover permanentemente um executor auto-hospedado de um repositório{% ifversion fpt %} ou organização{% elsif ghec or ghes or gahe %}, uma organização ou uma empresa{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remover executores auto-hospedados
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Remover um executor de um repositório

{% note %}

**Observação:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para remover um executor auto-hospedado de um repositório de usuário, você deve ser o proprietário do repositório. Para um repositório da organização, você deve ser um proprietário da organização ou ter acesso de administrador ao repositório. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado. Para obter informações sobre como remover um executor auto-hospedado com a API REST, consulte "[Executores auto-hospedados](/rest/reference/actions#self-hosted-runners)."

{% data reusables.actions.self-hosted-runner-reusing %}
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
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

## Remover um executor de uma organização

{% note %}

**Observação:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para remover um executor auto-hospedado de uma organização, você deve ser um proprietário da organização. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado. Para obter informações sobre como remover um executor auto-hospedado com a API REST, consulte "[Executores auto-hospedados](/rest/reference/actions#self-hosted-runners)."

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

## Remover um executor de uma empresa

{% ifversion fpt %}
Se você usar
{% data variables.product.prodname_ghe_cloud %}, você também pode remover executores de uma empresa. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %}
{% ifversion ghec or ghes or ghae %}
{% note %}

**Observação:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para remover um executor auto-hospedado de uma empresa, você deverá ser um proprietário corporativo. Recomendamos que você também tenha acesso à máquina do executor auto-hospedado. Para obter informações sobre como remover um executor auto-hospedado com a API REST, consulte os pontos de extremidade corporativos na [API REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
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
