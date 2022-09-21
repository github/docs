---
title: Inhabilitar o limitar GitHub Actions para tu organización
intro: 'Los propietarios de organización pueden inhabilitar, habilitar y limitar GitHub Actions para la misma.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b72b1e412906b1a2ec7520a9c939d5adefee7dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064686'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.actions.disabling-github-actions %} Para más información sobre {% data variables.product.prodname_actions %}, vea "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.actions.enabled-actions-description %} Puede deshabilitar {% data variables.product.prodname_actions %} para todos los repositorios de la organización. {% data reusables.actions.disabled-actions-description %}

Como alternativa, puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios de la organización, pero limita las acciones {% ifversion actions-workflow-policy %}y los flujos de trabajos reutilizables{% endif %} que puede ejecutar un flujo de trabajo.

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu organización

Puede elegir deshabilitar {% data variables.product.prodname_actions %} para todos los repositorios de la organización, o bien puede permitir solo repositorios concretos. También puedes limitar el uso de acciones públicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}, de modo que los usuarios solo puedan utilizar acciones locales {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} que existan en la {% ifversion ghec or ghes or ghae %}empresa{% else %}organización{% endif %}.

{% note %}

**Nota:** Es posible que no pueda administrar estas configuraciones si la empresa que administra la organización tiene una directiva que lo invalide. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Debajo de "Políticas", selecciona una opción.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Establecimiento de directiva de acciones para esta organización](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![Establecimiento de directiva de acciones para esta organización](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. Haga clic en **Save**(Guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. En "Directivas", selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y agrega las acciones necesarias{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} a la lista.

   {% ifversion actions-workflow-policy %} ![Incorporación de acciones y flujos de trabajo reutilizables a la lista de permitidos](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Incorporación de acciones a la lista de permitidos](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![Incorporación de acciones a la lista de permitidos](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. Haga clic en **Save**(Guardar).

{% ifversion fpt or ghec %}
## Configurar las aprobaciones requeridas para los flujos de trabajo desde las bifurcaciones pùblicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Puedes configurar este comportamiento de una organización utilizando los siguientes procedimientos. El modificar este ajuste anula el ajuste de configuraciòn a nivel empresarial.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Si se inhabilita una política para una empresa, esta no podrá habilitarse para las organizaciones.{% endif %} Si una política se inhabilita para una organización, no podrá habilitarse en los repositorios. Si una organización habilita una política, esta podrá inhabilitarse para los repositorios individuales.

{% data reusables.actions.private-repository-forks-options %}

### Configurar la política de bifurcaciones privadas para una organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## Establecimiento de los permisos de `GITHUB_TOKEN` para la organización

{% data reusables.actions.workflow-permissions-intro %}

Puede configurar los permisos predeterminados para `GITHUB_TOKEN` en la configuración de la organización o los repositorios. Si seleccionas una opción restrictiva como predeterminada en la configuración de tu organización, se seleccionará la misma opción en la configuración de repositorios de la organización y la opción permisiva se deshabilitará. Si tu organización pertenece a una cuenta de {% data variables.product.prodname_enterprise %} y se ha seleccionado un valor predeterminado más restrictivo en la configuración de empresa, no podrás seleccionar el valor predeterminado más permisivo en la configuración de la organización.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuración de los permisos de `GITHUB_TOKEN` predeterminados

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} De manera predeterminada, al crear una organización, `GITHUB_TOKEN` solo tiene acceso de lectura para el ámbito `contents`.
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. En «Permisos de flujo de trabajo», elige si quieres que `GITHUB_TOKEN` tenga acceso de lectura y escritura para todos los ámbitos, o simplemente acceso de lectura para el ámbito `contents`.

   ![Configurar los permisos del GITHUB_TOKEN para esta organización](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Haga clic en **Save** (Guardar) para aplicar los valores.

{% ifversion allow-actions-to-approve-pr %}
### Impedir que {% data variables.product.prodname_actions %} {% ifversion allow-actions-to-approve-pr-with-ent-repo %}cree o {% endif %}apruebe solicitudes de incorporación de cambios

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

De manera predeterminada, al crear una nueva organización, los flujos de trabajo no pueden {% ifversion allow-actions-to-approve-pr-with-ent-repo %}crear ni {% endif %}aprobar solicitudes de incorporación de cambios.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. En "Permisos de flujo de trabajo", usa la opción **Permitir que Acciones de GitHub {% ifversion allow-actions-to-approve-pr-with-ent-repo %}cree y {% endif %}apruebe solicitudes de incorporación de cambios** para configurar si `GITHUB_TOKEN` puede {% ifversion allow-actions-to-approve-pr-with-ent-repo %}crear y {% endif %}aprobar solicitudes de incorporación de cambios.

   ![Establecer el permiso de aprobación de solicitud de incorporación de cambios GITHUB_TOKEN para esta organización](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Haga clic en **Save** para aplicar los valores.

{% endif %}
