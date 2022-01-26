---
title: Eliminar ejecutores autoalojados
intro: 'Puedes eliminar un ejecutor auto-hospedado permanentemente de un repositorio{% ifversion fpt %} u organización{% elsif ghec or ghes or gahe %}, una organización o una empresa{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Elimina ejecutores auto-hospedados
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Eliminar un ejecutor de un repositorio

{% note %}

**Nota:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar un ejecutor autoalojado de un repositorio de usuario, debes ser el propietario del repositorio. Para los repositorios organizacionales, debes ser el propietario de la organización o tener acceso de administrador a éste. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado. Para obtener más información sobre cómo eliminar un ejecutor auto-hospedado con la API de REST, consulta la sección "[Ejecutores auto-hospedados](/rest/reference/actions#self-hosted-runners)".

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
## Eliminar el ejecutor de una organización

{% note %}

**Nota:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar el ejecutor auto-hospedado de una organización, debes ser el propietario de la misma. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado. Para obtener más información sobre cómo eliminar un ejecutor auto-hospedado con la API de REST, consulta la sección "[Ejecutores auto-hospedados](/rest/reference/actions#self-hosted-runners)".

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
## Eliminar un ejecutor de una empresa

{% ifversion fpt %}
Si utilizas
{% data variables.product.prodname_ghe_cloud %}, también puedes eliminar ejecutores de una empresa. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %}
{% ifversion ghec or ghes or ghae %}
{% note %}

**Nota:** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% ifversion ghec %}
Para eliminar a un ejecutor auot-hospedado de una cuenta empresarial, debes ser un propietario de la empresa. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado. Para obtener más información sobre cómo agregar un ejecutor auto-hospedado con la API de REST, consulta las [API de GitHub Actions para la Administración Empresarial](/rest/reference/enterprise-admin#github-actions).
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner-updated %}
{% elsif ghae or ghes %}
Para eliminar un ejecutor auto-hospedado a nivel empresarial de
{% data variables.product.product_location %}, debes ser un propietario de empresa. Recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
{% endif %}
{% endif %}
