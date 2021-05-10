---
title: Eliminar ejecutores autoalojados
intro: 'Puedes eliminar permanentemente un ejecutor auto-hospedado de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Eliminar un ejecutor de un repositorio

{% note %}

**Nota:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar un ejecutor auto-hospedado de un repositorio e usuario debes ser el propietario del mismo. Para un repositorio de la organización, debes ser propietario de la organización o tener acceso de administrador al repositorio. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado.

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### Eliminar el ejecutor de una organización

{% note %}

**Nota:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar el ejecutor auto-hospedado de una organización, debes ser el propietario de la misma. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado.

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### Eliminar un ejecutor de una empresa

{% note %}

**Nota:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
Para eliminar a un ejecutor auot-hospedado de una cuenta empresarial, debes ser un propietario de la empresa. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
Para eliminar el ejecutor auto-hospedado de una organización, debes ser el propietario de la misma. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado.
{% endif %}

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% endif %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
