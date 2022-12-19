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
shortTitle: Remove self-hosted runners
ms.openlocfilehash: d47a2e348f2d1a79342934e70115314d9e62f6f0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092511'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Eliminar un ejecutor de un repositorio

{% note %}

**Nota:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar un ejecutor autoalojado de un repositorio de usuario, debes ser el propietario del repositorio. Para los repositorios organizacionales, debes ser el propietario de la organización o tener acceso de administrador a éste. Te recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado. Para obtener información sobre cómo quitar un ejecutor autohospedado con la API REST, vea "[Ejecutores autohospedados](/rest/reference/actions#self-hosted-runners)".

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Eliminar el ejecutor de una organización

{% note %}

**Nota:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar el ejecutor auto-hospedado de una organización, debes ser el propietario de la misma. Te recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado. Para obtener información sobre cómo quitar un ejecutor autohospedado con la API REST, vea "[Ejecutores autohospedados](/rest/reference/actions#self-hosted-runners)".

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghes > 3.3 or ghec %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghes < 3.4 or ghae %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Eliminar un ejecutor de una empresa

{% ifversion fpt %} Si usa {% data variables.product.prodname_ghe_cloud %}, también puede quitar ejecutores de una empresa. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %} {% ifversion ghec or ghes or ghae %} {% note %}

**Nota:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Para eliminar a un ejecutor auto-hospedado de una empresa, debes ser un propietario de esta. Te recomendamos que también tengas acceso a la máquina del ejecutor auto-hospedado. Para más información sobre cómo agregar un ejecutor autohospedado con la API REST, vea los puntos de conexión de empresa en la [API REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %} {% endif %}
